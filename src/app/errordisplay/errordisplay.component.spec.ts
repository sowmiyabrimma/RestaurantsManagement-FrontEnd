import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrordisplayComponent } from './errordisplay.component';

describe('ErrordisplayComponent', () => {
  let component: ErrordisplayComponent;
  let fixture: ComponentFixture<ErrordisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrordisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrordisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
