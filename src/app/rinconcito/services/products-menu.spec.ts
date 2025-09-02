import { TestBed } from '@angular/core/testing';

import { ProductsMenu } from './products-menu';

describe('ProductsMenu', () => {
  let service: ProductsMenu;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsMenu);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
