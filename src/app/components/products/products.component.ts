import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { product } from 'src/app/core/interfaces/user-data';
import { CuttextPipe } from 'src/app/core/services/garuds/pipes/cuttext.pipe';
import { RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,CuttextPipe,RouterLink,NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  constructor(private _ProductsService:ProductsService){}
  pageSize:number=0;
  currentPage:number=1;
  totalProducts:number=0;
  prducts:product[]=[];
  ngOnInit(): void {
    localStorage.setItem('current','/products')
    this._ProductsService.allProductsApi().subscribe({
      next:(res)=>{
            this.prducts=res.data;
            this.pageSize=res.metadata.limit;
            this.pageSize=res.metadata.currentPage;
            this.pageSize=res.results;
      }
    })
};
pageChanged(event:any):void{
    console.log(event);
}


}
