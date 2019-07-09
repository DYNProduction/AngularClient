import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';

import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalUserComponent} from './modal-user/modal-user.component';
import {EntityId} from '../EntityId';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-user-database',
  templateUrl: './user-database.component.html',
  styleUrls: ['./user-database.component.css'],
  providers: [UserService]
})

export class UserDatabaseComponent implements OnInit  {
  columnList : Array<string> =[
    "Идентификатор",
    "Логин",
    "Пароль"
  ];

  modelRef: any;

  users: User[] = [];

  constructor(private userService : UserService,
              private modalService: NgbModal) {
  }

  addUser(){
    const modelRef=this.modalService.open(ModalUserComponent, { backdrop: "static", centered: true , keyboard:false});

    modelRef.result.then(result=>{
      if (result instanceof User){
        this.submit(result);
      }
      else {
        console.log(result.toString());
      }
    });
  }

  editUser(user : User){
    this.modelRef=this.modalService.open(ModalUserComponent, { centered: true , keyboard:false});

    this.modelRef.componentInstance.editUser = user;
  }

  ngOnInit() {
    this.userService.getData().subscribe(data => this.users = <User[]> data,
      error => console.log(error));
  }

  submit(user: User) {
    this.userService.postData(user)
      .subscribe(
        (data: User) => {
          this.users.push(data);
        },
        error => console.log(error)
      );
  }

  delete(user: User) {
    if (confirm("Удалить элемент с id: "+user.id)) {
      this.userService.deleteData(user)
        .subscribe(
          (data: any) => {
            this.deleteById(user);
          }
        );
    }
  }

  index:number;
  newArray:User[]=[];

  deleteById(user:User){
    this.index=0;

    while(this.index<this.users.length) {
      if (user.id!=this.users[this.index].id)this.newArray.push(this.users[this.index]);
      this.index++;
    }

    this.users=this.newArray;

  }
}


