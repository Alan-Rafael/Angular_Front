import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguresNotLoginComponent } from './figures-not-login.component';

describe('FiguresNotLoginComponent', () => {
  let component: FiguresNotLoginComponent;
  let fixture: ComponentFixture<FiguresNotLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiguresNotLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiguresNotLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
