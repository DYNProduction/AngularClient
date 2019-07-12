import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Route} from '@angular/router';
import {url} from 'inspector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  url:string='http://localhost:8081/login?login=user&password=password';

  sadas:{vino:any};

  constructor(private http: HttpClient) {
  }



  public getData() {
    return this.http.post(this.url, {},{}).subscribe(data=>this.sadas.vino=data);

  }

  ngOnInit(): void {
  }

}
