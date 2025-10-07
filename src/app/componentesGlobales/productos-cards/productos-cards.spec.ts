import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCards } from './productos-cards';

describe('ProductosCards', () => {
  let component: ProductosCards;
  let fixture: ComponentFixture<ProductosCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
