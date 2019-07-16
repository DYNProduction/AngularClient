import {Component, OnInit} from '@angular/core';
import {BranchService} from '../../service/branch.service';
import {EntittyRequest} from '../../model/EntittyRequest';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalBranchComponent} from '../../modals/modal-branch/modal-branch.component';
import {Branch} from '../../model/branch';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css', '../table.button.css'],
  providers: [BranchService]
})
export class BranchComponent extends EntittyRequest<Branch> {
  columnList: Array<string> = [
    "#",
    "Код филиала",
    "Название филиала",
    "Адрес",
    "Номер телефона"
  ];

  constructor(private agentService: BranchService,
              private  modalService: NgbModal) {
    super(agentService);
  }

  addBranch() {
    const modelRef = this.modalService.open(ModalBranchComponent, {
      backdrop: "static",
      centered: true,
      keyboard: false
    });

    this.elementRequest(modelRef);
  }

  editBranch(element: Branch) {
    const modelRef = this.modalService.open(ModalBranchComponent, {
      backdrop: "static",
      centered: true,
      keyboard: false
    });

    modelRef.componentInstance.editBranch = Object.assign({}, element);

    this.elementRequest(modelRef, element);
  }

  delete(element: Branch) {
    super.delete(element, this.modalService);
  }


}
