import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargebackReportComponent } from './chargeback-report.component';

describe('ChargebackReportComponent', () => {
  let component: ChargebackReportComponent;
  let fixture: ComponentFixture<ChargebackReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargebackReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargebackReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
