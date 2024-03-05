import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/core/interfaces/user-data';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
constructor(private _ProductsService:ProductsService
  ,private _ActivatedRoute:ActivatedRoute
  ,private _CartService:CartService,
  private toastEvokeService: ToastEvokeService,
  private _Renderer2:Renderer2){}
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    }
  },
  nav: true
}
pDetails:product={} as product;
ngOnInit(): void {
  localStorage.setItem('current','/details')
  this._ActivatedRoute.paramMap.subscribe({
    next:(prams)=>{
      let pId:any =prams.get('id');
      this._ProductsService.ProductDetailsApi(pId).subscribe({
        next:(res)=>{
          this.pDetails=res.data
        }
      })
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
}
