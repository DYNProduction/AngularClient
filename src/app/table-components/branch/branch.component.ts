import {Component} from '@angular/core';
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
    this.elements.push(new Branch(131234, 'Восточный', '152062, г. Верх-Усугли, ул. Новомихалковский 3-й проезд, дом 51, квартира 485', '+7 (970) 165-78-30'));
    this.elements.push(new Branch(234562, 'Северный', '603096, г. Тольятти, ул. Автозаводский 3-й проезд, дом 39, квартира 313', '+7 (927) 899-26-79'));
    this.elements.push(new Branch(432652, 'Восточный', '442571, г. Ключи, ул. Стахановская, дом 80, квартира 328', '+7 (990) 473-46-59'));
    this.agentService.elements = this.elements;
  }

  addBranch() {
    const modelRef = this.modalService.open(ModalBranchComponent, {
      backdrop: 'static',
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
