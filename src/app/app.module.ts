import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralesModule } from './generales/generales.module';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { AudienciasModule } from './audiencias/audiencias.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralesModule,
    AudienciasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
