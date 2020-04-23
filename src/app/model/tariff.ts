import {EntityId} from './EntityId';

export class Tariff extends EntityId {
  tariffRate: number;

  constructor(tarriff: number) {
    super();
    this.tariffRate = tarriff;
  }
}
