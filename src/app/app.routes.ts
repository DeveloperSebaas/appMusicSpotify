import { RouterModule, Routes } from "@angular/router";
import { ArtistaComponent } from "./componentes/artista/artista.component";
import { BusquedaComponent } from "./componentes/busqueda/busqueda.component";
import { InicioComponent } from "./componentes/inicio/inicio.component";


export const ROUTES: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'buscar', component: BusquedaComponent},
    {path: 'artista/:id', component: ArtistaComponent},
    {path: '', pathMatch: 'full',redirectTo: 'inicio'},
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
]

export const APP_ROUTING = RouterModule.forRoot(ROUTES, {useHash:true});
