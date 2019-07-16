import {Component, OnInit} from '@angular/core';
import {AgentService} from '../service/agent.service';
import {NgbDateStruct, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Agent} from '../model/agent';
import {ContractService} from '../service/contract.service';
import {EntittyRequest} from '../EntittyRequest';
import {ModalContractComponent} from './modal-contract/modal-contract.component';
import {BranchService} from '../service/branch.service';
import {TariffService} from '../service/tariff.service';
import {HttpService} from '../http.service';
import {Contract} from '../model/contract';
import {Branch} from '../model/branch';
import {Tariff} from '../model/tariff';

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

  }

  ngOnInit() {
    this.getAll();

    this.agentService.getData().subscribe(data => this.listAgent = <Agent[]> data,
      error => console.log(error));

    this.branchService.getData().subscribe(data => this.listBranchs= <Branch[]> data,
      error => console.log(error));

    this.tariffService.getData().subscribe(data => this.listTariff = <Tariff[]> data,
      error => console.log(error));
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
    const modelRef = this.modalService.open(ModalContractComponent, {backdrop: 'static', centered: true, keyboard: false});
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
    super.delete(element,this.modalService);
  }
}
