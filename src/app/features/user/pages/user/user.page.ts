import { Component, OnDestroy, OnInit } from '@angular/core';
import currentJobsData from '../../data';
import { UserServices } from '../../services/user.services';
import { productViewModel } from '../../models/ProductView';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { Router } from '@angular/router';
import { Fade } from 'src/app/shared/animations/fade.animation';
import { Subscriptions } from 'src/app/shared/utilits/subscription.class';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  animations: [Fade],
})
export class UserPage implements OnInit, OnDestroy {
  public productsList: any;
  groupedProducts: any[] = []; // Array to store grouped data

  isLoading: boolean = false;
  numOfProducts: number | undefined;
  categories: any = [];
  currentLang: any;
  subscription = new Subscriptions();

  constructor(
    private UserServices: UserServices,
    private translationService: TranslationService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.currentLang = this.translationService.currentLanguage$.subscribe(
      (language) => {
        this.getProducts();
        this.getCategories();
      }
    );
  }

  getProducts(): void {
    this.isLoading = true;
    this.subscription.add = this.UserServices.GetProducts().subscribe({
      next: (e: productViewModel[] | any) => {
        if (e) {
          this.isLoading = false;
          this.productsList = e;
          this.groupProductsByCategory();
          this.numOfProducts = e.length;
        }
      },
    });
  }
  groupProductsByCategory() {
    const grouped = this.productsList.reduce((result: any, product: any) => {
      const category = product.category;
      if (!result[category]) {
        result[category] = [];
      }
      result[category].push(product);
      return result;
    }, {});

    this.groupedProducts = Object.keys(grouped).map((category) => ({
      categoryName: category,
      products: grouped[category],
    }));
  }
  getCategories() {
    this.subscription.add = this.UserServices.GetAllcategories().subscribe({
      next: (e) => {
        this.categories = e;
      },
    });
  }

  getProductByCategory(data: string) {
    this.isLoading = true;
    this.subscription.add = this.UserServices.GetProductByCategory(
      data
    ).subscribe({
      next: (e: productViewModel[] | any) => {
        if (e) {
          this.isLoading = false;
          this.productsList = e;
          this.groupProductsByCategory();
          this.numOfProducts = e.length;
        }
      },
    });
  }
  FilterCategories(data: string) {
    if (data) {
      this.getProductByCategory(data);
    } else {
      this.getProducts();
    }
  }
  OpenCardDetailsFn(data: number) {
    this.router.navigate([`User/product/${data}`]);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
