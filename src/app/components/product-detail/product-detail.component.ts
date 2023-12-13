import { Component } from '@angular/core';
import { IProduct } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  id:any;
  product? : IProduct;
 constructor(private dataSer:DataService,private activateRoute:ActivatedRoute){
  this.id=this.activateRoute.snapshot.paramMap.get('id')
  this.dataSer.getProductById(this.id).subscribe((response:IProduct)=>{
    this.product = response;
  })
 }

}
