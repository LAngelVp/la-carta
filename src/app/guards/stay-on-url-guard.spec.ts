import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { stayOnUrlGuard } from './stay-on-url-guard';

describe('stayOnUrlGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => stayOnUrlGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
