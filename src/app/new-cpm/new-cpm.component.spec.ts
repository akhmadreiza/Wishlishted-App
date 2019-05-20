import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCpmComponent } from './new-cpm.component';

describe('NewCpmComponent', () => {
  let component: NewCpmComponent;
  let fixture: ComponentFixture<NewCpmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCpmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
