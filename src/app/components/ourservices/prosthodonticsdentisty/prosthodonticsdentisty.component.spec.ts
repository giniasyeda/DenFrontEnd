import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsthodonticsdentistyComponent } from './prosthodonticsdentisty.component';

describe('ProsthodonticsdentistyComponent', () => {
  let component: ProsthodonticsdentistyComponent;
  let fixture: ComponentFixture<ProsthodonticsdentistyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProsthodonticsdentistyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsthodonticsdentistyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
