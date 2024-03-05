import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishListService } from 'src/app/core/services/wish-list.service';
import { product } from 'src/app/core/interfaces/user-data';
import { CuttextPipe } from 'src/app/core/services/garuds/pipes/cuttext.pipe';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule,CuttextPipe,RouterLink],
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
constructor(private _WishListService:WishListService , private _Renderer2:Renderer2,private _CartService:CartService , private _ToastEvokeService:ToastEvokeService) {}
wishListProducts:product[]=[]
ngOnInit(): void {
  localStorage.setItem('current','/wishList')
  this._WishListService.displayWishListApi().subscribe({
    next:(res)=>{
    this.wishListProducts=res.data
  },
  error:(err)=>{

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
      this._ToastEvokeService.success('Success!', res.message).subscribe();
      this._Renderer2.removeAttribute(cartBtn,'disabled')

      this._CartService.cartNum.next(res.numOfCartItems)
    },
    error:(err)=>{
      this._Renderer2.removeAttribute(cartBtn,'disabled')
    }
  })
  }
  addtoWishList(pId:any){
    this._WishListService.addToWishListApi(pId).subscribe({
      next:(res)=>{
        console.log(res);
        this._ToastEvokeService.success('Success!', res.message).subscribe();
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  wishListData:string[]=[];
  removeFromWishList(pId:any){
    this._WishListService.removeFromWishListApi(pId).subscribe({
      next:(res)=>{
        this._ToastEvokeService.success('Success!', res.message).subscribe();
        this.wishListData=res.data;
        this._WishListService.displayWishListApi().subscribe({
          next:(res)=>{
            this.wishListProducts=res.data
          }
        })
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
