import {  Category } from './../../core/interfaces/user-data';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from 'src/app/core/services/products.service';
import { RouterLink } from '@angular/router';
import { product } from 'src/app/core/interfaces/user-data';
import { CuttextPipe } from 'src/app/core/services/garuds/pipes/cuttext.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';
import { SearchPipe } from 'src/app/core/services/garuds/pipes/search.pipe';
import { WishListService } from 'src/app/core/services/wish-list.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule, RouterLink,CuttextPipe,CarouselModule,FormsModule,SearchPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
constructor(private _ProductsService:ProductsService ,
  private _CartService:CartService,
  private _Renderer2:Renderer2,private toastEvokeService: ToastEvokeService,
  private _WishListService:WishListService){}
inputValue:string='';
wishListData:string[]=[];
categoriesOptions: OwlOptions = {
  loop: true,
  autoplay:true,
  autoplayTimeout:6000,
  autoplaySpeed:1000,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 2
    },
    400: {
      items: 3
    },
    740: {
      items: 4
    },
    940: {
      items: 6
    }
  },
  nav: true
}
mainSliderOptions: OwlOptions = {
  loop: true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplaySpeed:1000,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
 items:1,
  nav: true
}
products:product[]=[];
Categories:Category[]=[];
ngOnInit(): void {
  localStorage.setItem('current','/home')
    this._ProductsService.allProductsApi().subscribe({
      next:(res)=>{
        this.products=res.data
      }
    })
    this._ProductsService.getCategories().subscribe({
      next:(res)=>{
            this.Categories=res.data;
            // console.log(res.data);
          }
    })
    this._WishListService.displayWishListApi().subscribe({
      next:(res)=>{
        const newData =res.data.map((item:any)=>item._id)
        this.wishListData=newData
        // console.log(newData);
      }
})
}
addProduct(id:any , cartBtn:HTMLButtonElement):void{
this._Renderer2.setAttribute(cartBtn,'disabled','true')
this._CartService.addToCart(id).subscribe({
  next:(res)=>{
    this.toastEvokeService.success('Success!', res.message).subscribe();
    this._Renderer2.removeAttribute(cartBtn,'disabled')

    this._CartService.cartNum.next(res.numOfCartItems)
  },
  error:(err)=>{
    this._Renderer2.removeAttribute(cartBtn,'disabled')
  }
})
}
userWord:string='';
addtoWishList(pId:any){
  this._WishListService.addToWishListApi(pId).subscribe({
    next:(res)=>{
      this.toastEvokeService.success('Success!', res.message).subscribe();
      this.wishListData=res.data
    },
    error:(err)=>{
      console.log(err);
    }
  })
}
removeFromWishList(pId:any){
  this._WishListService.removeFromWishListApi(pId).subscribe({
    next:(res)=>{
      this.toastEvokeService.success('Success!', res.message).subscribe();
      this.wishListData=res.data
    },
    error:(err)=>{
      console.log(err);
    }
  })
}
}
