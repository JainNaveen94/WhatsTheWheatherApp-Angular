import { Component, Input } from '@angular/core';

import {WheatheData} from '../whetherdata.model';

@Component({
  selector: 'app-mainsection',
  templateUrl: './mainsection.component.html',
  styleUrls: ['./mainsection.component.css']
})

export class MainsectionComponent {

  @Input() weatherReport: WheatheData[] = [];


  

}
