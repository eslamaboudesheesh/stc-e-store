import { Component, OnInit } from '@angular/core';
import currentJobsData from '../../data';
import { UserServices } from '../../services/user.services';
import { productViewModel } from '../../models/ProductView';
import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  public productsList: any;
  groupedProducts: any[] = []; // Array to store grouped data

  isLoading: boolean = false;
  numOfProducts: number | undefined;
  categories: any = [];
  currentLang: any;
  data = {
    id: 2,
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
    price: 22.3,
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    category: "men's clothing",
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    rating: {
      rate: 4.1,
      count: 259,
    },
  };
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
    this.UserServices.GetProducts().subscribe((e: productViewModel[] | any) => {
      if (e) {
        this.isLoading = false;
        this.productsList = e;
        this.groupProductsByCategory();
        this.numOfProducts = e.length;
      }
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
    this.UserServices.GetAllcategories().subscribe((e) => {
      this.categories = e;
    });
  }

  getProductByCategory(data: string) {
    this.isLoading = true;
    this.UserServices.GetProductByCategory(data).subscribe(
      (e: productViewModel[] | any) => {
        if (e) {
          this.isLoading = false;
          this.productsList = e;
          this.groupProductsByCategory();
          this.numOfProducts = e.length;
        }
      }
    );
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
}
