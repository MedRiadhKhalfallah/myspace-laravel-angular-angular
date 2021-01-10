import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface Location {
  latitude: string,
  longitude: string
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) {
  }

  getLocation() {
    return this.http.get<Location>('http://api.ipapi.com/api/check?access_key=c2ba7ee6790f7606d8350cb3f9215d88');
  }
}
