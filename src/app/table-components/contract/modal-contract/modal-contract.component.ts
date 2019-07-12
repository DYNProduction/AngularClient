import {Component, Input, OnInit} from '@angular/core';
import {Agent} from '../../agent/modal-agent/agent';
import {NgbActiveModal, NgbDateAdapter, NgbDateNativeAdapter, NgbDateStruct, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Contract} from '../contract';
import {Branch} from '../../branch/branch';
import {Tariff} from '../../tariff/tariff';

@Component({
  selector: 'app-modal-contract',
  templateUrl: './modal-contract.component.html',
  styleUrls: ['./modal-contract.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class ModalContractComponent {
  @Input()
  editContract: Contract = new Contract();

  @Input()
  listBranch: Branch[] = [];

  @Input()
  listAgent: Agent[] = [];

  @Input()
  listTariff: Tariff[] = [];

  get today() {
    return new Date();
  }
  constructor(private modalService: NgbModal,
              private modal: NgbActiveModal) {
  }

  close() {
    this.modal.close(this.editContract);
  }

}
