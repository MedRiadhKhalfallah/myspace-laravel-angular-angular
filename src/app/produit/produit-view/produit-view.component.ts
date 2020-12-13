import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import {ActivatedRoute, Router} from "@angular/router";
import {ProduitService} from "../service/produit.service";
import {ProfileService} from "../../profile/service/profile.service";

@Component({
  selector: 'app-produit-view',
  templateUrl: './produit-view.component.html',
  styleUrls: ['./produit-view.component.css']
})
export class ProduitViewComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  mobile = true;
  public loading = false;
  public error;
  public id;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fas fa-edit"></i>', '<i class="fas fa-edit"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  @Input() produit;

  constructor(private produitService: ProduitService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.produit === undefined) {
      this.loadData();
    }
    if (window.screen.width === 360) { // 768px portrait
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }


  public handleError(error): any {
    this.loading = false;
    this.error = error.error.message;
    if (this.error === 'User does not have the right roles.') {
      this.router.navigateByUrl('/home');
    }
  }

  public handleResponse(data): any {
    this.loading = false;
    this.produit = data;
    this.paramGallery();

  }

  public loadData(): any {
    this.loading = true;
    this.route.queryParams.subscribe(params => {
      this.id = this.route.snapshot.paramMap.get('id');
    });

    if (this.id != null) {
      this.produitService.getProduit(this.id).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
    }
  }

  public paramGallery() {
    this.galleryImages = [];
    if (this.produit) {
      this.produit.images.forEach(image => {
        this.galleryImages.push(
          {
            small: this.produit.baseUrl + '/storage/profiles_images/' + image.path,
            medium: this.produit.baseUrl + '/storage/profiles_images/' + image.path,
            big: this.produit.baseUrl + '/storage/profiles_images/' + image.path
          }
        );
      });
    }

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        previewZoom: true,
        imagePercent: 100,
        imageArrows: true,
        imageSwipe: true,
        imageAutoPlay: true,
        imageAutoPlayInterval: 3000,
        imageAutoPlayPauseOnHover: true,

      },
      // max-width 800
      {
        breakpoint: 960,
        width: '600px',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 600,
        width: '600px',
        height: '600px',
      },
    ];


  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.produit) {
      this.paramGallery();
    }
  }

}
