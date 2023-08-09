import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent implements OnInit {
  currentUser!: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    console.log('empty content layout');
  }
  handleLogout() {
    console.log('clear login form local storage');
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
