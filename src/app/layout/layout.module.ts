import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullLayoutComponent } from './full-layout/components/full-layout.component';
import { NavComponent } from './full-layout/components/nav/nav.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { FooterComponent } from './full-layout/components/footer/footer.component';
import { NavLoginComponent } from './content-layout/components/nav-login/nav-login.component';
import { FooterLoginComponent } from './content-layout/components/footer-login/footer-login.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FullLayoutComponent,
    NavComponent,
    ContentLayoutComponent,
    FooterComponent,
    FooterLoginComponent,
    NavLoginComponent,
  ],
  exports: [FullLayoutComponent, ContentLayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
})
export class LayoutModule {}
