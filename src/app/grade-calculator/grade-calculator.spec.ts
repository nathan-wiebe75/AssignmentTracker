import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCalculator } from './grade-calculator';

describe('GradeCalculator', () => {
  let component: GradeCalculator;
  let fixture: ComponentFixture<GradeCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeCalculator],
    }).compileComponents();

    fixture = TestBed.createComponent(GradeCalculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
