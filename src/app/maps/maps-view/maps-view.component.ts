import {Component, OnInit} from '@angular/core';
import {MapsService} from "../service/maps.service";

declare const L: any;

@Component({
  selector: 'app-maps-view',
  templateUrl: './maps-view.component.html',
  styleUrls: ['./maps-view.component.css']
})
export class MapsViewComponent implements OnInit {

  lat: string = '';
  lng: string = '';
  location: object;
  localisationsTable:number[][]=[];

  constructor(private mapsService: MapsService) {
  }

  ngOnInit(): void {
    // http://jsfiddle.net/kedar2a/5VLJU/8/
    navigator.geolocation.getCurrentPosition(position => {
    const coords = [position.coords.latitude, position.coords.longitude];


        let map = L.map('mapid').setView(coords, 11);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmlhZGg5MyIsImEiOiJja2puNTNxNngyanJhMnlsbzZtMHVjMXFhIn0._Emr0W5hM9VFBQfD-zF5ng', {
      attribution: '',
      maxZoom: 22,
      minZoom: 7,
      center: [coords],
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoicmlhZGg5MyIsImEiOiJja2puNTNxNngyanJhMnlsbzZtMHVjMXFhIn0._Emr0W5hM9VFBQfD-zF5ng'
    }).addTo(map);

    map.on('click', onMapClick);
      var markers = L.markerClusterGroup();

    function onMapClick(e) {

      var geojsonFeature = {

        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [e.latlng.lat, e.latlng.lng]
        }
      }

      var marker;

      L.geoJson(geojsonFeature, {

        pointToLayer: function(feature, latlng){

          marker = L.marker(e.latlng, {

            title: "Resource Location",
            alt: "Resource Location",
            riseOnHover: true,

          }).bindPopup("<input type='button' value='Delete this marker' class='marker-delete-button'/>");

          marker.on("popupopen", onPopupOpen);
          markers.addLayer(marker);
          map.addLayer(markers);
          return marker;
        }
      }).addTo(map);
    }
    function onPopupOpen() {

      var tempMarker = this;

      // To remove marker on click of delete button in the popup of marker
      $(".marker-delete-button:visible").click(function () {
        map.removeLayer(tempMarker);
      });
    }
        // getting all the markers at once
        function getAllMarkers() {

          var allMarkersObjArray = []; // for marker objects
          var allMarkersGeoJsonArray = []; // for readable geoJson markers

          $.each(map._layers, function (ml) {

            if (map._layers[ml].feature) {

              allMarkersObjArray.push(this);
              allMarkersGeoJsonArray.push(JSON.stringify(this.toGeoJSON()))
            }
          })

          console.log(allMarkersObjArray);
        }

// any html element such as button, div to call the function()
        $(".get-markers").on("click", getAllMarkers);


    });
    // https://github.com/Leaflet/Leaflet.markercluster
    // https://github.com/yigityuce/Leaflet.Control.Custom
/*
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => this.functionPossion(position) );
    }
    this.watchPosition();
*/

  }

  public functionPossion(position){
    {

      const coords = [position.coords.latitude, position.coords.longitude];
      let mymap = L.map('mapid').setView(coords, 11);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmlhZGg5MyIsImEiOiJja2puNTNxNngyanJhMnlsbzZtMHVjMXFhIn0._Emr0W5hM9VFBQfD-zF5ng', {
        attribution: '',
        maxZoom: 22,
        minZoom: 7,
        center: [coords],
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoicmlhZGg5MyIsImEiOiJja2puNTNxNngyanJhMnlsbzZtMHVjMXFhIn0._Emr0W5hM9VFBQfD-zF5ng'
      }).addTo(mymap);

      var markers = L.markerClusterGroup();
      var loc;
      markers.addLayer(L.marker(coords).bindPopup(
        "<button onclick='delete("+coords+")'>supp</button>"
      ).openPopup());
      markers.addLayer(L.marker([36.415362, 10.662961],{ draggable: true ,riseOnHover : true}));
      markers.addLayer(L.marker([36.462252, 10.756450]));
      mymap.addLayer(markers);
      mymap.on('click', e => {
        console.log(e.latlng); // e is an event object (MouseEvent in this case)
        this.localisationsTable.push([e.latlng.lat,e.latlng.lng]);
        markers.addLayer(L.marker(e.latlng));
        var idmark= mymap.addLayer(markers);
        console.log(markers);

      });


    }
  }

  public watchPosition() {
    let desLat = 0;
    let deslon = 0;
    let id = navigator.geolocation.watchPosition((position) => {
      if (position.coords.latitude === desLat && position.coords.longitude === deslon) {
        navigator.geolocation.clearWatch(id);
      }
    }, (err) => {
      console.log((err));
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }

  public delete(data): any {
    console.log(data);
  }
  public handleError(error): any {
  }

  public handleResponse(data): any {
    this.lat = data.latitude;
    this.lng = data.longitude;


  }

}
