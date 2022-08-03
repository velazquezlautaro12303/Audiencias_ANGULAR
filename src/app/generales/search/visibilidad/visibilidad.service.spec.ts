import { TestBed } from '@angular/core/testing';

import { VisibilidadService } from './visibilidad.service';

describe('VisibilidadService', () => {
  let service: VisibilidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
