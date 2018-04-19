import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  id_username : string ="";
  id_password : string = "";
  loginValue : boolean = false; 
  constructor( private _sharedService: SharedService,private _router: Router ) { }

  ngOnInit() {
  }

  callLoginCheck( username, password ){
    this.loginValue = this._sharedService.loginCheck( this.id_username, this.id_password );
    this.loginValue && this._router.navigate(['/weather']);
    //return this.loginValue;
  }

}
