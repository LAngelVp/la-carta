import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAsaderoLala } from './menu-asadero-lala';

describe('MenuAsaderoLala', () => {
  let component: MenuAsaderoLala;
  let fixture: ComponentFixture<MenuAsaderoLala>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuAsaderoLala]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAsaderoLala);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
