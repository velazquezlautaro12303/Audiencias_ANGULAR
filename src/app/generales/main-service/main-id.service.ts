import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainIdService {

  private id: string;
  @Output() cambioDeId: EventEmitter<string>;

  constructor() {
    this.id = "searcher";
    this.cambioDeId = new EventEmitter();
  }

  public getIdDefault(){
    return this.id;
  }

  private notificarCambios(){
    this.cambioDeId.emit(this.id);
  }

  public setearIdSearcher(){
    this.id = "searcher";
    this.notificarCambios();
  }

  public setearIdAbout(){
    this.id = "about";
    this.notificarCambios();
  }
}
