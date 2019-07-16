import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Agent} from '../model/agent';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class AgentService extends HttpService<Agent>{

  constructor(private httpClient: HttpClient){
    super(httpClient);
    this.setBaseUrl("/agents");
  }
}
