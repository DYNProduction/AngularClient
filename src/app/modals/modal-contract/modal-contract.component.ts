import {Component, Input, OnInit} from '@angular/core';
import {Agent} from '../../model/agent';
import {NgbActiveModal, NgbDateAdapter, NgbDateNativeAdapter, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Branch} from '../../model/branch';
import {Tariff} from '../../model/tariff';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-modal-contract',
  templateUrl: './modal-contract.component.html',
  styleUrls: ['./modal-contract.component.css'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}, Contract]
})
export class ModalContractComponent implements OnInit {

  @Input()
  editContract: Contract;


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
              private modal: NgbActiveModal,
              ) {
  }

  close() {
    this.modal.close(this.editContract);
  }

  ngOnInit(): void {
    this.editContract.insuranceDate = new Date(this.editContract.insuranceDate);
  }

}
