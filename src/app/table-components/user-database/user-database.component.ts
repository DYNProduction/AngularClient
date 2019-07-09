import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';

import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalUserComponent} from './modal-user/modal-user.component';
import {EntityId} from '../EntityId';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';
import {EntittyRequest} from '../EntittyRequest';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-user-database',
  templateUrl: './user-database.component.html',
  styleUrls: ['./user-database.component.css'],
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

    this.userRequest(modelRef);
  }

  editUser(user : User){
    this.modelRef=this.modalService.open(ModalUserComponent, { centered: true , keyboard:false});

    this.modelRef.componentInstance.editUser = user;
  }

  delete(element: User) {
    super.delete(element);
  }

}


