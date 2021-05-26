import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OralsurgeryComponent } from './oralsurgery.component';

describe('OralsurgeryComponent', () => {
  let component: OralsurgeryComponent;
  let fixture: ComponentFixture<OralsurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OralsurgeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OralsurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
