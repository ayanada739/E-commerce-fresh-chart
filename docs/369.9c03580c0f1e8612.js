"use strict";(self.webpackChunkappE_commarce=self.webpackChunkappE_commarce||[]).push([[369],{8369:(O,p,r)=>{r.r(p),r.d(p,{HomeComponent:()=>y});var l=r(6814),c=r(95),d=r(1120),g=r(7668),u=r(5819),e=r(4769);let h=(()=>{class s{transform(t,i){return t.filter(o=>o.title.toLowerCase().includes(i.toLowerCase()))}static#e=this.\u0275fac=function(i){return new(i||s)};static#t=this.\u0275pipe=e.Yjl({name:"search",type:s,pure:!0,standalone:!0})}return s})();var _=r(1132),v=r(6286),f=r(4219),x=r(8806);function Z(s,a){1&s&&e._UZ(0,"img",13)}function C(s,a){1&s&&e._UZ(0,"img",14)}function T(s,a){1&s&&e._UZ(0,"img",15)}function S(s,a){if(1&s&&(e._UZ(0,"img",17),e.TgZ(1,"h3",18),e._uU(2),e.qZA()),2&s){const t=e.oxw().$implicit;e.Q6J("src",t.image,e.LSH)("alt",t.name),e.xp6(2),e.Oqu(t.name)}}function A(s,a){if(1&s&&(e.ynx(0),e.YNc(1,S,3,3,"ng-template",16),e.BQk()),2&s){const t=a.$implicit;e.xp6(1),e.Q6J("id",t._id)}}function w(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"i",31),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,n=e.oxw();return e.KtG(n.addtoWishList(o._id))}),e.qZA()}}function L(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"i",32),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,n=e.oxw();return e.KtG(n.removeFromWishList(o._id))}),e.qZA()}}const b=function(s){return["/details",s]};function H(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",19),e.YNc(1,w,1,0,"i",20),e.YNc(2,L,1,0,"i",21),e.TgZ(3,"div",22)(4,"div",23),e._UZ(5,"img",24),e.TgZ(6,"h3",25),e._uU(7),e.qZA(),e.TgZ(8,"div",26)(9,"h2",25),e._uU(10),e.ALo(11,"cuttext"),e.qZA()(),e.TgZ(12,"div",26)(13,"p"),e._uU(14),e.TgZ(15,"span"),e._uU(16,"EGP"),e.qZA()(),e.TgZ(17,"div",27),e._UZ(18,"i",28),e.TgZ(19,"span"),e._uU(20),e.qZA()()()(),e.TgZ(21,"button",29,30),e.NdJ("click",function(){const n=e.CHM(t).$implicit,m=e.MAs(22),J=e.oxw();return e.KtG(J.addProduct(n._id,m))}),e._uU(23," Add To Cart "),e.qZA()()()}if(2&s){const t=a.$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngIf",!i.wishListData.includes(t._id)),e.xp6(1),e.Q6J("ngIf",i.wishListData.includes(t._id)),e.xp6(2),e.Q6J("routerLink",e.VKq(11,b,t._id)),e.xp6(1),e.Q6J("src",t.imageCover,e.LSH),e.xp6(2),e.Oqu(t.category.name),e.xp6(3),e.Oqu(e.xi3(11,8,t.title,3)),e.xp6(4),e.Oqu(t.price),e.xp6(6),e.Oqu(t.ratingsAverage)}}let y=(()=>{class s{constructor(t,i,o,n,m){this._ProductsService=t,this._CartService=i,this._Renderer2=o,this.toastEvokeService=n,this._WishListService=m,this.inputValue="",this.wishListData=[],this.categoriesOptions={loop:!0,autoplay:!0,autoplayTimeout:6e3,autoplaySpeed:1e3,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!1,navSpeed:700,navText:["",""],responsive:{0:{items:2},400:{items:3},740:{items:4},940:{items:6}},nav:!0},this.mainSliderOptions={loop:!0,autoplay:!0,autoplayTimeout:5e3,autoplaySpeed:1e3,mouseDrag:!0,touchDrag:!0,pullDrag:!0,dots:!1,navSpeed:700,navText:["",""],items:1,nav:!0},this.products=[],this.Categories=[],this.userWord=""}ngOnInit(){localStorage.setItem("current","/home"),this._ProductsService.allProductsApi().subscribe({next:t=>{this.products=t.data}}),this._ProductsService.getCategories().subscribe({next:t=>{this.Categories=t.data}}),this._WishListService.displayWishListApi().subscribe({next:t=>{const i=t.data.map(o=>o._id);this.wishListData=i}})}addProduct(t,i){this._Renderer2.setAttribute(i,"disabled","true"),this._CartService.addToCart(t).subscribe({next:o=>{this.toastEvokeService.success("Success!",o.message).subscribe(),this._Renderer2.removeAttribute(i,"disabled"),this._CartService.cartNum.next(o.numOfCartItems)},error:o=>{this._Renderer2.removeAttribute(i,"disabled")}})}addtoWishList(t){this._WishListService.addToWishListApi(t).subscribe({next:i=>{this.toastEvokeService.success("Success!",i.message).subscribe(),this.wishListData=i.data},error:i=>{console.log(i)}})}removeFromWishList(t){this._WishListService.removeFromWishListApi(t).subscribe({next:i=>{this.toastEvokeService.success("Success!",i.message).subscribe(),this.wishListData=i.data},error:i=>{console.log(i)}})}static#e=this.\u0275fac=function(i){return new(i||s)(e.Y36(_.s),e.Y36(v.N),e.Y36(e.Qsj),e.Y36(f.nm),e.Y36(x.i))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-home"]],standalone:!0,features:[e.jDz],decls:22,vars:8,consts:[[1,"container","p-5"],[1,"row","g-0"],[1,"col-md-9"],[3,"options"],["carouselSlide",""],[1,"col-md-3"],["src","../../../assets/images/blog-img-1.jpeg",1,"w-100",2,"height","150px"],["src","../../../assets/images/blog-img-2.jpeg",1,"w-100",2,"height","150px"],[1,"p-5","container"],[4,"ngFor","ngForOf"],["placeholder","Seach Product ByName",1,"rounded","w-50","mx-auto","d-block","p-2","my-3",3,"ngModel","ngModelChange"],[1,"row","g-5"],["class","col-md-3 position-relative",4,"ngFor","ngForOf"],["src","./assets/images/slider-image-1.jpeg","height","300px",1,"w-100"],["src","./assets/images/slider-image-2.jpeg","height","300px",1,"w-100"],["src","./assets/images/slider-image-3.jpeg","height","300px",1,"w-100"],["carouselSlide","",3,"id"],[1,"w-100",2,"height","18.75rem",3,"src","alt"],[1,"h6","text-main"],[1,"col-md-3","position-relative"],["class","fa-regular fa-heart heart",3,"click",4,"ngIf"],["class","fa-solid fa-heart heart",3,"click",4,"ngIf"],[1,"product","p-2"],[1,"cursor-pointer",3,"routerLink"],["alt","item",1,"w-100",3,"src"],[1,"h6"],[1,"d-flex","justify-content-between"],[1,"rating"],[1,"fa-solid","fa-star","rating-color"],[1,"w-100","main-btn",3,"click"],["cartBtn",""],[1,"fa-regular","fa-heart","heart",3,"click"],[1,"fa-solid","fa-heart","heart",3,"click"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"owl-carousel-o",3),e.YNc(4,Z,1,0,"ng-template",4),e.YNc(5,C,1,0,"ng-template",4),e.YNc(6,T,1,0,"ng-template",4),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"img",6)(9,"img",7),e.qZA()()(),e.TgZ(10,"div",8)(11,"h2"),e._uU(12,"Popular Categories"),e.qZA(),e.TgZ(13,"owl-carousel-o",3),e.YNc(14,A,2,1,"ng-container",9),e.qZA()(),e.TgZ(15,"div",0)(16,"input",10),e.NdJ("ngModelChange",function(m){return o.userWord=m}),e.qZA(),e.TgZ(17,"div",11)(18,"h2"),e._uU(19,"Popular Products"),e.qZA(),e.YNc(20,H,24,13,"div",12),e.ALo(21,"search"),e.qZA()()),2&i&&(e.xp6(3),e.Q6J("options",o.mainSliderOptions),e.xp6(10),e.Q6J("options",o.categoriesOptions),e.xp6(1),e.Q6J("ngForOf",o.Categories),e.xp6(2),e.Q6J("ngModel",o.userWord),e.xp6(4),e.Q6J("ngForOf",e.xi3(21,5,o.products,o.userWord)))},dependencies:[l.ez,l.sg,l.O5,c.UX,c.Fj,c.JJ,d.rH,g.r,u.bB,u.Fy,u.Mp,c.u5,c.On,h]})}return s})()}}]);