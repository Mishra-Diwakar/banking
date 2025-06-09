import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChnageTpinComponent } from './chnage-tpin.component';

describe('ChnageTpinComponent', () => {
  let component: ChnageTpinComponent;
  let fixture: ComponentFixture<ChnageTpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChnageTpinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChnageTpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
