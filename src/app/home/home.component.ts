import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../produit/service/produit.service";
import * as L from 'leaflet';
import {SocieteService} from "../societe/service/societe.service";
import {DatePipe} from "@angular/common";
import {TokenService} from "../services/token.service";

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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe]

})
export class HomeComponent implements OnInit {
  public reference;
  public produit;
  public loading = false;
  public errors = null;
  public error = null;
  public topSocietes;
  public societes;
  public loggedIn = false;

  private map;
  private markers;

  constructor(private produitService: ProduitService,
              private societeService: SocieteService,
              private datePipe: DatePipe,
              private token: TokenService) {
    Window["myComponent"] = this
  }

  ngOnInit(): void {
    if (this.token.loggedIn()) {
      this.loggedIn = true;
    }
    this.loading = true;
    var myDate = this.datePipe.transform(new Date(), 'yyyy-MM');
    this.societeService.societeTopSearch({'top': 10, 'date_top': myDate + '-00'}).subscribe(
      data => this.handleGetTopSocieteResponse(data),
      error => this.handleGetSocieteError(error)
    );
    return this.societeService.societeMapSearch({}).subscribe(
      data => this.handleGetSocieteResponse(data),
      error => this.handleGetSocieteError(error)
    );
  }

  public handleGetTopSocieteResponse(data): any {
    this.error = null;
    this.errors = null;
    this.topSocietes = data;
    this.loading = false;
  }

  public handleGetSocieteResponse(data): any {
    this.error = null;
    this.errors = null;
    this.societes = data;
    this.loading = false;
    this.initMap();
  }

  public handleGetSocieteError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

  private initMap(): void {
    this.map = L.map('mapid', {
      center: [34.566963, 9.847406],
      zoom: 7
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    this.markers = L.markerClusterGroup();
    tiles.addTo(this.map);

    for (const societe of this.societes) {
      if (societe.latitude && societe.longitude) {
        var marker = L.marker([societe.latitude, societe.longitude]).bindPopup(this.popupHtml(societe));
        this.markers.addLayer(marker);
        this.map.addLayer(this.markers);

      }
    }

  }

  public popupHtml(societe) {
    return '<div class="card-body bg-light"><div class="media"><div class="avatar avatar-3xl"><img class="rounded-circle" src="' + societe.image_societe_path + '" alt="" /></div>' +
      '<div class="media-body ml-2"><h6 class="mb-0"><a href="/societe/view/' + societe.id + '">' + societe.nom + '</a></h6><a href="/societe/view/' + societe.id + '" class="btn btn-light btn-sm py-0 mt-1 border"><span class="far fa-eye" data-fa-transform="shrink-5 left-2"></span><span class="fs--1">Afficher</span></a><hr class="border-bottom-0 border-dashed" />' +
      '<a href="https://www.google.fr/maps/dir/' + societe.latitude + ',' + societe.longitude + '/@' + societe.latitude + ',' + societe.longitude + ',18z" class="btn btn-light btn-sm py-0 mt-1 border" target="_blank" style="display: flex;"><span class="fas fa-map-marked-alt" data-fa-transform="shrink-5 left-2"></span><span class="fs--1">Itinéraires</span></a></div>'
      + '</div></div>'
  }

  public handleGetProduitResponse(data): any {
    this.error = null;
    this.errors = null;
    this.produit = data;
    this.loading = false;
  }

  public handleGetProduitError(error): any {
    this.loading = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

  public searchProduit() {
    this.loading = true;
    return this.produitService.getProduitByReference(this.reference).subscribe(
      data => this.handleGetProduitResponse(data),
      error => this.handleGetProduitError(error)
    );
  }

}
