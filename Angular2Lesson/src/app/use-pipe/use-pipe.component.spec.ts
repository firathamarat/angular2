/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsePipeComponent } from './use-pipe.component';

describe('UsePipeComponent', () => {
  let component: UsePipeComponent;
  let fixture: ComponentFixture<UsePipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsePipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
