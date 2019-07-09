import {EntityId} from './EntityId';
import {User} from './user-database/user';
import {OnInit} from '@angular/core';
import {UserService} from './user-database/user.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ModalUserComponent} from './user-database/modal-user/modal-user.component';
import {HttpService} from './http.service';


export class EntittyRequest<T extends EntityId> implements OnInit{

  elements: T[] = [];

  constructor(private httpService: HttpService<T>) {
  }

  userRequest(modelRef:NgbModalRef){
    modelRef.result.then(result=>{
      if (result instanceof Object){
        this.submit(result);
      }
      else {
        console.log(result.toString());
      }
    });
  }

  ngOnInit() {
    this.httpService.getData().subscribe(data => this.elements = <T[]> data,
      error => console.log(error));
  }

  submit(element: T) {
    this.httpService.postData(element)
      .subscribe(
        (data: T) => {
          this.elements.push(data);
        },
        error => console.log(error)
      );
  }

  delete(element: T) {
    if (confirm("Удалить элемент с id: "+element.id)) {
      this.httpService.deleteData(element)
        .subscribe(
          (data: any) => {
            this.deleteById(element);
          }
        );
    }
  }

  index:number;
  newArray:T[]=[];

  deleteById(element:T){
    this.index=0;

    while(this.index<this.elements.length) {
      if (element.id!=this.elements[this.index].id)this.newArray.push(this.elements[this.index]);
      this.index++;
    }

    this.elements=this.newArray;

  }
}
