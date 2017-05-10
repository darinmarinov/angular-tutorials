/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StructuringApplicationWithComponentsComponent } from './structuring-application-with-components.component';

describe('StructuringApplicationWithComponentsComponent', () => {
  let component: StructuringApplicationWithComponentsComponent;
  let fixture: ComponentFixture<StructuringApplicationWithComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructuringApplicationWithComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuringApplicationWithComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
