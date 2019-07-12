import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../user-database/user';
import {Agent} from './agent';

@Component({
  selector: 'app-modal-agent',
  templateUrl: './modal-agent.component.html',
  styleUrls: ['./modal-agent.component.css']
})
export class ModalAgentComponent  {

  @Input()
  editAgent: Agent = new Agent();

  constructor(private modalService: NgbModal,
              private modal: NgbActiveModal) {
  }

  close (){
    this.modal.close(this.editAgent);
  }

}
