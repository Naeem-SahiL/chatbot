import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatapiService {

  constructor(private http: HttpClient) { }

  getChatApiResponse(message:string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { prompt: message };

    return this.http.post<any>('/api', body, { headers: headers });
  }
}
