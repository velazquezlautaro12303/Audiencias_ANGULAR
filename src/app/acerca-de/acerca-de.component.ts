import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MainIdService } from '../generales/main-service/main-id.service';
import { VisibilidadService } from '../generales/search/visibilidad/visibilidad.service';

@Component({
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor(
    private visibilidadBarraDeBusquedaService: VisibilidadService,
    private mainIdService: MainIdService
  ) { }

  ngOnInit(): void {
    this.visibilidadBarraDeBusquedaService.ocultarBarraDeBusqueda();
    this.mainIdService.setearIdAbout();
  }

}
