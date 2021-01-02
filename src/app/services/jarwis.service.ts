import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class JarwisService {
  private baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl= environment.baseUrl;
  }

  signup(data) {
    return this.http.post(this.baseUrl + "/signup", data)
  }

  login(data) {
    return this.http.post(this.baseUrl + "/login", data)
  }
  loginGoogle() {
    return this.http.get(this.baseUrl + "/login/google")
  }

  sendPasswordResetLink(data) {
    return this.http.post(this.baseUrl + "/sendPasswordResetLink", data)
  }

  changePassword(data) {
    return this.http.post(this.baseUrl + "/resetPassword", data)
  }
}
