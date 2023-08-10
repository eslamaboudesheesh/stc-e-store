import { Component, OnInit } from '@angular/core';

import { AdminServices } from '../../services/admin.services';
import { DialogService } from 'src/app/shared/services/dialog-confirm/dialog-confirm.services';
import { ToastrService } from 'src/app/shared/services/toastr/toastr.services';
import { ToastrTypes } from 'src/app/shared/enums/toastrTypes';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialog } from '../../components/product-dialog/product-dialog.component';
interface ProductListItem {
  id: number;
  title: string;
  price: any;
  description: string;
  category: string;
  image: string;
  rating: any;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public productsList: any;
  ShowFilter: any;
  isLoading: boolean = false;
  numOfProducts: number | undefined;
  currentLang: any;
  columnsSchema: any[] = [
    {
      label: 'product Name',
      field: 'title',
    },
    {
      label: ' price',
      field: 'price',
    },
    {
      label: 'category',
      field: 'category',
    },
    {
      label: 'description',
      field: 'description',
    },
    {
      label: 'Actions',
      field: '',
    },
  ];
  constructor(
    public AdminServices: AdminServices,
    public dialogService: DialogService,
    private toastrService: ToastrService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.isLoading = true;
    this.AdminServices.GetProducts().subscribe((e) => {
      if (e) {
        this.isLoading = false;
        this.productsList = e;
        this.numOfProducts = this.productsList.length;
      }
    });
  }
  handleAddProduct() {
    console.log('ssd');
  }

  handleAction(actionType: any) {
    console.log(actionType);
    switch (actionType.type) {
      case 1:
        this.openDialog(actionType?.dataItem.id, true);
        break;
      case 2:
        this.openDeletedDialog(actionType?.dataItem);
        break;
      default:
        break;
    }
  }

  openDeletedDialog(dataItem: any) {
    const options = {
      title: 'Delete Product',
      messageTitle: `You are deleting ${dataItem.title} `,
      messageDesc:
        'when you delete this Product you cant use it again until you create a new Product again',
      confirmCheckText: 'Confirm delete this Product',
      cancelText: 'cancel',
      confirmText: 'Delete Product',
    };
    this.dialogService.open(options);

    // action afterClose
    this.dialogService.confirmed().subscribe((e) => {
      if (e) {
        this.deleteProduct(dataItem.id);
      }
    });
  }

  deleteProduct(id: any) {
    this.AdminServices.DeleteProduct(id).subscribe(
      (res: ProductListItem | any) => {
        if (res) {
          this.getProducts();
          this.toastrService.dismiss();
          this.toastrService.showToastr(
            ` Product deletes successfully  ${res.title}    `,
            ToastrTypes.success
          );
        }
      }
    );
  }

  openDialog(id: number, isEditedMode: boolean) {
    const dialogRef = this.dialog.open(ProductDialog, {
      data: {
        isEditedMode: isEditedMode,
        userID: id,
      },
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((data: any) => {
      this.toastrService.dismiss();
      this.toastrService.showToastr(
        ` Product ${id != 0 ? 'updated' : 'created'} successfully  ${
          data.title
        }    `,
        ToastrTypes.success
      );
    });
  }
}
