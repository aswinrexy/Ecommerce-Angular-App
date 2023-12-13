import { Component } from '@angular/core';
import { ICategory } from 'src/app/models/category.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories?:ICategory[];

  constructor(private dataSer:DataService){
    this.dataSer.getCategories().subscribe((response:ICategory[])=>{
      this.categories = response;

    });
  }

}
