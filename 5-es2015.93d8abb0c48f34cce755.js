(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{zoMK:function(t,n,e){"use strict";e.r(n),e.d(n,"DashboardModuleNgFactory",function(){return O});var a=e("8Y7J");e("1uSB");class r{}var l=e("pMnS"),i=e("SVse");function o(t,n,e,a){return new(e||(e=Promise))(function(r,l){function i(t){try{c(a.next(t))}catch(n){l(n)}}function o(t){try{c(a.throw(t))}catch(n){l(n)}}function c(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e(function(t){t(n)})).then(i,o)}c((a=a.apply(t,n||[])).next())})}var c=e("UFcT"),u=e("RPmn"),s=e("95H0"),h=e("UmPm"),d=e("wd/R");class g{constructor(t,n,e,a){this.forecastService=t,this.currentForecastData=n,this.sevenDayForecastData=e,this.router=a,this.data=null,this.humidityImg="./assets/images/humidity.jpg",this.searchImg="./assets/images/magnifying-glass-icon-26752.png",this.sevenDayArray=[],this.dayArray=[],this.stateCodeArray=[],this.weekdayDataArray=[],this.currentCityWeather={city:"",weather:"",cityNcode:"",code:"",humidity:"",uvIndex:"",windSpeed:"",highTemp:"",lowTemp:"",description:""}}ngOnInit(){this.parseJSONdata(),this.getData()}ngOnChanges(){this.getData()}parseJSONdata(){for(let t=0;t<h.length;t++)for(let n=0;n<s.length;n++)h[t].State===s[n].state&&this.stateCodeArray.push({city:s[n].city,state:s[n].state,code:h[t].Code})}searchedCity(t,n){const e=t.toLowerCase(),a=n.toLowerCase();for(let r of this.stateCodeArray)r.city.toLowerCase()===e&&r.code.toLowerCase()===a&&(sessionStorage.setItem("searchInitiated","true"),this.loadForecastWeather(r.city,r.code))}loadForecastWeather(t,n){return o(this,void 0,void 0,function*(){this.forecastService.loadCurrentForecast(t,n).subscribe(e=>{this.currentForecastData=new c.a,this.currentForecastData.cityName=e.name,this.currentForecastData.icon=e.weather[0].icon,this.currentForecastData.description=e.weather[0].description,this.currentForecastData.currentTemperature=Math.floor(1.8*(e.main.temp-273.15))+32+"\u2109",this.currentForecastData.minTemperature=Math.floor(1.8*(e.main.temp_min-273.15))+32+"\u2109",this.currentForecastData.maxTemperature=Math.floor(1.8*(e.main.temp_max-273.15))+32+"\u2109",this.currentForecastData.humidity=e.main.humidity+"%",this.currentForecastData.wind=Math.ceil(Math.cbrt(Math.pow(e.wind.speed/.836,2)))+" MPH",this.currentCityWeather.cityNcode=t+", "+n,this.currentCityWeather.city=t,this.currentCityWeather.code=n,this.currentCityWeather.weather=this.currentForecastData.currentTemperature,this.currentCityWeather.humidity=this.currentForecastData.humidity,this.currentCityWeather.weather=this.currentForecastData.currentTemperature,this.currentCityWeather.windSpeed=this.currentForecastData.wind,this.currentCityWeather.highTemp=this.currentForecastData.maxTemperature,this.currentCityWeather.lowTemp=this.currentForecastData.minTemperature,this.currentCityWeather.description=this.currentForecastData.description,this.forecastService.loadSevenDayForecast(t,n).subscribe(t=>{this.sevenDayArray=[],this.sevenDayArray.push(t);let n=this.sevenDayArray[0].list;for(let e=0;e<n.length;e++)this.sevenDayForecastData=new u.a,this.sevenDayForecastData.day=d.unix(n[e].dt).format("dddd"),this.sevenDayForecastData.date=d.unix(n[e].dt).format("L"),this.sevenDayForecastData.description=n[e].weather[0].description,this.sevenDayForecastData.minTemperature=Math.floor(1.8*(n[e].temp.min-273.15))+32+"\u2109",this.sevenDayForecastData.maxTemperature=Math.floor(1.8*(n[e].temp.max-273.15))+32+"\u2109",this.weekdayDataArray.push(this.sevenDayForecastData);this.router.navigate(["/sevenDayForecast"],{state:{daily:this.currentCityWeather,weekdays:this.weekdayDataArray}}),this.weekdayDataArray=[]},t=>{console.log(t)})})})}getData(){return o(this,void 0,void 0,function*(){sessionStorage.setItem("searchInitiated","false"),sessionStorage.setItem("dataRetrieved","false"),sessionStorage.getItem("toggleControl");const t=sessionStorage.getItem("weatherData"),n=sessionStorage.getItem("dataRetrieved");if(t){sessionStorage.setItem("dataRetrieved","true");const e=JSON.parse(n),a=JSON.parse(t);this.currentCityWeather.cityNcode=a.daily.cityNcode,this.currentCityWeather.weather=a.daily.weather,this.currentCityWeather.humidity="Humidity: "+a.daily.humidity,this.currentCityWeather.windSpeed="Wind Speed: "+a.daily.windSpeed,this.currentCityWeather.highTemp=a.daily.highTemp,this.currentCityWeather.lowTemp=a.daily.lowTemp,this.currentCityWeather.description=a.daily.description,this.data=e}else this.data=null})}}var m=e("bbP1"),p=e("iInd"),b=a.rb({encapsulation:0,styles:[[".current-weather-container[_ngcontent-%COMP%]{width:-webkit-max-content;width:max-content;color:#fff;font-style:italic;height:-webkit-max-content;height:max-content;margin:1rem auto 0;display:flex}.current-weather-container-2[_ngcontent-%COMP%]{width:-webkit-max-content;width:max-content;margin:auto;background:linear-gradient(0deg,hsla(0,0%,100%,.3686274509803922),rgba(77,104,140,.8470588235294118),rgba(77,104,140,.8470588235294118));padding:1.5rem;border:.1rem solid #eee8aa;border-radius:1rem}.current-weather-container-2[_ngcontent-%COMP%]   .current-weather[_ngcontent-%COMP%]{width:-webkit-max-content;width:max-content;color:#fff;font-style:italic;height:-webkit-max-content;height:max-content;margin:0 auto;display:flex}.current-weather-container-2[_ngcontent-%COMP%]   .current-weather[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .current-weather-container-2[_ngcontent-%COMP%]   .current-weather[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.7rem;margin:auto auto auto 1rem;text-shadow:#aaa 2px 2px 2px}.current-weather-details[_ngcontent-%COMP%]{color:#fff;font-style:italic;height:-webkit-max-content;height:max-content;margin:auto;width:-webkit-max-content;width:max-content;display:flex}.current-weather-details[_ngcontent-%COMP%]   .humidity[_ngcontent-%COMP%], .current-weather-details[_ngcontent-%COMP%]   .wind[_ngcontent-%COMP%]{font-size:1.2rem;width:-webkit-max-content;width:max-content;text-align:center;display:flex}.day-container[_ngcontent-%COMP%]{font-size:1.2rem;color:#fff;font-style:italic;width:-webkit-max-content;width:max-content;margin:0 auto;display:flex;height:-webkit-max-content;height:max-content}.humidity[_ngcontent-%COMP%], .wind[_ngcontent-%COMP%]{padding:0 .5rem}.temperature-container[_ngcontent-%COMP%]{font-size:1.2rem}.box[_ngcontent-%COMP%]{float:left;padding:0 4rem}.box[_ngcontent-%COMP%], .high-container[_ngcontent-%COMP%], .low-container[_ngcontent-%COMP%]{width:-webkit-max-content;width:max-content;text-align:center}.high-container[_ngcontent-%COMP%], .low-container[_ngcontent-%COMP%]{display:block}.highNlowTemp-container[_ngcontent-%COMP%]{display:flex;margin:auto;width:-webkit-max-content;width:max-content}.high-container[_ngcontent-%COMP%]   .high[_ngcontent-%COMP%], .low-container[_ngcontent-%COMP%]   .low[_ngcontent-%COMP%]{font-family:Trebuchet MS,Lucida Sans Unicode,Lucida Grande,Lucida Sans,Arial,sans-serif;font-size:1.8rem;text-shadow:#fff 1px 1px 1px}.high-container[_ngcontent-%COMP%]   .max-temp[_ngcontent-%COMP%], .low-container[_ngcontent-%COMP%]   .min-temp[_ngcontent-%COMP%]{font-size:2.3rem}.high-container[_ngcontent-%COMP%]   .high[_ngcontent-%COMP%], .high-container[_ngcontent-%COMP%]   .max-temp[_ngcontent-%COMP%]{color:#f5e8e1;text-shadow:orange 1px 1px 1px}.low-container[_ngcontent-%COMP%]   .low[_ngcontent-%COMP%], .low-container[_ngcontent-%COMP%]   .min-temp[_ngcontent-%COMP%]{color:#e0ffff;text-shadow:#00f 1px 1px 1px}.current-weather-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.4rem;margin:0;text-shadow:#aaa 2px 2px 2px}.current-weather-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.7rem;margin:auto auto auto 1rem;text-shadow:#aaa 2px 2px 2px}.current-weather-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:auto 0 auto 1rem}.current-weather-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .current-weather-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2rem;text-shadow:#000 1px 1px 1px}.current-weather-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.8rem;height:1.8rem;border:.1rem solid #eee8aa;padding:.2rem;border-radius:2rem;margin:auto 0;background-color:hsla(0,0%,100%,.781)!important}.current-weather-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{background-color:hsla(0,0%,62%,.5)!important;cursor:pointer}.search-bar-container[_ngcontent-%COMP%]{display:flex;text-align:center!important;padding:.2rem;border-radius:2rem;width:-webkit-max-content;width:max-content;transition:.5s;background-color:hsla(0,0%,100%,.5)!important;margin:1rem auto;border:.2rem solid #eee8aa}.search-bar-container[_ngcontent-%COMP%]:hover > .search-bar[_ngcontent-%COMP%]{width:6rem;border-right:.1rem solid rgba(0,0,0,.267)}.search-bar-container[_ngcontent-%COMP%]:hover > .search-bar2[_ngcontent-%COMP%]{width:2rem}.search-bar-container[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]{margin:auto 0 auto auto}.search-bar-container[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%], .search-bar-container[_ngcontent-%COMP%]   .search-bar2[_ngcontent-%COMP%]{height:2rem;text-align:center;border:none;background:none;outline:none;float:left;padding:0;color:#000;font-size:1rem;transition:.4s;line-height:40px;width:0}.search-bar-container[_ngcontent-%COMP%]   .search-bar2[_ngcontent-%COMP%]{margin:auto auto auto 0}.search-bar-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:auto 0;display:flex;justify-content:center;align-items:center;background-color:transparent!important;border:.1rem solid transparent;border-radius:2rem}.search-bar-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{cursor:pointer}.search-bar-container[_ngcontent-%COMP%]   Img[_ngcontent-%COMP%]{width:2rem;height:2rem;padding:.2rem}"]],data:{}});function w(t){return a.Mb(0,[(t()(),a.tb(0,0,null,null,27,"div",[["class","current-weather-container-2"]],null,null,null,null,null)),(t()(),a.tb(1,0,null,null,4,"div",[["class","current-weather"]],null,null,null,null,null)),(t()(),a.tb(2,0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),a.Kb(3,null,["",""])),(t()(),a.tb(4,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),a.Kb(5,null,[" ",""])),(t()(),a.tb(6,0,null,null,21,"div",[["class","temperature-container"]],null,null,null,null,null)),(t()(),a.tb(7,0,null,null,9,"div",[["class","current-weather-details"]],null,null,null,null,null)),(t()(),a.tb(8,0,null,null,2,"div",[["class","humidity"]],null,null,null,null,null)),(t()(),a.tb(9,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),a.Kb(10,null,[""," /"])),(t()(),a.tb(11,0,null,null,2,"div",[["class","wind"]],null,null,null,null,null)),(t()(),a.tb(12,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),a.Kb(13,null,[""," /"])),(t()(),a.tb(14,0,null,null,2,"div",[["class","day-container"]],null,null,null,null,null)),(t()(),a.tb(15,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),a.Kb(16,null,["",""])),(t()(),a.tb(17,0,null,null,10,"div",[["class","highNlowTemp-container"]],null,null,null,null,null)),(t()(),a.tb(18,0,null,null,4,"div",[["class","high-container box"]],null,null,null,null,null)),(t()(),a.tb(19,0,null,null,1,"p",[["class","high"]],null,null,null,null,null)),(t()(),a.Kb(-1,null,["High"])),(t()(),a.tb(21,0,null,null,1,"p",[["class","max-temp"]],null,null,null,null,null)),(t()(),a.Kb(22,null,["",""])),(t()(),a.tb(23,0,null,null,4,"div",[["class","low-container box"]],null,null,null,null,null)),(t()(),a.tb(24,0,null,null,1,"p",[["class","low"]],null,null,null,null,null)),(t()(),a.Kb(-1,null,["Low"])),(t()(),a.tb(26,0,null,null,1,"p",[["class","min-temp"]],null,null,null,null,null)),(t()(),a.Kb(27,null,["",""]))],null,function(t,n){var e=n.component;t(n,3,0,e.currentCityWeather.city),t(n,5,0,e.currentCityWeather.weather),t(n,10,0,e.currentCityWeather.humidity),t(n,13,0,e.currentCityWeather.windSpeed),t(n,16,0,e.currentCityWeather.description),t(n,22,0,e.currentCityWeather.highTemp),t(n,27,0,e.currentCityWeather.lowTemp)})}function y(t){return a.Mb(0,[(t()(),a.tb(0,0,null,null,4,"div",[["class","search-bar-container"]],null,null,null,null,null)),(t()(),a.tb(1,0,[["input",1]],null,0,"input",[["class","search-bar level-item"],["placeholder","Washington"],["title","City Name"],["type","text"]],null,null,null,null,null)),(t()(),a.tb(2,0,[["input2",1]],null,0,"input",[["class","search-bar2 level-item"],["placeholder","DC"],["title","State Abbreiv."],["type","text"]],null,null,null,null,null)),(t()(),a.tb(3,0,null,null,1,"button",[["type","button"]],null,[[null,"click"]],function(t,n,e){var r=!0;return"click"===n&&(r=!1!==t.component.searchedCity(a.Fb(t,1).value,a.Fb(t,2).value)&&r),r},null,null)),(t()(),a.tb(4,0,null,null,0,"img",[["alt",""],["srcset",""]],[[8,"src",4]],null,null,null,null)),(t()(),a.cb(16777216,null,null,1,null,w)),a.sb(6,16384,null,0,i.i,[a.O,a.L],{ngIf:[0,"ngIf"]},null)],function(t,n){t(n,6,0,null!==n.component.data)},function(t,n){t(n,4,0,n.component.searchImg)})}function C(t){return a.Mb(0,[(t()(),a.tb(0,0,null,null,1,"app-dashboard",[],null,null,null,y,b)),a.sb(1,638976,null,0,g,[m.a,c.a,u.a,p.k],null,null)],function(t,n){t(n,1,0)},null)}var f=a.pb("app-dashboard",g,C,{},{},[]),M=e("s7LF");class x{}var O=a.qb(r,[],function(t){return a.Db([a.Eb(512,a.j,a.V,[[8,[l.a,f]],[3,a.j],a.x]),a.Eb(4608,i.k,i.j,[a.u]),a.Eb(4608,M.c,M.c,[]),a.Eb(1073742336,i.b,i.b,[]),a.Eb(1073742336,M.b,M.b,[]),a.Eb(1073742336,M.a,M.a,[]),a.Eb(1073742336,p.o,p.o,[[2,p.t],[2,p.k]]),a.Eb(1073742336,x,x,[]),a.Eb(1073742336,r,r,[]),a.Eb(1024,p.i,function(){return[[{path:"",component:g}]]},[])])})}}]);