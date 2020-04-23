import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Agent} from '../../model/agent';

@Component({
  selector: 'app-modal-agent',
  templateUrl: './modal-agent.component.html',
  styleUrls: ['./modal-agent.component.css']
})
export class ModalAgentComponent {

  @Input()
  editAgent: Agent = new Agent('Куликовский Кабутар Святославович', '195248, г. Гатчина, ул. Магистральный 1-й проезд, дом 71, квартира 51', '+7 (962) 479-90-61');

  constructor(private modalService: NgbModal,
              private modal: NgbActiveModal) {
  }

  close() {
    this.modal.close(this.editAgent);
  }

}
