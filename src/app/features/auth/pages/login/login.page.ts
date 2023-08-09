import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from 'src/app/core/services/auth.service';
import { IUser } from '../../models/UserModelView';
import { LoginAction } from 'src/app/core/enums/login-action';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loading: boolean;
  user: IUser;
  submitted = false;
  accountTypeNum = LoginAction;
  accountsType: any[] = [
    { name: 'User', value: 1, checked: true },
    { name: 'Admin', value: 2, checked: false },
  ];
  constructor(
    private _snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService
  ) {
    this.user = {} as IUser;
    this.loading = false;
  }
  ngOnInit(): void {
    this.formInit();
  }

  public formInit() {
    this.user.type = this.accountTypeNum.USER;
    this.user.password = 'user';
    this.user.userName = 'user';
  }
  public IsAdmin() {
    this.user.type = this.accountTypeNum.ADMIN;
    this.user.password = 'admin';
    this.user.userName = 'admin';
  }
  public radioChange(type: number) {
    if (type == this.accountTypeNum.USER) {
      this.formInit();
    } else {
      this.IsAdmin();
    }
  }
  public signIn(form: NgForm) {
    this.loading = true;
    this.submitted = true;
    if (form.invalid) {
      this.loading = false;
      return;
    }
    if (this.user.type === this.accountTypeNum.USER) {
      this.authService.SignIn(this.accountTypeNum.USER);
      this.router.navigate(['/User']);
    } else {
      this.authService.SignIn(this.accountTypeNum.ADMIN);
      this.router.navigate(['/Admin']);
    }

    this.loading = false;
    this.submitted = false;
  }

  showSnackbar(content: any, action: string, duration: number) {
    let sb = this._snackBar.open(content, action, {
      duration: duration,
      panelClass: ['red-snackbar'],
    });
    sb.onAction().subscribe(() => {
      sb.dismiss();
    });
  }
}
