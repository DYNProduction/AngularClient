import {EntityId} from './EntityId';

export class Agent extends EntityId {
  fullName: string;
  address: string;
  number: string;

  constructor() {
    super();
    this.fullName = "";
    this.address = "";
    this.number = "";
  }

}
