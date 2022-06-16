import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './RoutingAuth';
import { Login } from 'src/app/Security/Ts/Security';
import { AngularMaterialModule } from '../MaterialModule/matrialModule';


// export function createConfig(): SignalRConfiguration {
//   const c = new SignalRConfiguration();
//   c.logging = true;
//   c.url = `http://${ServerHost}:8059/signalr`;
//   return c;
// }


@NgModule({
  declarations: [
    Login
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    AngularMaterialModule,
    //SignalRModule.forRoot(createConfig),
  ],

})
export class AuthModule { }
