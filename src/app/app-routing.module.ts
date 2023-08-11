import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { FullLayoutComponent } from './layout/full-layout/components/full-layout.component';
import {
  authGuardIsUser,
  authGuardIsAdmin,
  loginAuthGuard,
} from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    canActivate: [loginAuthGuard],
    children: [
      {
        path: '',

        loadChildren: () =>
          import('./features/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },

  {
    path: 'Admin',
    component: ContentLayoutComponent,
    canActivateChild: [authGuardIsAdmin],

    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },
  {
    path: 'User',
    component: ContentLayoutComponent,
    canActivateChild: [authGuardIsUser],

    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/user/user.module').then((m) => m.UserModule),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
