import { Injectable, ɵConsole, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {
  
private url:string ="http://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
private authKey:string="&APPID=d357f6a0393d21059e9e3747b71d6f3f";

  constructor(public http: HttpClient){}

  getWhetherFromAPI(inputCity: string){
    return this.http.get(this.url + inputCity + this.authKey);
  }
}
