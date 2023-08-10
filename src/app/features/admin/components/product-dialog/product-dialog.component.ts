import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminServices } from '../../services/admin.services';
import { productViewModel } from '../../models/ProductView';

@Component({
  selector: 'product-dialog',
  templateUrl: 'product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialog implements OnInit {
  public IsEditedMode: boolean = false;
  loading: boolean = false;
  categories: any = [];
  submitted: boolean = false;

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
    this.AdminServices.GetAllcategories().subscribe((e) => {
      this.categories = e;
    });
  }
  getProductById(id: number) {
    this.AdminServices.GetProductById(id).subscribe((e) => {
      this.AddForm.patchValue(e);
    });
  }
  formSubmit() {
    this.loading = true;
    this.submitted = true;
    if (this.AddForm.invalid) {
      return;
    }
    if (!this.IsEditedMode) {
      this.AdminServices.AddProducts(this.AddForm.value).subscribe((data) => {
        this.dialogRef.close(data);
      });
    } else {
      this.AdminServices.UpdateProducts(
        this.AddForm.value,
        this.data.userID
      ).subscribe((data) => {
        this.dialogRef.close(data);
      });
    }
  }
}
