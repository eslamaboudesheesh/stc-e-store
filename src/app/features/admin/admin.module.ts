import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProfilePage } from './pages/profile/profile.page';
import { EventsCardComponent } from './components/events-card/events-card.component';
import { OppCardComponent } from './components/opps-card/opp-card.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminServices } from './services/admin.services';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

import { CdkTableModule } from '@angular/cdk/table';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductDialog } from './components/product-dialog/product-dialog.component';
@NgModule({
  declarations: [
    ProfilePage,
    EventsCardComponent,
    OppCardComponent,
    ProductTableComponent,
    ProductDialog,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    ClipboardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    MatButtonModule,
  ],
  providers: [AdminServices],
})
export class AdminModule {}
