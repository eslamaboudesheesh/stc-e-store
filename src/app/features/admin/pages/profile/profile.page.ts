import { Component, OnInit } from '@angular/core';

import { AdminServices } from '../../services/admin.services';
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

  constructor(public AdminServices: AdminServices) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.AdminServices.GetProducts().subscribe((e) => {
      this.productsList = e;
      console.log(this.productsList);
    });
  }
}
