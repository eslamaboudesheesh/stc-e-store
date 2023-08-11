import { Injectable } from '@angular/core';

import { LoginAction } from 'src/app/core/enums/login-action';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accountTypeNum = LoginAction;

  constructor() {}

  SignIn(data: number) {
    localStorage.setItem('roleType', JSON.stringify(data));
  }

  LogOut() {
    localStorage.removeItem('roleType');
  }
}
