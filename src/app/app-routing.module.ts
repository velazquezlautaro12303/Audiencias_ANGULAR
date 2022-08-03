import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'acerca-de', component:AcercaDeComponent},
  {path: 'audiencias', loadChildren: () => import('./audiencias/audiencias.module').then(m => m.AudienciasModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
