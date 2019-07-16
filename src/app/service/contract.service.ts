import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {Contract} from '../model/contract';
import {Observable} from 'rxjs';


@Injectable()
export class ContractService extends HttpService<Contract> {

  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.setBaseUrl("/contracts");
  }
}
