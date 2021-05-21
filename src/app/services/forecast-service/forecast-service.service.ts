import {Injectable, OnInit} from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForecastService implements OnInit{
  apiKey = '6246b2f332db9d80c4d1949f6c805feb';
  zipCodeApiKey ='DemoOnly00hyOkXJnc87y8GZIXRbGqf2HMYbLiqcM172xDuIPadr8fCwAscJ1kWP'
  constructor(private http: HttpClient) { }
  country = 'us'
  apiCallsLeft:any;
  setNumber = 600

  ngOnInit(){
    if(localStorage.length < 1){
      localStorage.setItem('apiCalls',JSON.stringify(this.setNumber))
    }
  }

  loadCurrentForecast(city:any, state:any): Observable<any>{
    this.countAPIcalls()
    console.log('There are '+this.apiCallsLeft+' api calls left')
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${state},${this.country}&cnt=1&appid=${this.apiKey}`)
  }

  countAPIcalls(){
    let api:any = localStorage.getItem('apiCalls')
    let newCount = api - 1
    localStorage.setItem('apiCalls',JSON.stringify(newCount))
    this.apiCallsLeft = localStorage.getItem('apiCalls')
  }

  loadSevenDayForecast(city:any,state:any){
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city},${state},${this.country}&cnt=7&appid=${this.apiKey}`)
  }

}
