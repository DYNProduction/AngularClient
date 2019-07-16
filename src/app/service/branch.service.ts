import {HttpService} from './http.service';
import {HttpClient} from '@angular/common/http';
import {Branch} from '../model/branch';
import {Injectable} from "@angular/core";

@Injectable()
export class BranchService extends HttpService<Branch> {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
    this.setBaseUrl("/branchs")
  }
}
