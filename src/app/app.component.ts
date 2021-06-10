import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './components/shared/shared.scss'],
})
export class AppComponent {
  title = 'astral-weather';
  link:any;
  constructor(
  ) {}

  ngOnInit(): void {
    this.linkActivation()
  }

  ngOnChanges() {
  }

  linkActivation(){
    const data = sessionStorage.getItem('dataRetrieved')
    if(data === 'false'){
      this.link = ''
    }else if(data === 'true'){
      this.link = '/sevenDayForecast'
    }
  }

}
