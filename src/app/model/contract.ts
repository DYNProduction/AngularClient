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

  constructor() {
    super();
    this.codeContract = 0;
    this.insuranceType = "";
    this.insuranceAmount = 0;
    this.insuranceDate = new Date();
    this.tariff = new Tariff();
    this.branch = new Branch();
    this.agent = new Agent();
  }
}
