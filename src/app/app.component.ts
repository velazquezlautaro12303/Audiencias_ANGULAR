import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { MainIdService } from './generales/main-service/main-id.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default

})
export class AppComponent implements AfterViewInit{
  title = 'my-app';
  idContainer: string;

  constructor(
    private mainService: MainIdService,
    private cdr: ChangeDetectorRef
  ){
    this.idContainer = this.mainService.getIdDefault();
  }

  ngAfterViewInit(): void {
     this.mainService.cambioDeId.subscribe((id: string) => {
      this.idContainer = id;
      this.cdr.detectChanges();
     });
  }
}
