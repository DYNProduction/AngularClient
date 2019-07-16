import {EntityId} from './EntityId';

export class Branch extends EntityId {
  codeBranch: number;
  name: string;
  address: string;
  number: string;

  constructor() {
    super();
    this.codeBranch = 0;
    this.name = "";
    this.address = "";
    this.number = "";
  }
}
