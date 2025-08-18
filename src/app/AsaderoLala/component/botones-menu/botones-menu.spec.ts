import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesMenu } from './botones-menu';

describe('BotonesMenu', () => {
  let component: BotonesMenu;
  let fixture: ComponentFixture<BotonesMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonesMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonesMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
