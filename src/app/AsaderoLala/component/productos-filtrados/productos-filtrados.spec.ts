import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosFiltrados } from './productos-filtrados';

describe('ProductosFiltrados', () => {
  let component: ProductosFiltrados;
  let fixture: ComponentFixture<ProductosFiltrados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosFiltrados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosFiltrados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
