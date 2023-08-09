import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { LoginAction } from '../enums/login-action';
import { AuthService } from '../services/auth.service';

let accountTypeNum = LoginAction;
export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  router.navigateByUrl('/');
  return false;
};

export const loginAuthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.authenticationUser.subscribe((e: number) => {
    if (e === accountTypeNum.LOGOUT) {
      return true;
    }
    if (e === accountTypeNum.ADMIN) {
      router.navigateByUrl('/Admin');

      return false;
    } else {
      router.navigateByUrl('/User');

      return false;
    }
  });
};
