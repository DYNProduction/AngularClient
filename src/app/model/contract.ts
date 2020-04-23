import {EntityId} from './EntityId';
import {Agent} from './agent';
import {Branch} from './branch';
import {Tariff} from './tariff';


export class Contract extends EntityId {
  codeContract: number;
  insuranceType: string;
  insuranceAmount: number;
  insuranceDate: Date;
  agent: Agent;
  branch: Branch;
  tariff: Tariff;

  constructor(codeContract: number,
              insuranceType: string,
              insuranceAmount: number,
              insuranceDate: Date,
              agent: Agent,
              branch: Branch,
              tariff: Tariff) {
    super();
    this.codeContract = codeContract;
    this.insuranceAmount = insuranceAmount;
    this.insuranceType = insuranceType;
    this.insuranceDate = insuranceDate;
    this.agent = agent;
    this.branch = branch;
    this.tariff = tariff;
  }
}
