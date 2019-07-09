import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdModalOptionsComponent } from './ngbd-modal-options.component';

describe('NgbdModalOptionsComponent', () => {
  let component: NgbdModalOptionsComponent;
  let fixture: ComponentFixture<NgbdModalOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdModalOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdModalOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
