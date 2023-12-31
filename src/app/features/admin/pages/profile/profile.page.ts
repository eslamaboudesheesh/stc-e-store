import { Component, OnDestroy, OnInit } from '@angular/core';

import { AdminServices } from '../../services/admin.services';
import { DialogService } from 'src/app/shared/services/dialog-confirm/dialog-confirm.services';
import { ToastrService } from 'src/app/shared/services/toastr/toastr.services';
import { ToastrTypes } from 'src/app/shared/enums/toastrTypes';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialog } from '../../components/product-dialog/product-dialog.component';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { Subscriptions } from 'src/app/shared/utilits/subscription.class';
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
export class ProfilePage implements OnInit, OnDestroy {
  public productsList: any;
  ShowFilter: any;
  isLoading: boolean = false;
  numOfProducts: number | undefined;
  currentLang: any;
  columnsSchema: any[] = [
    {
      label: 'product Name',
      field: 'title',
      EN: 'PRODUCT_NAME',
    },
    {
      label: ' price',
      field: 'price',
      EN: 'PRICE',
    },
    {
      label: 'category',
      field: 'category',
      EN: 'CATEGORY',
    },
    {
      label: 'description',
      field: 'description',
      EN: 'DESCRIPTION',
    },
    {
      label: 'Actions',
      field: '',
      EN: 'ACTIONS',
    },
  ];
  subscription = new Subscriptions();

  constructor(
    public AdminServices: AdminServices,
    public dialogService: DialogService,
    private toastrService: ToastrService,
    private dialog: MatDialog,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.currentLang = this.translationService.currentLanguage$.subscribe(
      (language) => {
        this.getProducts();
      }
    );
  }
  getProducts(): void {
    this.isLoading = true;
    this.subscription.add = this.AdminServices.GetProducts().subscribe({
      next: (e) => {
        this.isLoading = false;
        this.productsList = e;
        this.numOfProducts = this.productsList.length;
      },
    });
  }

  handleAction(actionType: any) {
    console.log(actionType);
    switch (actionType.type) {
      case 0:
        this.openDialog(actionType?.dataItem.id, true);
        break;
      case 1:
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
    this.subscription.add = this.AdminServices.DeleteProduct(id).subscribe({
      next: (res: ProductListItem | any) => {
        if (res) {
          this.getProducts();
          this.toastrService.dismiss();
          this.toastrService.showToastr(
            ` Product deletes successfully${res.title}`,
            ToastrTypes.success
          );
        }
      },
    });
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
      if (data) {
        this.toastrService.showToastr(
          ` Product ${id != 0 ? 'updated' : 'created'} successfully  ${
            data.title
          }    `,
          ToastrTypes.success
        );
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
