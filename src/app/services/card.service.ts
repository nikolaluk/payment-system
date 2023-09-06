import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient, private router: Router) { }



  addCard(cardData: any) {
    const { appUrl } = environment;
    const json = JSON.stringify(cardData);
    const accountId = localStorage.getItem('id');
    console.log(json);
        
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      //TODO: Add X-auth header
    })
 
    return this.http.post<any>(`${appUrl}/card/add/${accountId}`, json, {headers})
  }
}
