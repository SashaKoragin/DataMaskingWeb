import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Identification } from './ModelAutoIdentification';
import { NgxPermissionsService } from 'ngx-permissions';
import { NavigationExtras, Router } from '@angular/router';
import { AdressService } from '../ApiService/ApiService';
const url: AdressService = new AdressService();
const httpOptionsJson = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthIdentification {

  constructor(private http: HttpClient, public router: Router, public permissionsService: NgxPermissionsService) { }

  public user: Identification = new Identification();

  public IsVisibleButton: boolean = false
  isLoggedIn = false;
  redirectUrl: string | undefined;
  ///Подключение по средствлом запроса
  login() {
    return this.http.post(url.identificationUser, this.user, httpOptionsJson);
  }

  ///Добавление ролей с сервера
  addRule() {
    try {
      console.log('Подключились к серверу!');
      this.permissionsService.addPermission(this.user.groupRuleServerField);
      console.log(this.user.groupRuleServerField);
      console.log('Подключили роли!');
    } catch (e: any) {
      alert(e.toString());
    }
  }

  ///Выход из авторизации
  logout(): void {
    this.isLoggedIn = false;
    this.user = new Identification();
    this.IsVisibleButton = false;
    this.permissionsService.flushPermissions()
  }

  ///Потеря контекста с сайтом
  logoutDisconnect(): void {
    this.isLoggedIn = false;
    this.IsVisibleButton = false;
    this.user = new Identification();
    let redirect = '/Login';
    console.log("Перенаправили на страницу: " + redirect)
    let navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };
    this.router.navigate([redirect], navigationExtras);
  }
}
