import { Component, ElementRef, HostListener, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-blank-nav',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './blank-nav.component.html',
  styleUrls: ['./blank-nav.component.scss']
})
export class BlankNavComponent implements OnInit {
  constructor(private _Router:Router , private _CartService:CartService , private _Renderer2:Renderer2){}
  @ViewChild("navBlank") navElement!:ElementRef

  @HostListener("window:scroll")
  onScroll():void{
      if(scrollY>300){
        this._Renderer2.addClass(this.navElement.nativeElement, 'p-0');
        this._Renderer2.addClass(this.navElement.nativeElement, 'shadow');
      }
      else{
        this._Renderer2.removeClass(this.navElement.nativeElement, 'p-0');
        this._Renderer2.removeClass(this.navElement.nativeElement, 'shadow');
      }
  }
  cartNum:number=0
  ngOnInit(): void {
        this._CartService.cartNum.subscribe({
          next:(data)=>{
            this.cartNum=data;

          }
        })
        this._CartService.getUserCartApi().subscribe({
          next:(res)=>{
            this.cartNum=res.numOfCartItems
          }
        })
  }
  logOut(){
    localStorage.removeItem('etoken')
    this._Router.navigate(['/login'])
  }
}
