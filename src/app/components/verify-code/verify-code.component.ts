import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})
export class VerifyCodeComponent implements OnInit {
  constructor(private _AuthService:AuthService , private FormBuilder:FormBuilder,private _Router:Router){}
  ngOnInit(): void {
    localStorage.setItem('current','/verifyCode')
  }
  isLoading:boolean=false;
  verfiyForm:FormGroup=this.FormBuilder.group({
    resetCode:[null , [Validators.required] ]
  })
  errMsg:string='';
  verifyCodeMethod(){
    this.isLoading=true;
    this._AuthService.verifyCodeApi(this.verfiyForm.value).subscribe({
      next:(res)=>{
        this._Router.navigate(['/resetPassword'])
      },
      error:(err)=>{
        this.errMsg=err.error.message
      }
    })
  }
}
