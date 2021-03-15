import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Injectable,
} from "@angular/core";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
//import * as mapboxgl from 'mapbox-gl';
import { MapService } from "../map.service";
import { GeoJson, FeatureCollection } from "../map";
import { environment } from "src/environments/environment";
import { CreateTripPage } from "src/app/trips/create-trip/create-trip.page";
import { AngularFireDatabase } from "@angular/fire/database";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import MapboxDirections from "@mapbox/mapbox-gl-directions";
import { ReccomenderService } from '../../services/reccomender/reccomender.service';
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { resolve } from "path";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
@Component({
  selector: "map-box",
  templateUrl: "./map-box.component.html",
  styleUrls: ["./map-box.component.scss"],
})
export class MapBoxComponent implements OnInit {
  // data
  recdata :any;
  source: any;
  markers: any;
  map: mapboxgl.Map;
  constructor(private mapService: MapService,public ReccomenderService: ReccomenderService,private fireS:AngularFirestore) {}
  ngOnInit(): void {
  }
  buildMap(places,aArrayLong,aArrayLat) {
    //create a list of the possible coordinates
    for( i = 0; i<5 ; i++){
      console.log(aArrayLong[i])
      console.log(aArrayLat[i])
    }

    var map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [-6.3066, 53.3135],
      zoom: 16,
      pitch: 80,
      minZoom: 5, //restrict map zoom - buildings not visible beyond 13
      maxZoom: 15,
      container: "map",
    });

    map.addControl(
      new MapboxGeocoder({
        accessToken: environment.mapbox.accessToken,
        mapboxgl: mapboxgl,
      })
    );
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );

    map.addControl(new mapboxgl.NavigationControl());
    var canvas = map.getCanvasContainer();

    var startCoords = [-6.3066, 53.3135];
    var midCoords = [-6.3056, 53.3105];
    var endCoords = [-6.3046, 53.3105];
    var recCoordsLong = []
    var recCoordsLat = []
    var recArr =[]
    
    var i/*
    for( i = 0; i<5 ; i++){
      //console.log(this.ReccomenderService.getCoords('Aalborg Townhall').then(res=>this.coords=res,data => console.log(data)))
       this.recdata = this.ReccomenderService.getCoords('Aalborg Townhall').subscribe(data => {
        console.log(data[0]);
        recCoordsLong[i] = data[0].longitude
        recCoordsLat[i] = data[0].latitude
        console.log("buildmap lat" + recCoordsLat[i])
        console.log("buildmap long" + recCoordsLong[i])
        //getRoute(startCoords, endCoords,recArr,recCoordsLat,recCoordsLong)
       })}*/
    /*
    for( i = 0; i<5 ; i++){
        //console.log(this.ReccomenderService.getCoords('Aalborg Townhall').then(res=>this.coords=res,data => console.log(data)))
         this.recdata = this.ReccomenderService.getCoords('Aalborg Townhall').subscribe(data => {
          console.log(data[0]);
          recCoordsLong[i] = data[0].longitude
          recCoordsLat[i] = data[0].latitude
          console.log("buildmap lat" + recCoordsLat[i])
          console.log("buildmap long" + recCoordsLong[i])
          this.fireS.collection('featuresrec/')
          //.add(Object.apply(data[0]))
          .add({
            accessibility: data[0].accessibility,
            address: data[0].address,
            alt: data[0].alt,
            article: data[0].article,
            checkIn: data[0].checkIn,
            checkOut: data[0].checkOut,
            description: data[0].description,
            directions: data[0].directions,
            email: data[0].email,
            fax: data[0].fax,
            hours: data[0].hours,
            image: data[0].image,
            lastEdit: data[0].lastEdit,
            latitude: data[0].latitude,
            longitude: data[0].longitude,
            phone: data[0].phone,
            price: data[0].price,
            title: data[0].title,
            tollFree: data[0].tollFree,
            type: data[0].type,
            url: data[0].url,
            wifi: data[0].wifi,
            wikidata: data[0].wikidata,
            wikipedia: data[0].wikipedia,
          })
        })
      }*/
      

      /*
      console.log(this.recdata)
      for(i=0; i<10; i++)
      {
        
          console.log("build lat " + recCoordsLat[i])
          console.log( recCoordsLong[i])
        
      }*/
    function getRoute(start, end, recArr, CoordsLat, CoordsLong, places) {
      for(i=0; i<10; i++)
      {
        
        
          console.log("build lat " + CoordsLat[i])
          console.log("build long " + CoordsLong[i])
        
      }
      // make a directions request using cycling profile
      // an arbitrary start will always be the same
      // only the end or destination will change

      var url =
        "https://api.mapbox.com/directions/v5/mapbox/cycling/" +
        start[0] +
        "," +
        start[1] +
        ";" ;
        
      for(var j=0; j<places.length; j++){
        for(var i=0; i<recArr.length; i++)
        {
          console.log(places[j] + recArr[i])
          if(places[j] == recArr[i])
          {
            
          console.log(i+"inside get route arry" +CoordsLong[0] + CoordsLat[0])
          //if(recCoordsLong[i] != undefined)
          
          url = url.concat(CoordsLat[j]+
            "," + CoordsLong[j]+
            ";" )
          }
      }
    }
      url = url.concat(end[0] +
        "," +
        end[1] +
        "?steps=true&geometries=geojson&access_token=" +
        environment.mapbox.accessToken)

        console.log("request url: "+url)
      /*var url =
        "https://api.mapbox.com/directions/v5/mapbox/cycling/" +
        start[0] +
        "," +
        start[1] +
        ";" +
        midCoords[0] +
        "," +
        midCoords[1] +
        ";" +
        end[0] +
        "," +
        end[1] +
        "?steps=true&geometries=geojson&access_token=" +
        environment.mapbox.accessToken;*/

      // make an XHR request https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
      var req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.onload = function () {
        var json = JSON.parse(req.response);
        var data = json.routes[0];
        var route = data.geometry.coordinates;
        var geojson = {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: route,
          },
        };

        var instructions = document.getElementById("instructions");
        var steps = data.legs[0].steps;

        var tripInstructions = [];
        for (var i = 0; i < steps.length; i++) {
          tripInstructions.push("<br><li>" + steps[i].maneuver.instruction) +
            "</li>";
          instructions.innerHTML =
            '<br><span class="duration">Trip duration: ' +
            Math.floor(data.duration / 60) +
            " min  </span>" +
            tripInstructions;
        }

        // if the route already exists on the map, reset it using setData
        if (map.getSource("route")) {
          map.getSource("route").setData(geojson);
        } else {
          // otherwise, make a new request
          map.addLayer({
            id: "route",
            type: "line",
            source: {
              type: "geojson",
              data: {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "LineString",
                  coordinates: geojson,
                }, 
              },
            },
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#3887be",
              "line-width": 5,
              "line-opacity": 0.75,
            },
          });
        }
        // add turn instructions here at the end
      };
      req.send();
    }

    map.on("load", function () {

      var select;
      //listeners
      document.getElementById("startbutton").onclick = function () {
        //console.log("button start");
        select = "start";
      };
      document.getElementById("endbutton").onclick = function () {
        //console.log("button end");
        select = "end";
      };
      var i
      //for the recommneder listners
      for(i = 0;i<10;i++)
      {

            document
          .getElementById(places[i]).onclick = function (i) {

                console.log(i.target.id)
                if(recArr.includes(i.target.id))
                {
                  recArr.splice(recArr.indexOf(i),1)
                }
                else
                {
                  recArr.push(i.target.id)
                  console.log("rec  "+i.target.id)
                }
        };
      }

      map.addLayer({
        id: "mid",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: midCoords,
                },
              },
            ],
          },
        },
        paint: {
          "circle-radius": 8,
          "circle-color": "#2ae",
        },
      });
      map.on("button", function (e) {}),
        // this is where the code from the next step will go
        map.on("click", function (e) {
          var coordsObj = e.lngLat;
          canvas.style.cursor = "";
          var coords = Object.keys(coordsObj).map(function (key) {
            return coordsObj[key];
          });
          var point = {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: coords,
                },
              },
            ],
          };

          if (map.getLayer(select)) {
            console.log("start " + select);
            map.getSource(select).setData(point);
          } else {
            console.log("start " + select);
            map.addLayer({
              id: select,
              type: "circle",
              source: {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: [
                    {
                      type: "Feature",
                      properties: {},
                      geometry: {
                        type: "Point",
                        coordinates: coords,
                      },
                    },
                  ],
                },
              },
              paint: {
                "circle-radius": 10,
                "circle-color": "#f30",
              },
            });
          }
          if (select == "start") {
            console.log("radio start");
            startCoords = coords;
          }
          if (select == "end") {
            console.log("radio end");
            endCoords = coords;
          }
          console.log("start route" + startCoords);
          console.log("end route" + endCoords);
          getRoute(startCoords, endCoords, recArr,aArrayLong,aArrayLat, places);
          
            //here
      
          //end
        });
        
    });

    map.on("load", function () {
      map.addLayer({
        id: "3d-buildings",
        source: "composite",
        "source-layer": "building",
        filter: ["==", "extrude", "true"],
        type: "fill-extrusion",
        minzoom: 15,
        paint: {
          "fill-extrusion-color": "#aaa",
          "fill-extrusion-height": {
            type: "identity",
            property: "height",
          },
          "fill-extrusion-base": {
            type: "identity",
            property: "min_height",
          },
          "fill-extrusion-opacity": 0.6,
        },
      });
    });
    
  


  }
}
