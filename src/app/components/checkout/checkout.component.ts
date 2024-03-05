import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
constructor(private  _FormBuilder:FormBuilder,private _ActivatedRoute:ActivatedRoute,private _CartService:CartService){}
cardId:any
ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
          this.cardId=params.get('id')
          console.log(params.get('id'));
    }
  })
}
checkoutForm:FormGroup=this._FormBuilder.group({
        details: [''],
        phone: [''],
        city: ['']
})

handelForm():void{
    this._CartService.checkout(this.cardId,this.checkoutForm.value).subscribe({
      next:(res)=>{
        // if(res.status=='"success"'){

        // }
        location.href =res.session.url
      }
    })
}
}
