import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPage } from './pages/user/user.page';
import { ProductDetailsPage } from './pages/product-details/product-details.page';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full',
      },
      {
        path: '',
        component: UserPage,
      },
      {
        path: 'product/:id',
        component: ProductDetailsPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
