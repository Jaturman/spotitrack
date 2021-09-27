import { Component, OnInit } from '@angular/core';
// fíjate que la magía viene realmente de importar el objeto (nombre de este indicado en la documentacion) y el nombre de la biblioteca, simplemente.
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public wrapper: boolean = true;
  constructor(){

  }

  ngOnInit(): void {
    console.log("app.component works!");
    (mapboxgl as any).accessToken = environment.mapboxToken;
  }
}
