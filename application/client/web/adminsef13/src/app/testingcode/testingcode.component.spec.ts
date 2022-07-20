import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingcodeComponent } from './testingcode.component';

describe('TestingcodeComponent', () => {
  let component: TestingcodeComponent;
  let fixture: ComponentFixture<TestingcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});