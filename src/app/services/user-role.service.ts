import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  private  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getUsersRoles() {
    let headers: HttpHeaders = new HttpHeaders();
    let token=localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer '+token); // Not added yet as this is the reason for the question
    return this.http.get(this.baseUrl + "/getUsersRoles", { headers });
  }

}
