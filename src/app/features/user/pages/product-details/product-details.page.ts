import { Component, OnInit } from '@angular/core';

import { TranslationService } from 'src/app/core/services/translation/translation.service';
import { UserServices } from '../../services/user.services';
import { productViewModel } from '../../models/ProductView';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  public productDetails: any;
  public id: number = 0;
  isLoading: boolean = false;
  currentLang: any;

  constructor(
    private UserServices: UserServices,
    private translationService: TranslationService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.currentLang = this.translationService.currentLanguage$.subscribe(
      (language) => {
        this.getProduct(this.id);
      }
    );
  }

  getProduct(id: number): void {
    this.isLoading = true;
    this.UserServices.GetProduct(id).subscribe((e: productViewModel | any) => {
      if (e) {
        this.isLoading = false;
        this.productDetails = e;
        console.log(this.productDetails);
      }
    });
  }
}
