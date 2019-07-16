import {EntityId} from '../EntityId';

export class Branch extends EntityId{
  codeBranch:number;
  name:string;
  adress:string;
  number:string;

  constructor(){
    super();
    this.codeBranch=0;
    this.name="";
    this.adress="";
    this.number="";
  }
}
