import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SocieteService} from "../service/societe.service";
import * as L from "leaflet";
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

@Component({
  selector: 'app-societe-view',
  templateUrl: './societe-view.component.html',
  styleUrls: ['./societe-view.component.css']
})
export class SocieteViewComponent implements OnInit {

  @Input() societe;
  public error;
  public errors;
  public loading = false;
  public user;
  private map;
  private markers;

  constructor(private route: ActivatedRoute, private societeService: SocieteService) {
    Window["myComponent"] = this
  }

  ngOnInit(): void {
    this.societe = {};
    var societeId = this.route.snapshot.paramMap.get('id');
    if (societeId) {
      this.loading = true;
      return this.societeService.getSocieteById(societeId).subscribe(
        data => this.handleGetSocieteResponse(data),
        error => this.handleGetSocieteError(error)
      );

    }

  }

  public handleGetSocieteResponse(data): any {
    this.error = null;
    this.errors = null;
    this.societe = data;
    this.loading = false;
    this.initMap();
  }

  public handleGetSocieteError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  private initMap(): void {
    this.map = L.map('mapid', {
      center: [this.societe.latitude, this.societe.longitude],
      zoom: 10
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    this.markers = L.markerClusterGroup();
    tiles.addTo(this.map);

      if (this.societe.latitude && this.societe.longitude) {
        var marker = L.marker([this.societe.latitude, this.societe.longitude]).bindPopup(this.popupHtml(this.societe));
        this.markers.addLayer(marker);
        this.map.addLayer(this.markers);

      }


  }

  public popupHtml(societe) {
    return '<div class="card-body bg-light"><div class="media"><div class="avatar avatar-3xl"><img class="rounded-circle" src="' + societe.image_societe_path + '" alt="" /></div>' +
      '<div class="media-body ml-2"><h6 class="mb-0"><a href="/societe/view/' + societe.id + '">' + societe.nom + '</a></h6><a href="/societe/view/' + societe.id + '" class="btn btn-light btn-sm py-0 mt-1 border"><span class="far fa-eye" data-fa-transform="shrink-5 left-2"></span><span class="fs--1">Afficher</span></a><hr class="border-bottom-0 border-dashed" />' +
      '<a href="https://www.google.fr/maps/dir/' + societe.latitude + ',' + societe.longitude + '/@' + societe.latitude + ',' + societe.longitude + ',18z" class="btn btn-light btn-sm py-0 mt-1 border" target="_blank" style="display: flex;"><span class="fas fa-map-marked-alt" data-fa-transform="shrink-5 left-2"></span><span class="fs--1">Itinéraires</span></a></div>'
      + '</div></div>'
  }

}
