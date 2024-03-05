import { UserData } from './core/interfaces/user-data';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NgxAwesomePopupModule,
  DialogConfigModule,
  ConfirmBoxConfigModule,
  ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';
import {NgxPaginationModule} from 'ngx-pagination';
import { MyhttpInterceptor } from './core/interseptores/myhttp.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './core/interseptores/loading.interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxAwesomePopupModule.forRoot(),
    DialogConfigModule.forRoot(),
    ConfirmBoxConfigModule.forRoot(),
    ToastNotificationConfigModule.forRoot(),
    NgxPaginationModule,
    NgxSpinnerModule
  ],
  providers: [
    {
    provide:HTTP_INTERCEPTORS, useClass:MyhttpInterceptor, multi:true
  },{
    provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
