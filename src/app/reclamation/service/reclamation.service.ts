import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private baseUrl;
  private baseUrlReclamation;

  constructor(private http: HttpClient) {
    this.baseUrl= environment.baseUrl;
    this.baseUrlReclamation= this.baseUrl + '/reclamations';
  }

  public updateReclamation(id,data): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    headers = headers.append('X-HTTP-Method-Override', 'PATCH'); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrlReclamation +'/'+ id, data, {headers});
  }

  public createReclamation(data): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrlReclamation , data, {headers});
  }

  public deleteReclamation(id): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.delete(this.baseUrlReclamation +'/'+ id, {headers});
  }

  public getReclamationList(): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.get(this.baseUrlReclamation, {headers});
  }
}
