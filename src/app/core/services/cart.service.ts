import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MyhttpInterceptor } from '../interseptores/myhttp.interceptor';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }
  BaseUrl:string=`https://ecommerce.routemisr.com/`;
  myToken:any={token:localStorage.getItem('etoken')};
  cartNum:BehaviorSubject<number> = new BehaviorSubject(0);
  addToCart(prodId:string):Observable<any>{
    return this._HttpClient.post(`${this.BaseUrl}api/v1/cart`,
    {productId:prodId},
    {headers:this.myToken}
    )
  };
  getUserCartApi():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`)
  }
  removeItemApi(pId:string):Observable<any>{
    return this._HttpClient.delete(`${this.BaseUrl}api/v1/cart/${pId}`)
  }
  updateCountApi(pId:string , countNum:number):Observable<any>{
    return this._HttpClient.put(`${this.BaseUrl}api/v1/cart/${pId}`,{
      count: countNum
  })
  }
  clearCartApi():Observable<any>{
    return this._HttpClient.delete(`${this.BaseUrl}api/v1/cart`)
  }
checkout(cardId:string,userData:object):Observable<any>{
  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardId}?url=http://localhost:4200`,
  {
    shippingAddress:userData
},{
  headers:this.myToken
}
  )
}
getAllOeders(userId:any):Observable<any>{

  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)

}
}

