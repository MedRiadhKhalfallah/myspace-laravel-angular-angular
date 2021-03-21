import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SocieteService} from "../service/societe.service";
import * as L from "leaflet";
import {NewProduitService} from "../../new-produit/service/new-produit.service";
import {ProduitService} from "../../produit/service/produit.service";

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
export class SocieteViewComponent implements OnInit,OnChanges {

  @Input() societe;
  public error;
  public errors;
  public loading = false;
  public user;
  private map;
  private markers;
  private sousCategory_id;
  private societeId;
  private newProduitList = [];
  private loadingNewProduit = false;
  public loadingProduit = false;
  public produit;
  public reference;
  public first = true;
  public loadingShowMore = false;
  public searchobject = {'limit': 10, 'offset': 0,'sousCategory_id':''};
  public disableShowMore = false;

  constructor(private route: ActivatedRoute,
              private societeService: SocieteService,
              private activatedRoute: ActivatedRoute,
              private newProduitService: NewProduitService,
              private produitService: ProduitService,
  ) {
    Window["myComponent"] = this
  }

  ngOnInit(): void {
    this.societe = {};
    this.societeId = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe(params => {
      this.sousCategory_id = params['sousCategoryId'];
      this.searchobject.sousCategory_id=this.sousCategory_id;
      this.loadnewProduitList(this.searchobject);
    });
    if (this.societeId) {
      this.loading = true;
      return this.societeService.getSocieteById(this.societeId).subscribe(
        data => this.handleGetSocieteResponse(data),
        error => this.handleGetSocieteError(error)
      );

    }

  }

  public handleGetSocieteResponse(data): any {
    this.error = null;
    this.errors = null;
    this.societe = data;
    console.log(!this.sousCategory_id);
    if (!this.sousCategory_id) {
      this.newProduitList = this.societe.newProduits;
    }

    this.loading = false;
    this.initMap();
  }

  public handleGetNewProduitResponse(data): any {
    this.first = false;
    if (this.loadingShowMore) {
      this.newProduitList = this.newProduitList.concat(data);
    } else {
      this.newProduitList = data;
    }
    if (data.length < this.searchobject.limit) {
      this.disableShowMore = true;
    } else {
      this.disableShowMore = false;
    }
    this.loadingShowMore = false;

    this.loadingNewProduit = false;
  }

  public showMore(): any {
    this.loadingShowMore = true;
    this.searchobject.offset = this.newProduitList.length;
    this.loadnewProduitList(this.searchobject);
  }

  public loadnewProduitList(data): any {
    this.loadingNewProduit = true;
    data.societe_id=this.societeId;
    return this.newProduitService.newProduitSearchWithCriteria(data).subscribe(
      data => this.handleGetNewProduitResponse(data),
      error => this.handleGetSocieteError(error)
    );
  }

  public handleGetSocieteError(error): any {
    this.loading = false;
    this.loadingShowMore = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("hereeeee");
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

  public searchProduit() {
    this.loadingProduit = true;
    return this.produitService.getProduitByReference(this.reference).subscribe(
      data => this.handleGetProduitResponse(data),
      error => this.handleGetProduitError(error)
    );
  }
  public handleGetProduitResponse(data): any {
    this.error = null;
    this.errors = null;
    this.produit = data;
    this.loadingProduit = false;
  }

  public handleGetProduitError(error): any {
    this.loadingProduit = false;
    this.error = error.error.message;
    this.errors = error.error.errors;
  }

}
