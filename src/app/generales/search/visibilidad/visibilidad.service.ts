import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadService {
  private busquedaEstaVisible: boolean;
  @Output() cambioDeVisibilidad: EventEmitter<boolean>;

  constructor() {
    this.busquedaEstaVisible = true;
    this.cambioDeVisibilidad = new EventEmitter();
  }

  public hacerVisibleBarraDeBusqueda(){
    this.busquedaEstaVisible = true;
    this.notificarCambio();
  }

  public ocultarBarraDeBusqueda(){
    this.busquedaEstaVisible = false;
    this.notificarCambio();
  }

  private notificarCambio(){
    this.cambioDeVisibilidad.emit(this.busquedaEstaVisible);
  }
}
