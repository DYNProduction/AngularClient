import {EntityId} from '../../EntityId';

export class Agent extends EntityId{
  fullName:string;
  adress:string;
  number:string;

  constructor(){
    super();
    this.fullName="";
    this.adress="";
    this.number="";
  }

}
