import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
constructor(private _AuthService:AuthService,private _FormBuilder:FormBuilder , private _Router:Router){}
ngOnInit(): void {
  localStorage.setItem('current','/register')
}
registerForm:FormGroup=this._FormBuilder.group({
  name:[null , [Validators.required, Validators.minLength(3),Validators.maxLength(20)]],
  email:[null , [Validators.required, Validators.email] ],
  password:[null , [Validators.required, Validators.pattern(/^\w{6,}/)] ],
  rePassword:[null , [Validators.required, Validators.pattern(/^\w{6,}/)] ],
  phone:[null , [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)] ]
})
isLoading:boolean=false;
errMsg:string='';
registerMethod(){
  if(this.registerForm.valid){
    this.isLoading=true;
    this._AuthService.registerMethodApi(this.registerForm.value).subscribe({
      next:(res)=>{
        this.isLoading=false;
        this._Router.navigate(['/login'])
      },
      error:(err)=>{
        this.isLoading=true;
        this.errMsg=err.error.message;
      }
    })
  }
}
}
