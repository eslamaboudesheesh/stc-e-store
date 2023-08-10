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

@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinner,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
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
  ],
  providers: [DialogService],
})
export class SharedModule {}
