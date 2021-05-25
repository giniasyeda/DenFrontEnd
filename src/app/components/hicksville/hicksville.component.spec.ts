import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HicksvilleComponent } from './hicksville.component';

describe('HicksvilleComponent', () => {
  let component: HicksvilleComponent;
  let fixture: ComponentFixture<HicksvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HicksvilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HicksvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
