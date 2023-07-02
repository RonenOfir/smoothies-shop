import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralOrderComponent } from './general-order.component';

describe('GeneralOrderComponent', () => {
  let component: GeneralOrderComponent;
  let fixture: ComponentFixture<GeneralOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
