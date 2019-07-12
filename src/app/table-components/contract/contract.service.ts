import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Contract} from './contract';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ContractService extends HttpService<Contract>{

  constructor(private httpClient:HttpClient){
    super(httpClient);
    this.setBaseUrl("/contracts");
  }
}
