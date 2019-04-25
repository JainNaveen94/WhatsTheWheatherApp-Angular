import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WheatherService } from '../wheather.service';
import { WheatheData } from '../whetherdata.model';

@Component({
  selector: 'app-uppersidesection',
  templateUrl: './uppersidesection.component.html',
  styleUrls: ['./uppersidesection.component.css']
})

export class UppersidesectionComponent {

  private weatherdata: any;
  private weatherResultToBeDisplay: WheatheData[] = [];
  @Output() finalWeatherData = new EventEmitter<WheatheData[]>();

  constructor(private wheatherService: WheatherService) { }

  getWhetherReport(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.wheatherService.getWhetherFromAPI(form.value.city).subscribe((data) => {
      this.weatherdata = data;
      console.log(this.weatherdata)
      this.weatherResultToBeDisplay = [];
      var j: number = 0;
      for (let i = 0; i < 5; i++) {
        const dataToBePushed: WheatheData = {
          cityName: this.weatherdata.city.name + "," + this.weatherdata.city.country,
          dateToDisplay: new Date(this.weatherdata.list[j].dt_txt).toDateString(),
          imageToDisplay: "http://openweathermap.org/img/w/" + this.weatherdata.list[j].weather[0].icon + ".png",
          humidity: this.weatherdata.list[j].main.humidity,
          description: this.weatherdata.list[j].weather[0].description,
          temperatureToDisplay: this.weatherdata.list[j].main.temp,
          wind: this.weatherdata.list[j].wind.speed,
        }
        j = j + 8;
        this.weatherResultToBeDisplay.push(dataToBePushed);
        console.log(this.weatherResultToBeDisplay);
      }
      this.finalWeatherData.emit(this.weatherResultToBeDisplay);
    }, (error) => {
      alert("!! Please Enter The Correct City Name To Get The Weather Result !!");
    });
    form.reset();
  }

}
