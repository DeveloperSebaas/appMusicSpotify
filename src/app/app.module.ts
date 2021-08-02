import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { CargandoComponent } from './componentes/cargando/cargando.component';
import { TarjetasComponent } from './componentes/tarjetas/tarjetas.component';
import { APP_ROUTING } from './app.routes';
import { DomseguroPipe } from './componentes/pipe/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    InicioComponent,
    BusquedaComponent,
    CabeceraComponent,
    CargandoComponent,
    TarjetasComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
