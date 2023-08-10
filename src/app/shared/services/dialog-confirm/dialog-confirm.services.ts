import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DialogComponent } from '../../components/dialog/dialog.component';
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}
  dialogRef: MatDialogRef<DialogComponent> | any;

  public open(options: any) {
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: options.title,
        messageTitle: options.messageTitle,
        messageDesc: options.messageDesc,
        confirmCheckText: options.confirmCheckText,
        cancelText: options.cancelText,
        confirmText: options.confirmText,
      },
    });
  }
  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(
      take(1),
      map((res) => {
        return res;
      })
    );
  }
}
