import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";

const app_routes:Routes=[
    { path:'home', component:HomeComponent},
    { path:'**', pathMatch:'full', redirectTo:''}
]

export const AppRouting=RouterModule.forRoot(app_routes);