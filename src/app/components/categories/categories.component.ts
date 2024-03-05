import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { Category } from 'src/app/core/interfaces/user-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  constructor(private _ProductsService:ProductsService){}
  categories:Category[]=[];
  ngOnInit(): void {
    localStorage.setItem('current','/categories')
    this._ProductsService.getCategories().subscribe(
      {
        next:(res)=>{
              this.categories=res.data
        }
      }
    )
  }
}
