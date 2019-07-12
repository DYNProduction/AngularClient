import { Component, OnInit } from '@angular/core';
import {UserService} from '../user-database/user.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalUserComponent} from '../user-database/modal-user/modal-user.component';
import {User} from '../user-database/user';
import {TariffService} from './tariff.service';
import {EntittyRequest} from '../EntittyRequest';
import {Tariff} from './tariff';
import {ModalTariffComponent} from './modal-tariff/modal-tariff.component';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.css','../table.button.css'],
  providers: [TariffService]
})
export class TariffComponent extends EntittyRequest<Tariff>{
  columnList : Array<string> =[
    "Идентификатор",
    "Тарифная ставка"
  ];

  modelRef: any;

  constructor(private userService: TariffService,
              private modalService: NgbModal ) {
    super(userService);
  }

  addUser(){
    const modelRef=this.modalService.open(ModalTariffComponent, { backdrop: "static", centered: true , keyboard:false});

    this.elementRequest(modelRef);
  }

  editUser(tariff : Tariff){
    this.modelRef=this.modalService.open(ModalTariffComponent, { centered: true , keyboard:false});

    this.modelRef.componentInstance.editTariff = tariff;
  }

  delete(element: Tariff) {
    super.delete(element);
  }

}
