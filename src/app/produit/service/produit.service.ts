import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseUrl = environment.baseUrl;
  private baseUrlProduit = environment.baseUrl + '/produits/';

  constructor(private http: HttpClient) {
  }

  public updateProduit(id, data): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    headers = headers.append('X-HTTP-Method-Override', 'PATCH'); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrlProduit + id, data, {headers});
  }

  public createProduit(data): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrlProduit , data, {headers});
  }

  public getProduit(): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.get(this.baseUrlProduit + '/1', {headers});
  }

  public deleteProduit(id): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.delete(this.baseUrlProduit + id, {headers});
  }

  public getProduitList(): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.get(this.baseUrlProduit, {headers});
  }

  public produitSearchWithCriteria(searchobject): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrl + '/produitSearch', searchobject, {headers});
  }
}
