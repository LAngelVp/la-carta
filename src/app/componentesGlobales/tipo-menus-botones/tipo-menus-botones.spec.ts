import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoMenusBotones } from './tipo-menus-botones';

describe('TipoMenusBotones', () => {
  let component: TipoMenusBotones;
  let fixture: ComponentFixture<TipoMenusBotones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TipoMenusBotones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoMenusBotones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
