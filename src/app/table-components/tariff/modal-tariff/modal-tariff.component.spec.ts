import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTariffComponent } from './modal-tariff.component';

describe('ModalTariffComponent', () => {
  let component: ModalTariffComponent;
  let fixture: ComponentFixture<ModalTariffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTariffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTariffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
