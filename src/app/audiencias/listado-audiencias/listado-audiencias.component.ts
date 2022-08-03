import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './listado-audiencias.component.html',
  styleUrls: ['./listado-audiencias.component.css']
})
export class ListadoAudienciasComponent implements OnInit {

  busqueda: string | null;

  constructor(
    private ruta: ActivatedRoute
    ) {
      this.busqueda = "";
     }

  ngOnInit(): void {
    this.busqueda = this.ruta.snapshot.queryParams != null ? this.ruta.snapshot.queryParamMap.get("busqueda") : "";
    console.log(this.busqueda);
  }

}
