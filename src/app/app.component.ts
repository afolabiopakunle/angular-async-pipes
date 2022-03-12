import { Component, OnInit, VERSION } from '@angular/core';
import { ArtworkService } from './artwork.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  data$: any;
  
  constructor(private artworkService: ArtworkService) {}
  ngOnInit() {
    this.artworkService.getWeatherPayload()
    .subscribe(response => {
      this.data$ = response
      console.log("Hi",response )
    })
  }
}
