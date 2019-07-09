import {HttpService} from '../http.service';
import {User} from './user';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService extends HttpService<User>{

  constructor(private client: HttpClient) {
    super(client);
    this.setBaseUrl("/users");
  }

}
