import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerifyCodeComponent } from './components/verify-code/verify-code.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/services/garuds/auth.guard';

const routes: Routes = [
  {path:'',loadComponent:()=>import('./layauts/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),children:[
    {path:"", redirectTo:"login",pathMatch:"full"},
    {path:'login',loadComponent:()=>import('./components/login/login.component').then((m)=>m.LoginComponent),title:"login"},
    {path:'register',loadComponent:()=>import('./components/register/register.component').then((m)=>m.RegisterComponent),title:"register"},
    {path:'forgetPassword',loadComponent:()=>import('./components/forget-password/forget-password.component').then((m)=>m.ForgetPasswordComponent),title:"forgetPassword"},
    {path:'verifyCode',loadComponent:()=>import('./components/verify-code/verify-code.component').then((m)=>m.VerifyCodeComponent),title:"verifyCode"},
    {path:'resetPassword' , loadComponent:()=>import('./components/reset-password/reset-password.component').then((m)=>m.ResetPasswordComponent),title:"resetPassword"}
  ]},
  {path:'',
  canActivate:[authGuard],loadComponent:()=>import('./layauts/blank-layout/blank-layout.component')
  .then((m)=>m.BlankLayoutComponent),children:[
    {path:'',redirectTo:'home',pathMatch:"full"},
    {path:'home',loadComponent:()=>import('./components/home/home.component').then((m)=>m.HomeComponent),title:"Home"},
    {path:'cart',loadComponent:()=>import('./components/cart/cart.component').then((m)=>m.CartComponent),title:"Cart"},
    {path:'brands',loadComponent:()=>import('./components/brands/brands.component').then((m)=>m.BrandsComponent),title:"Brands"},
    {path:'categories',loadComponent:()=>import('./components/categories/categories.component').then((m)=>m.CategoriesComponent),title:"Categories"},
    {path:'products',loadComponent:()=>import('./components/products/products.component').then((m)=>m.ProductsComponent),title:"Products"},
    {path:'checkout/:id',loadComponent:()=>import('./components/checkout/checkout.component').then((m)=>m.CheckoutComponent),title:"checkout"},
    {path:'details/:id',loadComponent:()=>import('./components/product-details/product-details.component').then((m)=>m.ProductDetailsComponent),title:"ProductDetails"},
    {path:'allorders',loadComponent:()=>import('./components/all-orders/all-orders.component').then((m)=>m.AllOrdersComponent),title:"allOrders"},
    {path:'wishlist',loadComponent:()=>import('./components/wish-list/wish-list.component').then((m)=>m.WishListComponent),title:"wishList"},
    {path:'categoriesDetails/:id',loadComponent:()=>import('./components/categories-details/categories-details.component').then((m)=>m.CategoriesDetailsComponent),title:"CategoriesDetails"},

  ]},
  {path:'**',loadComponent:()=>import('./components/not-found/not-found.component').then((m)=>m.NotFoundComponent)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
