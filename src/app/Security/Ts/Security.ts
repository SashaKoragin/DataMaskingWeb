import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { UserDtoLoginAndPassword } from 'src/ApiJava/RequestService/ModelAutoIdentification';
import { AuthIdentification} from 'src/ApiJava/RequestService/RequestService';


@Component({
  selector: 'Identification',
  templateUrl: '../Html/Security.html',
  styleUrls: ['../Css/Security.css'],
})

export class Login{

  constructor(public authService: AuthIdentification, public router: Router, 
    //private signalR: AuthIdentificationSignalR
    ){}


  public IsVisibleButton:boolean = false
  login(){
    try{
      this.authService.user.errorMessage = undefined;
      this.authService.user.isError = false;
        if((this.authService.user.loginUser) && (this.authService.user.passwordsUser)){
           console.log(this.authService.user);
          this.authService.login().subscribe((model:UserDtoLoginAndPassword): void => {
              this.authService.user = model;
                if(!model.isError){
               //  this.signalR.createconection(this.authService);
                  this.authService.addRule();
               //   this.signalR.startserverSignalR();
                  let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/App';
                  this.authService.isLoggedIn = true;
                  let navigationExtras: NavigationExtras = {
                    queryParamsHandling: 'preserve',
                    preserveFragment: true
                  };
                  this.authService.IsVisibleButton = true;
                  this.router.navigate([redirect], navigationExtras);
                  return;
                }
           });
        } else {
          this.authService.user.errorMessage = 'Не введен Логин/Пароль';
          this.authService.user.isError = true;
          return;
        }
    }catch (e) {
      alert(e);
    };
  }
  logout() {
    this.authService.logout();
 //   this.signalR.stopserverSignalR();
  }

}
