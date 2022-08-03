import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisibilidadService } from './visibilidad/visibilidad.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SearchComponent implements OnInit {
  estaVisible: boolean;
  busqueda : string | null;

  constructor(
    private visibilidadService: VisibilidadService,
    private router: Router
  ) {
    this.estaVisible = true;
    this.busqueda = null;
  }

  ngOnInit(): void {
    this.visibilidadService.cambioDeVisibilidad.subscribe((estaVisible:boolean) => {
      this.estaVisible = estaVisible;
    });
  }

  public buscar(){
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['/audiencias'],{queryParams: {busqueda: this.busqueda}});
  }

}
