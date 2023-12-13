import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products?: IProduct[];
  constructor(private datser:DataService,private router:Router){
    this.datser.getProducts().subscribe((response:IProduct[])=>{
      this.products = response;
    })
  }
  onButtonClicked(product:IProduct){
    this.router.navigate(['product-detail',product.productId])
  }
}
