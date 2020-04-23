import {EntityId} from './EntityId';

export class Branch extends EntityId {
  codeBranch: number;
  name: string;
  address: string;
  number: string;

  constructor(codeBranch: number,
              name: string,
              address: string,
              number: string) {
    super();
    this.codeBranch = codeBranch;
    this.name = name;
    this.address = address;
    this.number = number;
  }
}
