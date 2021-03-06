import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewProduitService {

  private baseUrl;
  private baseUrlNewProduit;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
    this.baseUrlNewProduit = this.baseUrl + '/newProduits';
  }

  public updateNewProduit(id, data): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    headers = headers.append('X-HTTP-Method-Override', 'PATCH'); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrlNewProduit + '/' + id, data, {headers});
  }

  public createNewProduit(data): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrlNewProduit, data, {headers});
  }

  public getNewProduitById(id): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.get(this.baseUrlNewProduit + '/' + id, {headers});
  }

  public deleteNewProduit(id): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.delete(this.baseUrlNewProduit + '/' + id, {headers});
  }

  public getNewProduitList(): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.get(this.baseUrlNewProduit, {headers});
  }

  public newProduitSearchWithCriteria(searchobject): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrl + '/newProduitSearch', searchobject, {headers});
  }
  public newProduitSocieteSearchWithCriteria(searchobject): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrl + '/newProduitSocieteSearch', searchobject, {headers});
  }
}
