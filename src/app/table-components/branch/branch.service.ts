import {HttpService} from '../http.service';
import {Branch} from './branch';
import {HttpClient} from '@angular/common/http';

export class BranchService extends HttpService<Branch>{
  constructor(private httpClient:HttpClient){
    super(httpClient);
    this.setBaseUrl("/branchs")
  }
}
