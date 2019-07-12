import {Component, OnInit} from '@angular/core';
import {AgentService} from '../agent/modal-agent/agent.service';
import {NgbDateStruct, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalAgentComponent} from '../agent/modal-agent/modal-agent.component';
import {Agent} from '../agent/modal-agent/agent';
import {ContractService} from './contract.service';
import {EntittyRequest} from '../EntittyRequest';
import {Contract} from './contract';
import {ModalContractComponent} from './modal-contract/modal-contract.component';
import {Branch} from '../branch/branch';
import {BranchService} from '../branch/branch.service';
import {TariffService} from '../tariff/tariff.service';
import {Tariff} from '../tariff/tariff';
import {HttpService} from '../http.service';
import {until} from 'selenium-webdriver';
import elementIsNotSelected = until.elementIsNotSelected;

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css', '../table.button.css'],
  providers: [ContractService, EntittyRequest, HttpService, AgentService, BranchService, TariffService]
})
export class ContractComponent extends EntittyRequest<Contract> {

  columnList: Array<string> = [
    'Идентификатор',
    "Код контракта",
    'Тип страхования',
    'Сумма страхования',
    'Дата заключения',
    'Агент',
    'Филиал',
    'Тарифная ставка'
  ];

  modelRef: any;

  ngOnInit() {
    this.getAll();

    this.agentService.getData().subscribe(data => this.listAgent = <Agent[]> data,
      error => console.log(error));
    this.branchService.getData().subscribe(data => this.listBranchs= <Branch[]> data,
      error => console.log(error));
    this.tariffService.getData().subscribe(data => this.listTariff = <Tariff[]> data,
      error => console.log(error));
  }

  constructor(private contractService: ContractService,
              private agentService: AgentService,
              private  branchService: BranchService,
              private tariffService: TariffService,
              private  modalService: NgbModal) {
    super(contractService);
  }



  listAgent:Agent[]=[];
  listBranchs:Branch[]=[];
  listTariff:Tariff[]=[];

  initialComponent(modelRef:any){
    modelRef.componentInstance.listAgent = this.listAgent;
    modelRef.componentInstance.listBranch = this.listBranchs;
    modelRef.componentInstance.listTariff = this.listTariff;
  }

  addUser() {
    this.modelRef = this.modalService.open(ModalContractComponent, {backdrop: 'static', centered: true, keyboard: false});
    this.initialComponent(this.modelRef);

    this.elementRequest(this.modelRef);
  }

  editUser(element: Contract) {
    this.modelRef = this.modalService.open(ModalContractComponent, {centered: true, keyboard: false});
    this.initialComponent(this.modelRef);

    this.modelRef.componentInstance.editContract = element;

    this.elementRequest(this.modelRef);
  }

  delete(element: Contract) {
    super.delete(element);
  }
}
