import {Component, Input, OnInit} from '@angular/core';
import {Agent} from '../../agent/modal-agent/agent';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Branch} from '../branch';

@Component({
  selector: 'app-modal-branch',
  templateUrl: './modal-branch.component.html',
  styleUrls: ['./modal-branch.component.css']
})
export class ModalBranchComponent {

  @Input()
  editBranch: Branch= new Branch();

  constructor(private modalService: NgbModal,
              private modal: NgbActiveModal) {
  }

  close (){
    this.modal.close(this.editBranch);
  }

}
