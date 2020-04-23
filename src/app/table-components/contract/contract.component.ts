import {Component} from '@angular/core';
import {AgentService} from '../../service/agent.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Agent} from '../../model/agent';
import {ContractService} from '../../service/contract.service';
import {EntittyRequest} from '../../model/EntittyRequest';
import {ModalContractComponent} from '../../modals/modal-contract/modal-contract.component';
import {BranchService} from '../../service/branch.service';
import {TariffService} from '../../service/tariff.service';
import {HttpService} from '../../service/http.service';
import {Contract} from '../../model/contract';
import {Branch} from '../../model/branch';
import {Tariff} from '../../model/tariff';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css', '../table.button.css'],
  providers: [ContractService, EntittyRequest, HttpService, AgentService, BranchService, TariffService]
})

export class ContractComponent extends EntittyRequest<Contract> {

  columnList: Array<string> = [
    '#',
    'Код контракта',
    'Тип страхования',
    'Сумма страхования',
    'Дата заключения',
    'Агент',
    'Филиал',
    'Тарифная ставка'
  ];

  constructor(private contractService: ContractService,
              private agentService: AgentService,
              private  branchService: BranchService,
              private tariffService: TariffService,
              private  modalService: NgbModal) {
    super(contractService);

    this.listAgent.push(new Agent('Куликовский Кабутар Святославович', '195248, г. Гатчина, ул. Магистральный 1-й проезд, дом 71, квартира 51', '+7 (962) 479-90-61'));
    this.listAgent.push(new Agent('Анисимова Кадерли Романовна', '399531, г. Орск, ул. Сиреневая, дом 11, квартира 343', '+7 (957) 334-47-80'));
    this.listAgent.push(new Agent('Журавель Басман Филиппович', '198217, г. Кольчугино, ул. 1905 года, дом 10, квартира 167', '+7 (950) 681-81-24'));
    this.listBranchs.push(new Branch(131234, 'Восточный', '152062, г. Верх-Усугли, ул. Новомихалковский 3-й проезд, дом 51, квартира 485', '+7 (970) 165-78-30'));
    this.listBranchs.push(new Branch(234562, 'Северный', '603096, г. Тольятти, ул. Автозаводский 3-й проезд, дом 39, квартира 313', '+7 (927) 899-26-79'));
    this.listBranchs.push(new Branch(432652, 'Восточный', '442571, г. Ключи, ул. Стахановская, дом 80, квартира 328', '+7 (990) 473-46-59'));
    this.listTariff.push(new Tariff(25));
    this.listTariff.push(new Tariff(40));
    this.listTariff.push(new Tariff(50));
    this.elements.push(new Contract(
      123123,
      'Процентный',
      25,
      new Date(),
      this.listAgent[1],
      this.listBranchs[1],
      this.listTariff[1]
    ));
    this.elements.push(new Contract(
      1212354,
      'Беспроцентный>',
      12,
      new Date(),
      this.listAgent[2],
      this.listBranchs[0],
      this.listTariff[1]
    ));
    this.elements.push(new Contract(
      1872364,
      'Вечный',
      12353,
      new Date(),
      this.listAgent[0],
      this.listBranchs[1],
      this.listTariff[2]
    ));
  }

  ngOnInit() {
    this.getAll();

  }

  listAgent: Agent[] = [];
  listBranchs: Branch[] = [];
  listTariff: Tariff[] = [];

  initialComponent(modelRef: any) {
    modelRef.componentInstance.listAgent = this.listAgent;
    modelRef.componentInstance.listBranch = this.listBranchs;
    modelRef.componentInstance.listTariff = this.listTariff;
  }

  addUser() {
    const modelRef = this.modalService.open(ModalContractComponent, {
      backdrop: 'static',
      centered: true,
      keyboard: false
    });
    this.initialComponent(modelRef);

    this.elementRequest(modelRef);
  }

  editUser(element: Contract) {
    const modelRef = this.modalService.open(ModalContractComponent, {centered: true, keyboard: false});
    this.initialComponent(modelRef);

    modelRef.componentInstance.editContract = Object.assign({}, element);

    this.elementRequest(modelRef, element);
  }

  delete(element: Contract) {
    super.delete(element, this.modalService);
  }
}
