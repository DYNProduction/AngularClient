import {Component} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TariffService} from '../../service/tariff.service';
import {EntittyRequest} from '../../model/EntittyRequest';
import {ModalTariffComponent} from '../../modals/modal-tariff/modal-tariff.component';
import {Tariff} from '../../model/tariff';

@Component({
  selector: 'app-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.css', '../table.button.css'],
  providers: [TariffService, NgbModal]
})

export class TariffComponent extends EntittyRequest<Tariff> {
  columnList: Array<string> = [
    "#",
    "Тарифная ставка"
  ];


  constructor(private userService: TariffService,
              private modalService: NgbModal) {
    super(userService);
    this.elements.push(new Tariff(25));
    this.elements.push(new Tariff(40));
    this.elements.push(new Tariff(50));
    this.userService.elements = this.elements;
  }

  addTariff() {
    const modelRef = this.modalService.open(ModalTariffComponent, {
      backdrop: "static",
      centered: true,
      keyboard: false
    });

    this.elementRequest(modelRef);
  }

  editTariff(tariff: Tariff) {
    const modelRef = this.modalService.open(ModalTariffComponent, {centered: true, keyboard: false});

    modelRef.componentInstance.editTariff = Object.assign({}, tariff);

    this.elementRequest(modelRef, tariff);
  }

  delete(element: Tariff) {
    super.delete(element, this.modalService);
  }

}
