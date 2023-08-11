import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { CardComponent } from './components/cards/card.component';

import { UserRoutingModule } from './user-routing.module';
import { UserPage } from './pages/user/user.page';
import { UserServices } from './services/user.services';
import { ProductDetailsPage } from './pages/product-details/product-details.page';
@NgModule({
  declarations: [UserPage, CardComponent, ProductDetailsPage],
  imports: [CommonModule, SharedModule, UserRoutingModule],
  providers: [UserServices],
})
export class UserModule {}
