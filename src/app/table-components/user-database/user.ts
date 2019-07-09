// @ts-ignore
import {EntityId} from "../EntityId.js";

export class User extends EntityId{
    login : string;
    password : string;

    constructor(){
      super();
      this.login="";
      this.password="";
    }
}
