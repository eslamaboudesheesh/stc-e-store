import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminServices } from '../../services/admin.services';
import { Subscriptions } from 'src/app/shared/utilits/subscription.class';

@Component({
  selector: 'product-dialog',
  templateUrl: 'product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialog implements OnInit, OnDestroy {
  public IsEditedMode: boolean = false;
  loading: boolean = false;
  categories: any = [];
  submitted: boolean = false;
  subscription = new Subscriptions();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<ProductDialog>,
    public AdminServices: AdminServices
  ) {
    this.IsEditedMode = this.data.isEditedMode;
    if (this.IsEditedMode) {
      this.getProductById(this.data.userID);
    }
  }
  AddForm = new FormGroup({
    title: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl(''),
  });

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.subscription.add = this.AdminServices.GetAllcategories().subscribe({
      next: (e) => {
        this.categories = e;
      },
    });
  }
  getProductById(id: number) {
    this.subscription.add = this.AdminServices.GetProductById(id).subscribe({
      next: (e) => {
        this.AddForm.patchValue(e);
      },
    });
  }
  formSubmit() {
    this.loading = true;
    this.submitted = true;
    if (this.AddForm.invalid) {
      return;
    }
    if (!this.IsEditedMode) {
      this.subscription.add = this.AdminServices.AddProducts(
        this.AddForm.value
      ).subscribe({
        next: (data) => {
          this.dialogRef.close(data);
        },
      });
    } else {
      this.subscription.add = this.AdminServices.UpdateProducts(
        this.AddForm.value,
        this.data.userID
      ).subscribe({
        next: (data) => {
          this.dialogRef.close(data);
        },
      });
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
