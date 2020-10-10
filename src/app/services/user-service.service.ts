import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = "http://localhost:8000/api";

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.baseUrl + "/getUsers");
  }

}
