import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinforkComponent } from './joinfork.component';

describe('JoinforkComponent', () => {
  let component: JoinforkComponent;
  let fixture: ComponentFixture<JoinforkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinforkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinforkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
