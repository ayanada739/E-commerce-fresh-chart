import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-all-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit {
constructor(private _CartService:CartService, private _AuthService:AuthService){}
userDataId:any;
allorders:[]=[];
cartItems:[]=[];
ngOnInit(): void {
  this._AuthService.decodeUserData()
  this.userDataId=this._AuthService.userId;
  console.log(this.userDataId);
  this._CartService.getAllOeders(this.userDataId).subscribe({
    next:(res)=>{
      this.allorders=res;
      this.cartItems=res['']
      console.log(this.cartItems);
      console.log(this.allorders);
    }
  })
}
}
