import { Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

const iconRetinaUrl = '/assets/lib/leaflet/images/marker-icon-2x.png';
const iconUrl = '/assets/lib/leaflet/images/marker-icon.png';
const shadowUrl = '/assets/lib/leaflet/images/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map;
  private mapAtt;
  private markers;
  private markerstab = [];


  constructor() {
    Window["myComponent"] = this
  }

  ngOnInit(): void {
    this.initMap();
    this.mapAtt = [{'lon': 36.042583, 'lat': 9.989231}];
    for (const c of this.mapAtt) {
      const lat = c.lat;
      const lon = c.lon;
      const marker = L.marker([lon, lat]).bindPopup(this.makeCapitalPopup(c)).addTo(this.map);
    }
  }

  private initMap(): void {
    this.map = L.map('mapid', {
      center: [36.042583, 9.989231],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    this.markers = L.markerClusterGroup();
    this.map.on("click", e => {
      console.log(e.latlng); // get the coordinates
      this.mapAtt.push({'lon': e.latlng.lng, 'lat': e.latlng.lat});
      var marker = L.marker([e.latlng.lat, e.latlng.lng]).bindPopup(this.makeCapitalPopup({
        'lon': e.latlng.lng,
        'lat': e.latlng.lat
      })); // add the marker onclick
      var key = String(e.latlng.lng) + String(e.latlng.lat);
      this.markerstab.push({'key': key, 'value': marker});
      console.log(this.mapAtt);
      this.markers.addLayer(marker);
      this.map.addLayer(this.markers);

    });

    tiles.addTo(this.map);
  }

  makeCapitalPopup(data: any): string {
    var key = String(data.lon) + String(data.lat);
    // return "<button [innerHTML]='htmlData' (click)='test(" + key + ")'>delete</button>"
    var html = '<button onclick="Window.myComponent.delete(\'' + key + '\')"> test </button>';

    console.log(html);
    return html;
  }

  public delete(keyParam) {
    alert(keyParam);
    /*
              this.markers.forEach(([key, value]) => {
                alert(key);
                alert(key== key);
                if(keyParam == key )
                {
                  this.map.removeLayer(value);
                  alert("here");

                }
          });
    */
    this.markerstab.forEach(element => {
      alert(element.key);
      alert(element.key == keyParam);
      if (element.key == keyParam) {
        this.map.removeLayer(element.value);
        alert("here");

      }

    });

  }

}
