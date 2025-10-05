import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEspecialidades } from './lista-especialidades';

describe('ListaEspecialidades', () => {
  let component: ListaEspecialidades;
  let fixture: ComponentFixture<ListaEspecialidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEspecialidades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEspecialidades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
