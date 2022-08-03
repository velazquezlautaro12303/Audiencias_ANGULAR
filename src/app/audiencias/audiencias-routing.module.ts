import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoAudienciasComponent } from './listado-audiencias/listado-audiencias.component';

const routes: Routes = [
  {path: '', component: ListadoAudienciasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudienciasRoutingModule { }
