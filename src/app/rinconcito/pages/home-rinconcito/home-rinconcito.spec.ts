import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRinconcito } from './home-rinconcito';

describe('HomeRinconcito', () => {
  let component: HomeRinconcito;
  let fixture: ComponentFixture<HomeRinconcito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeRinconcito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeRinconcito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
