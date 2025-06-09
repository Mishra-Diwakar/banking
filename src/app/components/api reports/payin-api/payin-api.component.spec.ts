import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayinApiComponent } from './payin-api.component';

describe('PayinApiComponent', () => {
  let component: PayinApiComponent;
  let fixture: ComponentFixture<PayinApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayinApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayinApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
