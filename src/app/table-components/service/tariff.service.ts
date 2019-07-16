import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {HttpClient} from '@angular/common/http';
import {Tariff} from '../model/tariff';

@Injectable()
export class TariffService extends HttpService<Tariff>{

  constructor(private client: HttpClient) {
    super(client);
    this.setBaseUrl("/tariffs");
  }

}
