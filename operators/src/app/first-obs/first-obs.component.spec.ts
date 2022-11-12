import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstObsComponent } from './first-obs.component';

describe('FirstObsComponent', () => {
  let component: FirstObsComponent;
  let fixture: ComponentFixture<FirstObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstObsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
