import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from './../../environments/environment';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getUsers() {
    let headers: HttpHeaders = new HttpHeaders();
    let token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.get(this.baseUrl + "/getUsers", {headers});
  }

  findUserById() {
    let headers: HttpHeaders = new HttpHeaders();
    let token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
  }

  public userSearchWithCriteria(searchobject): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrl + '/userSearch', searchobject, {headers});
  }

}
