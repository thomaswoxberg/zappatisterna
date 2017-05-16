import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendingInputComponent } from './lending-input.component';

describe('LendingInputComponent', () => {
  let component: LendingInputComponent;
  let fixture: ComponentFixture<LendingInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendingInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
