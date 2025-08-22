import { TestBed } from '@angular/core/testing';

import { DeteccionUrl } from './deteccion-url';

describe('DeteccionUrl', () => {
  let service: DeteccionUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeteccionUrl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
