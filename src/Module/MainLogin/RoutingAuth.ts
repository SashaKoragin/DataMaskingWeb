import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from 'src/app/Security/Ts/Security';




const authRoutes: Routes = [

    {
        path: 'Login',
        component: Login
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(authRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }
