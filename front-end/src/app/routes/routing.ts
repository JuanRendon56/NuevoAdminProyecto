import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { LoginComponent } from "../components/login/login.component";

const app_routes:Routes=[
    { path:'home', component:HomeComponent},
    { path:'login', component:LoginComponent},
    { path:'**', pathMatch:'full', redirectTo:''}
]

export const AppRouting=RouterModule.forRoot(app_routes);
//Servicio de routing y pathing