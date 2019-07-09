import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../user';

@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrls: ['./modal-user.component.css']
})

export class ModalUserComponent {

  @Input()
  editUser: User = new User();

  constructor(private modalService: NgbModal,
              private modal: NgbActiveModal) {
  }

  close (){
    this.modal.close(this.editUser);
    console.log(this.editUser.login);
    console.log(this.editUser.password);
  }

}
