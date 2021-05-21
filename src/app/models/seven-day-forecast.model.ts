import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SevenDayForecast {
  public day:any;
  public date:any;
  public description:any;
  public minTemperature:any;
  public maxTemperature:any;
  public icon:any;
}
