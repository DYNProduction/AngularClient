import { Component, OnInit } from '@angular/core';
import {EntityId} from '../EntityId';
import {EntittyRequest} from '../EntittyRequest';
import {Agent} from './modal-agent/agent';
import {AgentService} from './modal-agent/agent.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalAgentComponent} from './modal-agent/modal-agent.component';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css', '../table.button.css'],
  providers: [AgentService]
})
export class AgentComponent extends EntittyRequest<Agent>{
  columnList : Array<string> =[
    "Идентификатор",
    "ФИО",
    "Адрес",
    "Номер телефона"
  ];

  modelRef: any;

  constructor(private agentService: AgentService,
              private  modalService: NgbModal) {
    super(agentService);
  }

  addUser(){
    const modelRef=this.modalService.open(ModalAgentComponent, { backdrop: "static", centered: true , keyboard:false});

    this.elementRequest(modelRef);
  }

  editUser(element : Agent){
    this.modelRef=this.modalService.open(ModalAgentComponent, { centered: true , keyboard:false});

    this.modelRef.componentInstance.editBranch = element;
  }

  delete(element: Agent) {
    super.delete(element);
  }


}
