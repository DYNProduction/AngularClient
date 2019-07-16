import { Component, OnInit } from '@angular/core';
import {EntittyRequest} from '../EntittyRequest';
import {Agent} from '../model/agent';
import {AgentService} from '../service/agent.service';
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
    "#",
    "ФИО",
    "Адрес",
    "Номер телефона"
  ];

  constructor(private agentService: AgentService,
              private  modalService: NgbModal) {
    super(agentService);
  }

  addAgent(){
    const modelRef=this.modalService.open(ModalAgentComponent, { backdrop: "static", centered: true , keyboard:false});

    this.elementRequest(modelRef);
  }

  editAgent(element : Agent){
    const modelRef=this.modalService.open(ModalAgentComponent, { centered: true , keyboard:false});

    modelRef.componentInstance.editAgent = Object.assign({}, element);

    this.elementRequest(modelRef, element);
  }

  delete(element: Agent) {
    super.delete(element,this.modalService);
  }


}
