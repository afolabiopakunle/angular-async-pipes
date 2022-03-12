import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Weather } from './app.component';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherPayload(): Observable<any> {
   return this.http.get('https://weatherapi-com.p.rapidapi.com/ip.json', {
      headers: {
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
        'x-rapidapi-key': 'ac300e9dfcmsh63b2be09ee7894bp12b7e2jsn2cea04ccc041'
      },
      params: {
        q: '105.112.60.63'
      }
    })
  }

}