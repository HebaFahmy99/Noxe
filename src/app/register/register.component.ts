import { Component, OnInit } from '@angular/core'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit { 
  

  registerForm:FormGroup = new FormGroup({ 
    "name": new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]), 
    'email': new FormControl(null,[Validators.required,Validators.email]), 
    "password":new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9]{5,10}$/)]), 
    "rePassword": new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9]{5,10}$/)]), 
    "phone": new FormControl(null,[Validators.required,Validators.pattern(/^(010|011|0123|015)[0-9]{8}$/)])
  }, {validators:this.PasswordsMatch})  ;
   

  PasswordsMatch(registerForm:any){ 
    let passwordControl = registerForm.get('password');
    let rePasswordControl = registerForm.get('rePassword');
    if(passwordControl.value === rePasswordControl.value)
    { 
      return null;
    } 
    else{ 
      rePasswordControl.setErrors({rePasswordMatch:'Password are not matched!'}) 
      return {rePasswordMatch: 'Password are not matched!'}
    }
  } 

  submitRegisterForm(){ 
    if(this.registerForm.invalid){return;}
    this._AuthService.Register(this.registerForm.value).subscribe((data)=>{ 
      if(data.message == 'success'){ 
        this.toastr.success("Successful Registeration","success");
        this._Router.navigateByUrl("/login") 
        // this._Router.navigate(["/login"]); can take parameters lw 3ayz tb3at haga w howa ray7 ll login 
      } 
      else{  
        this.toastr.error(data.message,"error msg");
      }
        
    }) 
  } 


  constructor(private _AuthService:AuthService,private _Router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

}
