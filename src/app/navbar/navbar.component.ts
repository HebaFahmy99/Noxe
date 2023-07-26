import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  IsLoggedIn:boolean = false;
  constructor(private _AuthService:AuthService) { }

  logout(){ 
    this._AuthService.Logout();
  }
  ngOnInit(): void { 
    this._AuthService.userData.subscribe(()=>{ 
      if(this._AuthService.userData.getValue()){ 
        this.IsLoggedIn = true;
      } 
      else{ 
        this.IsLoggedIn = false;
      }
    })
  }

}
