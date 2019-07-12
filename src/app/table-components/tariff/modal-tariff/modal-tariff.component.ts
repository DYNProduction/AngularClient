import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Tariff} from '../tariff';

@Component({
  selector: 'app-modal-tariff',
  templateUrl: './modal-tariff.component.html',
  styleUrls: ['./modal-tariff.component.css']
})
export class ModalTariffComponent  {

  @Input()
  editTariff: Tariff = new Tariff();

  constructor(private modalService: NgbModal,
              private modal: NgbActiveModal) {
  }

  close (){
    this.modal.close(this.editTariff);
  }
}
