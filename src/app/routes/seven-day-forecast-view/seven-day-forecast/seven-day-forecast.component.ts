import {
  Component,
  OnInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
  Input,
  AfterViewInit,
} from '@angular/core'
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-seven-day-forecast',
  templateUrl: './seven-day-forecast.component.html',
  styleUrls: ['./seven-day-forecast.component.scss'],
})
export class SevenDayForecastComponent
  implements OnChanges, AfterViewInit, OnInit {

  weekdaysArray:any[] =[]
  currentCity:any = {
    city:'',
    weather:''
  };


  constructor(
    public route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.getData()
  }


  ngAfterViewInit() {
  }

  ngOnChanges() {
  }

  getData(){
    const searchInitiated = sessionStorage.getItem('searchInitiated');
    const data = sessionStorage.getItem('weatherData')
    if(searchInitiated === 'true'){
      const historyData = history.state;
      sessionStorage.setItem('weatherData', JSON.stringify(historyData));
      const storageData:any = sessionStorage.getItem('weatherData');
      const parsedData = JSON.parse(storageData);
      this.weekdaysArray = parsedData[0].weekdays;
      this.currentCity.city = parsedData[0].daily.city;
      this.currentCity.weather = parsedData[0].daily.weather;
      sessionStorage.setItem('dataRetrieved','true')
      // toggle search bar 1 and 2 only when the search is initiated
      sessionStorage.setItem('toggleControl','off')
    }else if(searchInitiated === 'false' && data !== null){
      const storageData:any = sessionStorage.getItem('weatherData');
      const parsedData = JSON.parse(storageData);
      this.weekdaysArray = parsedData[0].weekdays;
      this.currentCity.city = parsedData[0].daily.city;
      this.currentCity.weather = parsedData[0].daily.weather;
      sessionStorage.setItem('dataRetrieved','true')
      // target search bar 1 and 2 only when there is weather data
      sessionStorage.setItem('toggleControl','off')
    }
  }

}



