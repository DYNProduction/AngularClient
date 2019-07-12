import {EntityId} from '../EntityId';

export class Tariff extends EntityId{
  tariffRate:number;

  constructor() {
    super();
    this.tariffRate=0;
  }
}
