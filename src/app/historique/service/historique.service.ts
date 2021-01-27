import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  private baseUrl;
  private baseUrlHistorique;

  constructor(private http: HttpClient) {
    this.baseUrl= environment.baseUrl;
    this.baseUrlHistorique= this.baseUrl + '/historiques';

  }

  public historiqueSearchWithCriteria(searchobject): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrl + '/historiqueSearch', searchobject, {headers});
  }
}
