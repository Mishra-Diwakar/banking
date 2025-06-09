import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletloadComponent } from './walletload.component';

describe('WalletloadComponent', () => {
  let component: WalletloadComponent;
  let fixture: ComponentFixture<WalletloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WalletloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
