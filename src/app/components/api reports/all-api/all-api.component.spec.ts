import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllApiComponent } from './all-api.component';

describe('AllApiComponent', () => {
  let component: AllApiComponent;
  let fixture: ComponentFixture<AllApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
