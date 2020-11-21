import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-produit-view',
  templateUrl: './produit-view.component.html',
  styleUrls: ['./produit-view.component.css']
})
export class ProduitViewComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

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

  constructor() {
  }

  ngOnInit(): void {
    this.produit = {};
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
        imageAutoPlayInterval:3000,
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

    this.galleryImages = [
      {
        small: '../assets/img/products/1.jpg',
        medium: '../assets/img/products/1.jpg',
        big: '../assets/img/products/1.jpg'
      },
      {
        small: '../assets/img/products/2.jpg',
        medium: '../assets/img/products/2.jpg',
        big: '../assets/img/products/2.jpg'
      },
      {
        small: '../assets/img/products/3.jpg',
        medium: '../assets/img/products/3.jpg',
        big: '../assets/img/products/3.jpg'
      },
      {
        small: '../assets/img/products/4.jpg',
        medium: '../assets/img/products/4.jpg',
        big: '../assets/img/products/4.jpg'
      },
      {
        small: '../assets/img/products/3.jpg',
        medium: '../assets/img/products/3.jpg',
        big: '../assets/img/products/3.jpg'
      },
      {
        small: '../assets/img/products/3.jpg',
        medium: '../assets/img/products/3.jpg',
        big: '../assets/img/products/3.jpg'
      },
      {
        small: '../assets/img/products/3.jpg',
        medium: '../assets/img/products/3.jpg',
        big: '../assets/img/products/3.jpg'
      },
      {
        small: '../assets/img/products/3.jpg',
        medium: '../assets/img/products/3.jpg',
        big: '../assets/img/products/3.jpg'
      }
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
