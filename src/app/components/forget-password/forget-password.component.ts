import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private _AuthService:AuthService , private FormBuilder:FormBuilder,private _Router:Router){}
  ngOnInit(): void {
    localStorage.setItem('current','/forgetPassword')
  }
  isLoading:boolean=false;
  forgetForm:FormGroup=this.FormBuilder.group({
    email:[null , [Validators.required, Validators.email] ]
  })
  errMsg:string='';
  forgrtPasswordMethod(){
    this.isLoading=true;
    this._AuthService.forgetPassApi(this.forgetForm.value).subscribe({
      next:(res)=>{this.isLoading=false;
        this._Router.navigate(['/verifyCode'])
      },
      error:(err)=>{
        this.errMsg=err.error.message
      }
    })
  }
}
