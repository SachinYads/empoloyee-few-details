import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpoloyeeItemComponent } from './empoloyee-item.component';

describe('EmpoloyeeItemComponent', () => {
  let component: EmpoloyeeItemComponent;
  let fixture: ComponentFixture<EmpoloyeeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpoloyeeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpoloyeeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
