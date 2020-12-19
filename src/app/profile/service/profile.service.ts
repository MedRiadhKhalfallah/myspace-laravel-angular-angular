import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl = environment.baseUrl;
  private baseUrlProfile = environment.baseUrl + '/profile';

  constructor(private http: HttpClient) {
  }

  public getProfile(): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.get(this.baseUrlProfile, {headers});
  }
  public getProfileById(id): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.get(this.baseUrlProfile+'/'+id, {headers});
  }
  public deleteById(id): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.delete(this.baseUrlProfile+'/'+id, {headers});
  }

  public updateProfile(data): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    // headers = headers.append('X-HTTP-Method-Override', 'PATCH'); // Not added yet as this is the reason for the question
    return this.http.put(this.baseUrlProfile + '/' + data.id, data, {headers});
  }

  public updatePassword(data): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.put(this.baseUrlProfile + '/password/' + data.id, data, {headers});
  }

  public updateImageProfile(id, data): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    headers = headers.append('X-HTTP-Method-Override', 'PATCH'); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrlProfile + '/profile-image/' + id, data, {headers});
  }

  public updateImageCoverture(id, data): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    headers = headers.append('X-HTTP-Method-Override', 'PATCH'); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrlProfile + '/coverture-image/' + id, data, {headers});
  }

  public updateUserRoles(data, id): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    // headers = headers.append('X-HTTP-Method-Override', 'PATCH'); // Not added yet as this is the reason for the question
    return this.http.put(this.baseUrlProfile + '/' + id + '/roles', data, {headers});
  }

  public sendMailVerificationLink(data): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrlProfile +'/sendMailVerificationLink', data, {headers});
  }
  public verificationMail(data): any {
    let headers: HttpHeaders = new HttpHeaders();
    const token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token); // Not added yet as this is the reason for the question
    return this.http.post(this.baseUrlProfile +'/verificationMail', data, {headers});
  }


}
