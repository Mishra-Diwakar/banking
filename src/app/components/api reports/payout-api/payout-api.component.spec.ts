import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutApiComponent } from './payout-api.component';

describe('PayoutApiComponent', () => {
  let component: PayoutApiComponent;
  let fixture: ComponentFixture<PayoutApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayoutApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayoutApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
