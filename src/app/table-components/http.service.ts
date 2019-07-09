import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
// @ts-ignore
import {EntityId} from "./EntityId.ts";
import {baseUrl} from '../../environments/environment';

@Injectable()
export class HttpService<T extends EntityId> {

  private baseUrl:string = baseUrl;

  public setBaseUrl(urlTable:string){
    this.baseUrl += urlTable;
  }

  constructor(private http: HttpClient) {
  }

  public getData() {
    return this.http.get(this.baseUrl, {responseType: 'json'});
  }

  public postData(element: T) {
    return this.http.post(this.baseUrl, element, {responseType: 'json'});
  }

  public deleteData(element: T) {
    return this.http.delete(this.baseUrl+'/' + String(element.id()));
  }

  public putData(element: T) {
    return this.http.post(this.baseUrl, element, {responseType: 'json'});
  }
}
