import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticdentistyComponent } from './cosmeticdentisty.component';

describe('CosmeticdentistyComponent', () => {
  let component: CosmeticdentistyComponent;
  let fixture: ComponentFixture<CosmeticdentistyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosmeticdentistyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmeticdentistyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
