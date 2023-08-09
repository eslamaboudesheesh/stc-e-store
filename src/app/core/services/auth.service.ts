import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { LoginAction } from 'src/app/core/enums/login-action';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accountTypeNum = LoginAction;

  public authenticationUser = new BehaviorSubject<any>(undefined);
  ruleObs = this.authenticationUser.asObservable();
  constructor() {}

  SignIn(data: number) {
    this.authenticationUser.next(data);
  }

  LogOut() {
    this.authenticationUser.next(this.accountTypeNum.LOGOUT);
  }
}
