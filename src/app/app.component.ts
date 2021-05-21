import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './components/shared/shared.scss'],
})
export class AppComponent {
  title = 'astral-weather';

  constructor(
  ) {}

  ngOnInit(): void {

  }

  ngOnChanges() {
  }


}
