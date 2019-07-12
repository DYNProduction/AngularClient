import {EntityId} from './EntityId';
import {User} from './user-database/user';
import {OnInit} from '@angular/core';
import {UserService} from './user-database/user.service';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ModalUserComponent} from './user-database/modal-user/modal-user.component';
import {HttpService} from './http.service';
import {element} from 'protractor';


export class EntittyRequest<T extends EntityId> implements OnInit{

  elements: T[] = [];

  constructor(private httpService: HttpService<T>) {
  }

  elementRequest(modelRef:NgbModalRef){
    modelRef.result.then(result=>{
      if (result instanceof Object){
        this.submit(result);
      }
      else {
        console.log(result.toString());
      }
    });
  }

  getAll(){
    this.httpService.getData().subscribe(data => this.elements = <T[]> data,
      error => console.log(error));
  }

  ngOnInit() {
    this.getAll();
  }

  submit(element: T , oldElement: T = null) {
    this.httpService.postData(element)
      .subscribe(
        (data: T) => {
          let elementById=this.elements.filter(element=>element.id===data.id);

          if (elementById.length===0) {
            this.elements.push(data);
          }

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
      if (element.id!=this.elements[this.index].id) {
        this.newArray.push(this.elements[this.index]);
      }
      this.index++;
    }

    this.elements=this.newArray;

  }
}
