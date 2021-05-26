import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneraldentistyComponent } from './generaldentisty.component';

describe('GeneraldentistyComponent', () => {
  let component: GeneraldentistyComponent;
  let fixture: ComponentFixture<GeneraldentistyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneraldentistyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneraldentistyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
