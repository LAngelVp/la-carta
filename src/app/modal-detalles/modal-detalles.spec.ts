import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalles } from './modal-detalles';

describe('ModalDetalles', () => {
  let component: ModalDetalles;
  let fixture: ComponentFixture<ModalDetalles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalDetalles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDetalles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
