import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthodonticsdentistyComponent } from './orthodonticsdentisty.component';

describe('OrthodonticsdentistyComponent', () => {
  let component: OrthodonticsdentistyComponent;
  let fixture: ComponentFixture<OrthodonticsdentistyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrthodonticsdentistyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthodonticsdentistyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
