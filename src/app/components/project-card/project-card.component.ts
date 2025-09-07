import { Component, Input, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Project } from '../../services/project.service';
import { CommonModule } from '@angular/common';
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
  modalActive = false;
  currentModalImage = '';
  currentModalIndex = 0;

  ngAfterViewInit(): void {
    
  }

  ngOnDestroy(): void {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }
    // Restore body overflow
    document.body.style.overflow = 'auto';
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

  openImageModal(image: string, index: number): void {
    this.currentModalImage = image;
    this.currentModalIndex = index;
    this.modalActive = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.modalActive = false;
    document.body.style.overflow = 'auto';
  }

  nextModalImage(): void {
    if (this.currentModalIndex < this.project.images.length - 1) {
      this.currentModalIndex++;
      this.currentModalImage = this.project.images[this.currentModalIndex];
    }
  }

  previousModalImage(): void {
    if (this.currentModalIndex > 0) {
      this.currentModalIndex--;
      this.currentModalImage = this.project.images[this.currentModalIndex];
    }
  }
}