import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AudienciasRoutingModule } from './audiencias-routing.module';
import { ListadoAudienciasComponent } from './listado-audiencias/listado-audiencias.component';


@NgModule({
  declarations: [
    ListadoAudienciasComponent
  ],
  imports: [
    CommonModule,
    AudienciasRoutingModule
  ]
})
export class AudienciasModule { }
