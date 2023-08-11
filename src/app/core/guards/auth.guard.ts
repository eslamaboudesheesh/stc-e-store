import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAction } from '../enums/login-action';

let accountTypeNum = LoginAction;
export const authGuardIsAdmin = () => {
  const router = inject(Router);
  const getRole: any = localStorage.getItem('roleType');

  if (Number(getRole) != accountTypeNum.ADMIN) {
    router.navigateByUrl('/login');
    return false;
  } else {
    return true;
  }
};

export const authGuardIsUser = () => {
  const router = inject(Router);
  const getRole: any = localStorage.getItem('roleType');

  if (Number(getRole) != accountTypeNum.USER) {
    router.navigateByUrl('/login');
    return false;
  } else {
    return true;
  }
};

export const loginAuthGuard = () => {
  const router = inject(Router);
  const getRole: any = localStorage.getItem('roleType');

  if (!Number(getRole)) {
    return true;
  } else if (Number(getRole) == accountTypeNum.USER) {
    router.navigateByUrl('/User');
    return false;
  } else {
    router.navigateByUrl('/Admin');
    return false;
  }
};
