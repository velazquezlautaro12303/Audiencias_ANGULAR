import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAudienciasComponent } from './listado-audiencias.component';

describe('ListadoAudienciasComponent', () => {
  let component: ListadoAudienciasComponent;
  let fixture: ComponentFixture<ListadoAudienciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoAudienciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoAudienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
