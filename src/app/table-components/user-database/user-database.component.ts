import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {HttpService} from '../http.service';
import {UserService} from './user.service';

@Component({
  selector: 'app-user-database',
  templateUrl: './user-database.component.html',
  styleUrls: ['./user-database.component.css'],
  providers: [UserService]
})

export class UserDatabaseComponent implements OnInit {
  columnList : string[] =[
    "Идентификатор",
    "Логин",
    "Пароль"
  ];


  users: User[] = [];

  constructor(private userService : UserService) {
  }


  newUser: User = new User();

  receivedUser: User; // полученный пользователь
  done: boolean = false;

  ngOnInit() {
    this.userService.getData().subscribe(data => this.users = <User[]> data,
      error => console.log(error));
  }

  submit(user: User) {
    this.userService.postData(user)
      .subscribe(
        (data: User) => {
          this.receivedUser = data;
          this.done = true;
        },
        error => console.log(error)
      );
  }

  delete(user: User) {
    this.userService.deleteData(this.users[2]).subscribe();
  }
}


