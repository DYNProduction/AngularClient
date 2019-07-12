import { Component} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';

import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalUserComponent} from './modal-user/modal-user.component';
import {EntittyRequest} from '../EntittyRequest';

@Component({
  selector: 'app-user-database',
  templateUrl: './user-database.component.html',
  styleUrls: ['./user-database.component.css', '../table.button.css'],
  providers: [UserService, EntittyRequest]
})

export class UserDatabaseComponent extends EntittyRequest<User>{
  columnList : Array<string> =[
    "Идентификатор",
    "Логин",
    "Пароль"
  ];

  modelRef: any;

  constructor(private userService: UserService,
              private modalService: NgbModal ) {
    super(userService);
  }

  addUser(){
    const modelRef=this.modalService.open(ModalUserComponent, { backdrop: "static", centered: true , keyboard:false});

    this.elementRequest(modelRef);
  }

  editUser(user : User){
    this.modelRef=this.modalService.open(ModalUserComponent, { centered: true , keyboard:false});

    this.modelRef.componentInstance.editTariff = user;
  }

  delete(element: User) {
    super.delete(element);
  }

}


