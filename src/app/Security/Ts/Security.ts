import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Identification } from 'src/ApiJava/RequestService/ModelAutoIdentification';
import { AuthIdentification } from 'src/ApiJava/RequestService/RequestService';


@Component({
  selector: 'Identification',
  templateUrl: '../Html/Security.html',
  styleUrls: ['../Css/Security.css'],
})

export class Login{

  constructor(public authService: AuthIdentification, public router: Router){}



  public IsVisibleButton:boolean = false
  login(){
    try{
      this.authService.user.errorMessageField;
      this.authService.user.isErrorField = false;
        if((this.authService.user.loginField) && (this.authService.user.passwordField)){
            // this.authService.login().subscribe((model:Identification) => {
            //   this.authService.user = model;
            //     if(!model.isErrorField){
            //    //  this.signalR.createconection(this.authService);
            //       this.authService.addRule();
            //     //  this.signalR.startserverSignalR();
            //       let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/Auto';
            //       this.authService.isLoggedIn = true;
            //       let navigationExtras: NavigationExtras = {
            //         queryParamsHandling: 'preserve',
            //         preserveFragment: true
            //       };
            //       this.authService.IsVisibleButton = true;
            //       this.router.navigate([redirect], navigationExtras);
            //       return;
            //     }
           // });
        } else {
          this.authService.user.errorMessageField = 'Не введен Логин/Пароль';
          this.authService.user.isErrorField = true;
          return;
        }
    }catch (e) {
      alert(e);
    };
  }
}
