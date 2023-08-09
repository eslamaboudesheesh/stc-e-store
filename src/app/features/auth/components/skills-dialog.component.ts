import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'skills-dialog',
  templateUrl: 'skills-dialog.component.html',
  styleUrls: ['./skills-dialog.component.scss'],
})
export class SkillsDialog {
  message: string = 'Are you sure?';
  confirmButtonText = 'Yes';
  cancelButtonText = 'Cancel';
  Skills: any[] = [
    {
      text: 'Art',
      status: false,
    },
    {
      text: 'Academics',
      status: true,
    },
    {
      text: 'Computers & IT',
      status: false,
    },
    {
      text: 'Interactive web development',
      status: false,
    },
    {
      text: 'Profit & Non-profit development',
      status: false,
    },
    {
      text: 'Hobbies & Crafts',
      status: false,
    },
    {
      text: 'Interactive web development',
      status: false,
    },
    {
      text: 'Profit & Non-profit development',
      status: false,
    },
    {
      text: 'Hobbies & Crafts',
      status: false,
    },
    {
      text: 'Interactive web development',
      status: false,
    },
    {
      text: 'Profit & Non-profit development',
      status: false,
    },
    {
      text: 'Hobbies & Crafts',
      status: false,
    },
    {
      text: 'Interactive web development',
      status: false,
    },
    {
      text: 'Profit & Non-profit development',
      status: false,
    },
    {
      text: 'Hobbies & Crafts',
      status: false,
    },
    {
      text: 'Interactive web development',
      status: false,
    },
    {
      text: 'Profit & Non-profit development',
      status: false,
    },
    {
      text: 'Hobbies & Crafts',
      status: false,
    },
    {
      text: 'Interactive web development',
      status: false,
    },
    {
      text: 'Profit & Non-profit development',
      status: false,
    },
    {
      text: 'Hobbies & Crafts',
      status: false,
    },
    {
      text: 'Interactive web development',
      status: false,
    },
    {
      text: 'Profit & Non-profit development',
      status: false,
    },
    {
      text: 'Hobbies & Crafts',
      status: false,
    },
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<SkillsDialog>
  ) {
    console.log(this.data);
  }

  onConfirmClick(): void {
    this.dialogRef.close(this.Skills);
  }

  ChangeSkillsStatus(index: number) {
    this.Skills[index].status = !this.Skills[index].status;
  }
}
