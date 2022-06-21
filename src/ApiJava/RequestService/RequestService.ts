import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDtoLoginAndPassword } from './ModelAutoIdentification';
import { NgxPermissionsService } from 'ngx-permissions';
import { NavigationExtras, Router } from '@angular/router';
import { AdressService, ServerHost } from '../ApiService/ApiService';
import { Observable } from 'rxjs';
import { ConnectionStatus, IConnectionOptions, ISignalRConnection, SignalR } from 'ng2-signalr';
const url: AdressService = new AdressService();
const httpOptionsJson = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable({
  providedIn: 'root'
})

export class AuthIdentificationSignalR {

  constructor(public signalR: SignalR) { }

  public iduser: string | undefined;
  public conect!: ISignalRConnection;
  public status!: ConnectionStatus;
  public autorization!: AuthIdentification;

  createconection(autorizationUsers: AuthIdentification) {
      try {
          this.autorization = autorizationUsers;
          var options: IConnectionOptions =
          {
              hubName: 'SignalRinventory',
              qs: { iduser: autorizationUsers.user.idUser, user: autorizationUsers.user.nameUser, tabelnumbers: autorizationUsers.user.personnelNumber },
              url: `http://${ServerHost}:8059/signalr`,
              executeErrorsInZone: true,
              executeEventsInZone: true,
              executeStatusChangeInZone: true
              //Можно задать ping интервал
          }
          this.conect = this.signalR.createConnection(options);
          this.statusSubscriSignalR()
      } catch (e) {
          alert(e.toString());
      }
  }


  //Запуск подписи на событие
  async startserverSignalR() {
      if (this.status === null) {
          await this.conect.start();
          this.iduser = this.conect.id
          console.log('Запустили сервер!');
          console.log('Подписались на статус соединения!');
      }
  }

  stopserverSignalR() {

      console.log('Отключили роли!');
      if (new Array('connected', 'disconnected').some(x => x === this.status.name)) {
          console.log('Остановили сервер!');
          console.log('Отписались от статуса соединения!');
          this.conect.stop();
          this.iduser = undefined;
          this.status;
      }
  }

  private statusSubscriSignalR() {
      this.conect.status.subscribe((state: ConnectionStatus) => {
          this.status = state;
          console.log(state.name);
          if (state.name === "disconnected") {
              console.log(this.conect.errors);
              this.stopserverSignalR();
              this.autorization.logoutDisconnect();
              alert("Потеря соединения с сайтом Обновите страницу!!!");
          }
      });
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthIdentification {

  constructor(private http: HttpClient, public router: Router, public permissionsService: NgxPermissionsService) { }

  public user: UserDtoLoginAndPassword = new UserDtoLoginAndPassword();

  public IsVisibleButton: boolean = false
  isLoggedIn = false;
  redirectUrl: string | undefined;
  ///Подключение по средствлом запроса
  login(): Observable<UserDtoLoginAndPassword> {
    return this.http.post<UserDtoLoginAndPassword>(url.identificationUser, this.user, httpOptionsJson);
  }

  ///Добавление ролей с сервера
  addRule() {
    try {
      console.log('Подключились к серверу!');
      this.permissionsService.addPermission(this.user.groupRuleServer);
      console.log(this.user.groupRuleServer);
      console.log('Подключили роли!');
    } catch (e) {
      alert(e.toString());
      
    }
  }

  ///Выход из авторизации
  logout(): void {
    this.isLoggedIn = false;
    this.user = new UserDtoLoginAndPassword();
    this.IsVisibleButton = false;
    this.permissionsService.flushPermissions()
  }

  ///Потеря контекста с сайтом
  logoutDisconnect(): void {
    this.isLoggedIn = false;
    this.IsVisibleButton = false;
    this.user = new UserDtoLoginAndPassword();
    let redirect = '/Login';
    console.log("Перенаправили на страницу: " + redirect)
    let navigationExtras: NavigationExtras = {
      queryParamsHandling: 'preserve',
      preserveFragment: true
    };
    this.router.navigate([redirect], navigationExtras);
  }
}
