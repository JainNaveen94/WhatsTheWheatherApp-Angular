import { Component } from '@angular/core';

import { WheatheData } from './whetherdata.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WhatsTheWheatherApp';
  listOfWeatherReport:WheatheData[] = [];

  updateTheWeatherReportList(weatherList:WheatheData[]){
    this.listOfWeatherReport = weatherList;
    console.log(this.listOfWeatherReport);
  }


}
