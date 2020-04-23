import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Branch} from '../../model/branch';

@Component({
  selector: 'app-modal-branch',
  templateUrl: './modal-branch.component.html',
  styleUrls: ['./modal-branch.component.css']
})
export class ModalBranchComponent {

  @Input()
  editBranch: Branch = new Branch(131234, 'Восточный', '152062, г. Верх-Усугли, ул. Новомихалковский 3-й проезд, дом 51, квартира 485', '+7 (970) 165-78-30');

  constructor(private modalService: NgbModal,
              private modal: NgbActiveModal) {
  }

  close() {
    this.modal.close(this.editBranch);
  }

}
