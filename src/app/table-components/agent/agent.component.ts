import {Component} from '@angular/core';
import {EntittyRequest} from '../../model/EntittyRequest';
import {Agent} from '../../model/agent';
import {AgentService} from '../../service/agent.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalAgentComponent} from '../../modals/modal-agent/modal-agent.component';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css', '../table.button.css'],
  providers: [AgentService]
})

export class AgentComponent extends EntittyRequest<Agent> {
  columnList: Array<string> = [
    "#",
    "ФИО",
    "Адрес",
    "Номер телефона"
  ];

  constructor(private agentService: AgentService,
              private  modalService: NgbModal) {
    super(agentService);
    this.elements.push(new Agent('Куликовский Кабутар Святославович', '195248, г. Гатчина, ул. Магистральный 1-й проезд, дом 71, квартира 51', '+7 (962) 479-90-61'));
    this.elements.push(new Agent('Анисимова Кадерли Романовна', '399531, г. Орск, ул. Сиреневая, дом 11, квартира 343', '+7 (957) 334-47-80'));
    this.elements.push(new Agent('Журавель Басман Филиппович', '198217, г. Кольчугино, ул. 1905 года, дом 10, квартира 167', '+7 (950) 681-81-24'));
    this.agentService.elements = this.elements;
  }

  addAgent() {
    const modelRef = this.modalService.open(ModalAgentComponent, {backdrop: 'static', centered: true, keyboard: false});

    modelRef.result.then(result => {
      if (result instanceof Object) {
        this.elements.push(result);
      } else {
        console.log(result.toString());
      }
    });
  }

  editAgent(element: Agent) {
    const modelRef = this.modalService.open(ModalAgentComponent, {centered: true, keyboard: false});

    modelRef.componentInstance.editAgent = Object.assign({}, element);

    this.elementRequest(modelRef, element);
  }

  delete(element: Agent) {
    this.elements = this.elements.filter((el) => el !== element);
    super.delete(element, this.modalService);
  }


}
