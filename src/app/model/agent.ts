import {EntityId} from './EntityId';

export class Agent extends EntityId {
  fullName: string;
  address: string;
  number: string;

  constructor(fullName: string,
              address: string,
              number: string) {
    super();
    this.fullName = fullName;
    this.address = address;
    this.number = number;
  }

}
