import { Component, OnInit } from '@angular/core';
import {BranchService} from './branch.service';
import {EntittyRequest} from '../EntittyRequest';
import {Branch} from './branch';
import {AgentService} from '../agent/modal-agent/agent.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalAgentComponent} from '../agent/modal-agent/modal-agent.component';
import {Agent} from '../agent/modal-agent/agent';
import {ModalBranchComponent} from './modal-branch/modal-branch.component';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css', '../table.button.css'],
  providers: [BranchService]
})
export class BranchComponent extends EntittyRequest<Branch>{
  columnList : Array<string> =[
    "Идентификатор",
    "Код филиала",
    "Название филиала",
    "Адрес",
    "Номер телефона"
  ];

  modelRef: any;

  constructor(private agentService: BranchService,
              private  modalService: NgbModal) {
    super(agentService);
  }

  addUser(){
    const modelRef=this.modalService.open(ModalBranchComponent, { backdrop: "static", centered: true , keyboard:false});

    this.elementRequest(modelRef);
  }

  editUser(element : Branch){
    const modelRef=this.modalService.open(ModalBranchComponent, {backdrop: "static",  centered: true , keyboard:false});

    modelRef.componentInstance.editBranch = element;

    this.elementRequest(modelRef);
  }

  delete(element: Branch) {
    super.delete(element);
  }


}
