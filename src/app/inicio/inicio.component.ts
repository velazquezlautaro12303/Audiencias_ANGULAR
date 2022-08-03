import { Component, OnInit } from '@angular/core';
import { MainIdService } from '../generales/main-service/main-id.service';

@Component({
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private mainIdService: MainIdService) { }

  ngOnInit(): void {
    this.mainIdService.setearIdSearcher();
  }

}
