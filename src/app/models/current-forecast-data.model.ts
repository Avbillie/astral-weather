import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentForecastData {
  public cityName:any;
  public description:any;
  public currentTemperature:any;
  public humidity:any;
  public wind:any;
  public uvIndex:any;
  public minTemperature:any;
  public maxTemperature:any;
  public icon:any;
}


