import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import { MapService } from '../map.service';
import { GeoJson, FeatureCollection } from '../map';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.scss']
})
export class MapBoxComponent implements OnInit{
  static ionViewDidEnter() {
    this.buildMap()
  }
  static buildMap() {
    var map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
     style: 'mapbox://styles/mapbox/streets-v10',
     center: [-6.3066, 53.3135],
     zoom: 16,
     pitch: 80,
     minZoom: 5, //restrict map zoom - buildings not visible beyond 13
     maxZoom: 15,
     container: 'map',

    
   });
   var canvas = map.getCanvasContainer();

   // an arbitrary start will always be the same
   // only the end or destination will change
   var start = [-6.3066, 53.3135];

   var mid = [-6.3056, 53.3105];

   function getRoute(end) {
    // make a directions request using cycling profile
    // an arbitrary start will always be the same
    // only the end or destination will change
    var start = [-6.3066, 53.3135];
    var url = 'https://api.mapbox.com/directions/v5/mapbox/cycling/' + start[0] + ',' + start[1] + ';' + mid[0] + ',' + mid[1] + ';'  + end[0] + ',' + end[1] + '?steps=true&geometries=geojson&access_token=' + environment.mapbox.accessToken;
  
    // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    var req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onload = function() {
      var json = JSON.parse(req.response);
      var data = json.routes[0];
      var route = data.geometry.coordinates;
      var geojson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route
        }
      };

      var instructions = document.getElementById('instructions');
      var steps = data.legs[0].steps;

      var tripInstructions = [];
      for (var i = 0; i < steps.length; i++) {
        tripInstructions.push('<br><li>' + steps[i].maneuver.instruction) + '</li>';
        instructions.innerHTML = '<br><span class="duration">Trip duration: ' + Math.floor(data.duration / 60) + ' min  </span>' + tripInstructions;
      }


      // if the route already exists on the map, reset it using setData
      if (map.getSource('route')) {
        map.getSource('route').setData(geojson);
      } else { // otherwise, make a new request
        map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates: geojson
              }
            }
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#3887be',
            'line-width': 5,
            'line-opacity': 0.75
          }
        });
      }
      // add turn instructions here at the end
    };
    req.send();
  }
  
  map.on('load', function() {
    // make an initial directions request that
    // starts and ends at the same location
    //getRoute(start);
  
    // Add starting point to the map
    map.addLayer({
      id: 'point',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: start
            }
          }
          ]
        }
      },
      paint: {
        'circle-radius': 8,
        'circle-color': '#3887be'
      }
    });
    map.addLayer({
      id: 'point',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates:  mid
            }
          }
          ]
        }
      },
      paint: {
        'circle-radius': 8,
        'circle-color': '#3887be'
      }
    })
    // this is where the code from the next step will go
    map.on('click', function(e) {
      var coordsObj = e.lngLat;
      canvas.style.cursor = '';
      var coords = Object.keys(coordsObj).map(function(key) {
        return coordsObj[key];
      });
      var end = {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: coords
          }
        }
        ]
      };
      if (map.getLayer('end')) {
        map.getSource('end').setData(end);
      } else {
        map.addLayer({
          id: 'end',
          type: 'circle',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [{
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: coords
                }
              }]
            }
          },
          paint: {
            'circle-radius': 10,
            'circle-color': '#f30'
          }
        });
      }
      getRoute(coords);
    });
    
  });
    map.addControl(new mapboxgl.NavigationControl());
   

    map.on('load', function() {
      map.addLayer({
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
              'fill-extrusion-color': '#aaa',
              'fill-extrusion-height': {
                  'type': 'identity',
                  'property': 'height'
              },
              'fill-extrusion-base': {
                  'type': 'identity',
                  'property': 'min_height'
              },
              'fill-extrusion-opacity': .6
          }
      });
  }); 
  
  }



  // data
  source: any;
  markers: any;

  constructor(private mapService: MapService) {
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 

 

  
}