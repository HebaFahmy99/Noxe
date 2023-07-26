import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; 
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup = new FormGroup({ 
    'email': new FormControl(null,[Validators.required,Validators.email]), 
    "password":new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9]{5,10}$/)])
  })  
  constructor(private _AuthService:AuthService,private _Router:Router,private toastr: ToastrService) { }
  
  submitLoginForm(){  
    if(this.loginForm.invalid){return;} 

    this._AuthService.Login(this.loginForm.value).subscribe((data)=>{ 
      if(data.message == 'success') 
      {   
        localStorage.setItem('userToken', data.token); 
        this._AuthService.saveUserData();
        this.toastr.success("Successful login","success");
       this._Router.navigateByUrl("/home")
      } 
      else{ 
        this.toastr.error(data.message,"error msg");
      } 
      
    })
  }
  ngOnInit(): void {
  }

}
