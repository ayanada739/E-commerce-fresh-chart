import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private _HttpClient:HttpClient) { }
  BaseUrl:string=`https://ecommerce.routemisr.com/`;
  addToWishListApi(pId:any):Observable<any>{
    return this._HttpClient.post(`${this.BaseUrl}api/v1/wishlist`,{
      productId:pId
    })
  }
  displayWishListApi(

  ):Observable<any>{
    return this._HttpClient.get(`${this.BaseUrl}api/v1/wishlist`)
  }
  removeFromWishListApi(productId:any):Observable<any>{
    return this._HttpClient.delete(`${this.BaseUrl}api/v1/wishlist/${productId}`)
  }
}
