import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';
import { Category, Subcategory } from 'src/app/core/interfaces/user-data';

@Component({
  selector: 'app-categories-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.scss']
})
export class CategoriesDetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService){}
  categoryId:any;
  cDetails:Category={} as Category;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(parms)=>{
          this.categoryId=  parms.get('id')
      }
    })
    this._ProductsService.getCategoriesDetails(this.categoryId).subscribe({
      next:(res)=>{
        this.cDetails=res.data
      }
    })
  }

}
