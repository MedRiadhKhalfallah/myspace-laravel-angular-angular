import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProduitUtilisateurService {

  private baseUrl;
  private baseUrlNewProduit;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.baseUrlNewProduit = this.baseUrl + '/newProduits';
  }

  public updateProduitUtilisateur(id, data): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    headers = headers.append('X-HTTP-Method-Override', 'PATCH'); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrlNewProduit + '/' + id, data, {headers});
  }

  public createProduitUtilisateur(data): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrlNewProduit, data, {headers});
  }

  public getProduitUtilisateurById(id): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.get(this.baseUrlNewProduit + '/' + id, {headers});
  }

  public deleteProduitUtilisateur(id): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.delete(this.baseUrlNewProduit + '/' + id, {headers});
  }

  public getProduitUtilisateurList(): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.get(this.baseUrlNewProduit, {headers});
  }

  public produitUtilisateurSearchWithCriteria(searchobject): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrl + '/produitUtilisateurSocieteSearch', searchobject, {headers});
  }
}
