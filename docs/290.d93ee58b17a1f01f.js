"use strict";(self.webpackChunkappE_commarce=self.webpackChunkappE_commarce||[]).push([[290],{5290:(g,m,c)=>{c.r(m),c.d(m,{CartComponent:()=>A});var l=c(6814),p=c(7668),h=c(1120),t=c(4769),_=c(6286);function b(o,C){if(1&o){const e=t.EpF();t.TgZ(0,"div",9)(1,"div",10),t._UZ(2,"img",11),t.ALo(3,"cuttext"),t.qZA(),t.TgZ(4,"div",12)(5,"div",13)(6,"h3",14),t._uU(7),t.qZA(),t.TgZ(8,"P",15),t._uU(9),t.ALo(10,"currency"),t.qZA(),t.TgZ(11,"button",16,17),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.MAs(12),d=t.oxw(2);return t.KtG(d.removeItem(s.product._id,a))}),t._UZ(13,"i",18),t._uU(14," Remove"),t.qZA()(),t.TgZ(15,"div",19)(16,"button",20,21),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.MAs(17),d=t.MAs(22),v=t.oxw(2);return t.KtG(v.changecount(s.count+1,s.product._id,a,d))}),t._uU(18,"+"),t.qZA(),t.TgZ(19,"span",22),t._uU(20),t.qZA(),t.TgZ(21,"button",20,23),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.MAs(17),d=t.MAs(22),v=t.oxw(2);return t.KtG(v.changecount(s.count-1,s.product._id,a,d))}),t._uU(23,"-"),t.qZA()()()()}if(2&o){const e=C.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH)("alt",t.xi3(3,5,e.product.title,3)),t.xp6(5),t.Oqu(e.product.title),t.xp6(2),t.hij("Price : ",t.xi3(10,8,e.price,"EGP"),""),t.xp6(11),t.Oqu(e.count)}}const n=function(o){return["/checkout",o]};function u(o,C){if(1&o){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"h2"),t._uU(3,"Cart Shop"),t.qZA(),t.TgZ(4,"button",4),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.clearCart())}),t._uU(5,"Clear Your Cart"),t.qZA()(),t.TgZ(6,"div",5)(7,"p",6),t._uU(8),t.ALo(9,"currency"),t.qZA(),t.TgZ(10,"p",6),t._uU(11),t.qZA()(),t.YNc(12,b,24,11,"div",7),t.TgZ(13,"button",8),t._uU(14,"CheckOut"),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(8),t.hij("Total Price : ",t.xi3(9,4,e.cartDetails.totalCartPrice,"EGP "),""),t.xp6(3),t.hij("total number of items : ",e.numOfProducts.numOfCartItems,""),t.xp6(1),t.Q6J("ngForOf",e.cartDetails.products),t.xp6(1),t.Q6J("routerLink",t.VKq(7,n,e.cartDetails._id))}}function x(o,C){1&o&&(t.TgZ(0,"div",24)(1,"h2",25),t._uU(2,"Your Cart Is Loading......"),t.qZA()())}let A=(()=>{class o{constructor(e,r){this._CartService=e,this._Renderer2=r,this.myToken={token:localStorage.getItem("etoken")},this.cartDetails=null}ngOnInit(){localStorage.setItem("current","/cart"),this._CartService.getUserCartApi().subscribe({next:e=>{this.cartDetails=e.data,this.numOfProducts=e,console.log(e)}})}removeItem(e,r){this._Renderer2.setAttribute(r,"disabled","true"),this._CartService.removeItemApi(e).subscribe({next:i=>{this.cartDetails=i.data,this.numOfProducts=i.numOfCartItems,this._Renderer2.removeAttribute(r,"disabled"),this._CartService.cartNum.next(i.numOfCartItems)},error:i=>{this._Renderer2.removeAttribute(r,"disabled")}})}changecount(e,r,i,s){e>=1?(this._Renderer2.setAttribute(i,"disabled","true"),this._Renderer2.setAttribute(s,"disabled","true"),this._CartService.updateCountApi(r,e).subscribe({next:a=>{this.cartDetails=a.data,this._Renderer2.removeAttribute(i,"disabled"),this._Renderer2.removeAttribute(s,"disabled")},error:a=>{this._Renderer2.removeAttribute(i,"disabled"),this._Renderer2.removeAttribute(s,"disabled")}})):e<1&&this.removeItem(r,s)}clearCart(){this._CartService.clearCartApi().subscribe({next:e=>{"success"==e.message&&(this.cartDetails=null)}})}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(_.N),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[["class","container w-75 p-3 mx-auto shadow mt-5 mb-3",4,"ngIf","ngIfElse"],["msg",""],[1,"container","w-75","p-3","mx-auto","shadow","mt-5","mb-3"],[1,"d-flex","justify-content-between","mb-2"],[1,"btn","btn-sm","bg-danger","text-white",3,"click"],[1,"d-flex","justify-content-between","mb-4"],[1,"text-main","h5","mt-2"],["class","row border-bottom py-2 ",4,"ngFor","ngForOf"],[1,"btn","main-btn","my-3",3,"routerLink"],[1,"row","border-bottom","py-2"],[1,"col-md-2"],[1,"w-100",3,"src","alt"],[1,"col-md-10","d-flex","justify-content-between","align-items-center"],[1,"left"],[1,"h5","mb-2"],[1,"h6"],[1,"btn","m-0","p-0","text-danger",3,"click"],["btnRemove",""],[1,"fa-solid","fa-trash-can","me-2"],[1,"right"],[1,"btn","btn-small","fw-bold",3,"click"],["plus",""],[1,"mx-2"],["minus",""],[1,"container","mx-auto","shadow","p-5"],[1,"text-center"]],template:function(r,i){if(1&r&&(t.YNc(0,u,15,9,"div",0),t.YNc(1,x,3,0,"ng-template",null,1,t.W1O)),2&r){const s=t.MAs(2);t.Q6J("ngIf",i.cartDetails)("ngIfElse",s)}},dependencies:[l.ez,l.sg,l.O5,l.H9,p.r,h.rH],styles:[".right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:1px solid #1e86ee;width:40px;height:40px}"]})}return o})()},6286:(g,m,c)=>{c.d(m,{N:()=>t});var l=c(5619),p=c(4769),h=c(9862);let t=(()=>{class _{constructor(n){this._HttpClient=n,this.BaseUrl="https://ecommerce.routemisr.com/",this.myToken={token:localStorage.getItem("etoken")},this.cartNum=new l.X(0)}addToCart(n){return this._HttpClient.post(`${this.BaseUrl}api/v1/cart`,{productId:n},{headers:this.myToken})}getUserCartApi(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart")}removeItemApi(n){return this._HttpClient.delete(`${this.BaseUrl}api/v1/cart/${n}`)}updateCountApi(n,u){return this._HttpClient.put(`${this.BaseUrl}api/v1/cart/${n}`,{count:u})}clearCartApi(){return this._HttpClient.delete(`${this.BaseUrl}api/v1/cart`)}checkout(n,u){return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${n}?url=http://localhost:4200`,{shippingAddress:u},{headers:this.myToken})}getAllOeders(n){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${n}`)}static#t=this.\u0275fac=function(u){return new(u||_)(p.LFG(h.eN))};static#e=this.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()}}]);