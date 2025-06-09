import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunningApiComponent } from './running-api.component';

describe('RunningApiComponent', () => {
  let component: RunningApiComponent;
  let fixture: ComponentFixture<RunningApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunningApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunningApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
