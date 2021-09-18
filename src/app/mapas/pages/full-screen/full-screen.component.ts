import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';




// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
      #mapa{
        width: 100%;
        height: 100%;
      }
    `
  ]
})
export class FullScreenComponent implements OnInit {
  constructor() { }

  ngOnInit() {

    var map = new mapboxgl.Map({
      container: "mapa",
      style: 'mapbox://styles/mapbox/streets-v11'
      });
  }

}
