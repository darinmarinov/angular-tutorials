/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngDrComponent } from './ang-dr.component';

describe('AngDrComponent', () => {
  let component: AngDrComponent;
  let fixture: ComponentFixture<AngDrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngDrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngDrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
