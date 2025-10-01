import { TestBed } from '@angular/core/testing';

import { AnimacionesGlobales } from './animaciones-globales';

describe('AnimacionesGlobales', () => {
  let service: AnimacionesGlobales;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimacionesGlobales);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
