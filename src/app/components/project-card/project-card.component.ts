import { Component, Input, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Project } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectCardComponent implements AfterViewInit, OnDestroy {
  @Input() project!: Project;
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;

  private swiper!: Swiper;
  private lightbox!: PhotoSwipeLightbox;

  ngAfterViewInit(): void {
    // PhotoSwipe will be initialized on demand when images are clicked
    console.log('Component ready, PhotoSwipe will initialize when images are clicked');
  }

  ngOnDestroy(): void {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
    if (this.lightbox) {
      this.lightbox.destroy();
    }
  }

  openPhotoSwipe(event: Event, index: number): void {
    event.preventDefault();
    
    // Create image data array for PhotoSwipe
    const images = this.project.images.map(image => ({
      src: image,
      width: 1200,
      height: 800,
      alt: this.project.title
    }));

    // Open PhotoSwipe programmatically
    const lightbox = new PhotoSwipeLightbox({
      dataSource: images,
      pswpModule: PhotoSwipe,
      padding: { top: 40, bottom: 40, left: 100, right: 100 },
      bgOpacity: 0.9,
    });

    lightbox.init();
    lightbox.loadAndOpen(index);
  }
  
  
    private initSwiper(): void {
    // Configure Swiper modules
    Swiper.use([Navigation, Pagination, Autoplay]);

    this.swiper = new Swiper(this.swiperContainer.nativeElement, {
      modules: [Navigation, Pagination, Autoplay],
      slidesPerView: 1,
      spaceBetween: 10,
      loop: this.project.images.length > 1,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: Math.min(2, this.project.images.length),
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: Math.min(2, this.project.images.length),
          spaceBetween: 20,
        },
      },
    });
  }
}