import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { CuttextPipe } from 'src/app/core/services/garuds/pipes/cuttext.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule ,CuttextPipe,RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
constructor(private _CartService:CartService , private _Renderer2:Renderer2){}
myToken:any={token:localStorage.getItem('etoken')};
cartDetails:any=null;
numOfProducts:any;
  ngOnInit(): void {
      localStorage.setItem('current','/cart')
    this._CartService.getUserCartApi().subscribe({
          next:(res)=>{
            this.cartDetails=res.data
            this.numOfProducts=res
            console.log(res);
          }
    })
  }
  removeItem(id:string ,btnRemove: HTMLButtonElement):void{
    this._Renderer2.setAttribute(btnRemove,'disabled','true')
      this._CartService.removeItemApi(id).subscribe({
        next:(res)=>{
            this.cartDetails=res.data;
            this.numOfProducts=res.numOfCartItems;
            this._Renderer2.removeAttribute(btnRemove,'disabled');
            this._CartService.cartNum.next(res.numOfCartItems)
        },
        error:(err)=>{
          this._Renderer2.removeAttribute(btnRemove,'disabled')
        }
      })
  }
  changecount(count:number,id:string,plus:HTMLButtonElement,minus:HTMLButtonElement):void{

      if(count>=1){
        this._Renderer2.setAttribute(plus,'disabled','true');
        this._Renderer2.setAttribute(minus,'disabled','true');
        this._CartService.updateCountApi(id,count).subscribe({
          next:(res)=>{
            this.cartDetails=res.data
            this._Renderer2.removeAttribute(plus,'disabled')
            this._Renderer2.removeAttribute(minus,'disabled')
          },
          error:(err)=>{
            this._Renderer2.removeAttribute(plus,'disabled')
            this._Renderer2.removeAttribute(minus,'disabled')
          }
        })

      }
      else if(count<1){
        this.removeItem(id,minus)
      }
  }
  clearCart():void{
      this._CartService.clearCartApi().subscribe({
        next:(res)=>{
          if(res.message=="success"){
            this.cartDetails=null
          }
        }
      })
  }
}
