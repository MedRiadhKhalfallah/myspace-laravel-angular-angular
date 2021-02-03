import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {SocieteService} from "../service/societe.service";
import * as L from 'leaflet';

const iconUrl = '/assets/lib/leaflet/images/marker-icon.png';
const shadowUrl = '/assets/lib/leaflet/images/marker-shadow.png';
const iconDefault = L.icon({
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

export interface SocieteType {
  id: number,
  nom: string,
  longitude: string,
  latitude: string,
  image_societe_path: string,
  image_coverture_name: string,
  image_coverture_path: string,
  image_societe_name: string,
  notre_code_invitation: string,
  votre_code_invitation: string,
  reference_societe: string,
  type_activite_id: string

}


@Component({
  selector: 'app-societe-map',
  templateUrl: './societe-map.component.html',
  styleUrls: ['./societe-map.component.css']
})
export class SocieteMapComponent implements OnInit {

  @Input() societe: SocieteType;
  @Output() loadDataAjout: EventEmitter<any> = new EventEmitter<any>();
  @Output() loadDataEdit: EventEmitter<any> = new EventEmitter<any>();

  public selectedFile: File = null;
  public error;
  public errors;
  public loading = false;
  public loadingUpdate = false;
  public user;

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  private map;
  private mapAtt;
  private markers;
  private markerstab = [];

  constructor(private societeService: SocieteService, private toastr: ToastrService) {
    Window["myComponent"] = this

  }

  ngOnInit(): void {
    this.loading = true;
    return this.societeService.getCurrentSociete().subscribe(
      data => this.handleGetSocieteResponse(data),
      error => this.handleGetSocieteError(error)
    );

  }

  private initMap(): void {
    if (this.societe.longitude) {
      this.map = L.map('mapid', {
        center: [Number(this.societe.latitude), Number(this.societe.longitude)],
        zoom: 13
      });
    } else {
      this.map = L.map('mapid', {
        center: [36.042583, 9.989231],
        zoom: 6
      });
    }
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Sosiete map'
    });
    if (this.societe.longitude) {
      var marker = L.marker([Number(this.societe.latitude), Number(this.societe.longitude)], {draggable: true}).addTo(this.map); // add the marker onclick
    }
    if (marker) {
      marker.on('dragend', e => {
        this.societe.longitude = e.target._latlng.lng;
        this.societe.latitude = e.target._latlng.lat;
      });
    }

    this.map.on("click", e => {
      if (!this.societe.longitude) {
        this.societe.longitude = e.latlng.lng;
        this.societe.latitude = e.latlng.lat;
        var marker = L.marker([e.latlng.lat, e.latlng.lng], {draggable: true}).addTo(this.map); // add the marker onclick
      }
    });
    tiles.addTo(this.map);
  }

  public handleGetSocieteResponse(data): any {
    this.error = null;
    this.errors = null;
    if (data) {
      this.societe = data;
    } else {
      this.societe = new class implements SocieteType {
        id: number;
        image_societe_path: string;
        latitude: string;
        longitude: string;
        nom: string;
        image_coverture_name: string;
        image_coverture_path: string;
        image_societe_name: string;
        notre_code_invitation: string;
        votre_code_invitation: string;
        reference_societe: string;
        type_activite_id: string

      };

    }
    this.loading = false;
    this.initMap();

  }

  public handleGetSocieteError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }


  public onSubmit(): any {
    this.loadingUpdate = true;
    delete this.societe.image_coverture_name;
    delete this.societe.image_coverture_path;
    delete this.societe.image_societe_name;
    delete this.societe.image_societe_path;
    if (this.societe.id) {
      delete this.societe.notre_code_invitation;
      delete this.societe.reference_societe;

      return this.societeService.updateSociete(this.societe).subscribe(
        data => this.handleSubmitResponse(data),
        error => this.handleSubmitError(error)
      );
    } else {
      return this.societeService.createSociete(this.societe).subscribe(
        data => this.handleSubmitResponse(data),
        error => this.handleSubmitError(error)
      );
    }
  }

  public handleSubmitResponse(data): any {
    this.error = null;
    this.errors = null;
    if(data.data){
      this.societe=data.data;
    }
    this.toastr.success(data.message, 'Opération effectuée avec succès',
      {
        closeButton: true,
        progressBar: true,
        progressAnimation: 'increasing'
      });
    this.loadingUpdate = false;
  }

  public handleSubmitError(error): any {
    this.loadingUpdate = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }
}
