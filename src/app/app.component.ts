import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CurrentForecastData } from './models/current-forecast-data.model';
import { SevenDayForecast } from './models/seven-day-forecast.model';
import { ForecastService } from './services/forecast-service/forecast-service.service';
import jsonCities from 'src/app/JSON/US_States_and_Cities.json';
import jsonCityCodes from 'src/app/JSON/stateData.json';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './components/shared/shared.scss'],
})
export class AppComponent {
  toggleSwitch: any;
  data:any=null;
  humidityImg = './assets/images/humidity.jpg';
  searchImg = './assets/images/magnifying-glass-icon-26752.png';
  sevenDayArray: any [] =[];
  dayArray: any[] = [];
  stateCodeArray: any[] = [];
  weekdayDataArray: any[] = [];
  currentCityWeather: any = {
    city: '',
    weather: '',
    cityNcode:'',
    code:'',
    humidity: '',
    uvIndex: '',
    windSpeed: '',
    highTemp: '',
    lowTemp: '',
    description: ''
  };

  constructor(
    private forecastService: ForecastService,
    private currentForecastData: CurrentForecastData,
    public sevenDayForecastData: SevenDayForecast,
    private router: Router
  ) { }

  ngOnInit(): void {
    const data:any = sessionStorage.getItem('weatherData')
    if(data){
      this.searchedCity(data.daily.city, data.daily.code)
    }
    this.parseJSONdata()
    this.searchedCity('Palm Springs', 'CA')
  }

  ngOnChanges() {
  }

  parseJSONdata() {
    // Parses between two json files and compares the cities, if cities match pull the json city code and combine json data then push to array
    for (let a = 0; a < jsonCityCodes.length;a++) {
      for (let b = 0; b < jsonCities.length;b++) {
        if (jsonCityCodes[a].State === jsonCities[b].state) {
          this.stateCodeArray.push({
            city: jsonCities[b].city,
            state: jsonCities[b].state,
            code: jsonCityCodes[a].Code
          })
        }
      }
    }
  }

 searchedCity(cityText: any, stateText: any) {
      const data ={
        city:cityText.toLowerCase(),
        code:stateText.toLowerCase()
      }

    for(let i of this.stateCodeArray){

      if(i.city.toLowerCase() === data.city.toLowerCase() && i.code.toLowerCase() === data.code.toLowerCase() ){
        sessionStorage.setItem('searchInitiated','true')
        this.loadForecastWeather(i.city, i.code);
      }
    }
  }

  loadForecastWeather(city: any,state:any) {

    this.forecastService.loadCurrentForecast(city, state).subscribe((res) => {

      this.currentForecastData = new CurrentForecastData();
      this.currentForecastData.cityName = res.name;
      this.currentForecastData.icon = res.weather[0].icon;
      this.currentForecastData.description = res.weather[0].description;
      this.currentForecastData.currentTemperature =
      Math.floor((res.main.temp - 273.15) * 1.8) + 32 + '℉';
      this.currentForecastData.minTemperature =
      Math.floor((res.main.temp_min - 273.15) * 1.8) + 32 + '℉';
      this.currentForecastData.maxTemperature =
      Math.floor((res.main.temp_max - 273.15) * 1.8) + 32 + '℉';
      this.currentForecastData.humidity = res.main.humidity + '%';
      this.currentForecastData.wind = Math.ceil(Math.cbrt(Math.pow(res.wind.speed/0.836, 2))) + ' MPH';
      this.currentCityWeather.cityNcode = city + ', ' + state;
      this.currentCityWeather.city = city
      this.currentCityWeather.code = state;
      this.currentCityWeather.weather = this.currentForecastData.currentTemperature;
      this.currentCityWeather.humidity = this.currentForecastData.humidity
      this.currentCityWeather.weather = this.currentForecastData.currentTemperature
      this.currentCityWeather.windSpeed = this.currentForecastData.wind
      this.currentCityWeather.highTemp = this.currentForecastData.maxTemperature
      this.currentCityWeather.lowTemp = this.currentForecastData.minTemperature
      this.currentCityWeather.description = this.currentForecastData.description

      this.forecastService
      .loadSevenDayForecast(city, state)
      .subscribe(
        (res) => {

          this.sevenDayArray = []
          this.sevenDayArray.push(res)
          let days= this.sevenDayArray[0].list
            for (let i = 0; i < days.length; i++) {

              this.sevenDayForecastData = new SevenDayForecast();
              this.sevenDayForecastData.day = moment
                .unix(days[i].dt)
                .format('dddd');
              this.sevenDayForecastData.date = moment
                .unix(days[i].dt)
                .format('L');
              this.sevenDayForecastData.description =
              days[i].weather[0].description;
              this.sevenDayForecastData.minTemperature =
                Math.floor((days[i].temp.min - 273.15) * 1.8) + 32 + '℉';
              this.sevenDayForecastData.maxTemperature =
                Math.floor((days[i].temp.max - 273.15) * 1.8) + 32 + '℉';
              this.weekdayDataArray.push(this.sevenDayForecastData);
            }
            let state:any = {daily: this.currentCityWeather, weekdays: this.weekdayDataArray}
            sessionStorage.setItem('weatherData', JSON.stringify(state));
              this.router.navigate(['/sevenDayForecast'], {state: {daily: this.currentCityWeather, weekdays: this.weekdayDataArray},skipLocationChange:false})

              this.weekdayDataArray = [];
          },
          (error) => {
            console.log(error);
          }
        );
    });
  }


}
