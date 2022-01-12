import { Component, OnInit } from '@angular/core';
import { MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  zoom = 12
  center!: google.maps.LatLngLiteral
  marker = {
    position: { lat: 40.722400, lng: -74.04740 },
 }
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 30,
    minZoom: 8,
  }
  markers: MapMarker[]  = [];
  constructor() {
   }
 
  ngOnInit(): void {
  
    this.center = {
      lat: 40.722538 ,
      lng: -74.047377,
     
    }
   
  }
  zoomIn() {
    if (this.options.maxZoom) {
      if (this.zoom < this.options.maxZoom) this.zoom++

    }
  }

  zoomOut() {
    if (this.options.minZoom) {
      if (this.zoom > this.options.minZoom) this.zoom--

    }
  }
}
