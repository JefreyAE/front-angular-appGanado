//Importar los modulos de router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { LoginComponent } from "./components/login/login.component";
import { MainComponent } from "./components/main/main.component";
import { AnimalComponent } from "./components/animal/animal.component";
import { UserGuardGuard } from "./user-guard.guard";


//Array de rutas

const appRoutes: Routes = [
    {path: "", component: LoginComponent},
    {path: "main/index", component: MainComponent, canActivate: [UserGuardGuard]},
    {path: "animals", component: AnimalComponent},
    {path: '**', component: LoginComponent}
];

//Exportar el modulo del router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);