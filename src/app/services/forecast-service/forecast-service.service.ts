import {Injectable, OnInit} from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService implements OnInit{
  apiKey = '6246b2f332db9d80c4d1949f6c805feb';
  zipCodeApiKey ='DemoOnly00hyOkXJnc87y8GZIXRbGqf2HMYbLiqcM172xDuIPadr8fCwAscJ1kWP'
  constructor(private https: HttpClient) { }
  country = 'us'

  ngOnInit(){
  }

  loadCurrentForecast(city:any, state:any): Observable<any>{
    return this.https.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${this.country}&cnt=1&appid=${this.apiKey}`)
  }

  loadSevenDayForecast(city:any,state:any){
    return this.https.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city},${state},${this.country}&cnt=7&appid=${this.apiKey}`)
  }

}
