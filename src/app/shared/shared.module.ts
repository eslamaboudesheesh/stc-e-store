import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinner } from './components/progress/progress';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogService } from './services/dialog-confirm/dialog-confirm.services';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { RtlDirective } from './directives/rtl.directive';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DialogComponent, RtlDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinner,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    TranslateModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinner,
    DialogComponent,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    RtlDirective,
    TranslateModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [DialogService],
})
export class SharedModule {}
