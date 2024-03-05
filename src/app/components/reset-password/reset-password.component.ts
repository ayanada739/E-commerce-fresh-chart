import { Component, OnInit, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
constructor(private _AuthService:AuthService, private _FormBuilder:FormBuilder ,private _Router:Router){}
ngOnInit(): void {
  localStorage.setItem('current','/resetPassword')
}
isLoading:boolean=false;
errMsg:string='';
resetPassForm:FormGroup=this._FormBuilder.group({
  email:[null,[Validators.required, Validators.email]],
  newPassword:[null , [Validators.required, Validators.pattern(/^\w{6,}/)] ]
})
resetPasswordMethod():void{
  this.isLoading=true;
  this._AuthService.resetPassApi(this.resetPassForm.value).subscribe({
    next:(res)=>{
      this.isLoading=false;
      if(res.token!=null){
      localStorage.setItem('etoken',res.token);
      this._Router.navigate(['/home'])
      }

    },
    error:(err)=>{
      this.isLoading=true;
      this.errMsg=err.error.message}
  })
}
}
