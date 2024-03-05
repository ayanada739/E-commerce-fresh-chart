 import { Brand } from './../../core/interfaces/user-data';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit{
constructor(private _ProductsService:ProductsService){}
Brands:Brand[]=[];
ngOnInit(): void {
  localStorage.setItem('current','/brands')
  this._ProductsService.getBrands().subscribe({
    next:(res)=>{
        this.Brands=res.data
    }
  })
}
}
