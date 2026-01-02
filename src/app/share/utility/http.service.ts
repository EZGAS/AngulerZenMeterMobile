import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(api: string) {

    return this.http.get<any>(environment.apiurl + api);
  }
  post(api: string, data: any) {
    return this.http.post<any>(environment.apiurl + api, data)
  }

}
