import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './weather.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  data$: Observable<any>;
  
  constructor(private artworkService: WeatherService) {}
  ngOnInit() {
  this.data$ = this.artworkService.getWeatherPayload()
  }
}
