import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
constructor(private _FormBuilder:FormBuilder , private _AuthService:AuthService, private _Router:Router){}
ngOnInit(): void {
  localStorage.setItem('current','/login')
}
loginForm:FormGroup=this._FormBuilder.group({
  email:[null , [Validators.required, Validators.email] ],
  password:[null , [Validators.required, Validators.pattern(/^\w{6,}/)] ]
})
isLoading:boolean=false;
errMsg:string='';
loginMethod(){
  this.isLoading=true;
  this._AuthService.loginMethodApi(this.loginForm.value).subscribe({
    next:(res)=>{
        this.isLoading=false;
        localStorage.setItem('etoken',res.token);
        this._AuthService.decodeUserData();
        this._Router.navigate(['/home'])
    },
    error:(err)=>{
      this.errMsg=err.error.message;
    }
  })
}
}
