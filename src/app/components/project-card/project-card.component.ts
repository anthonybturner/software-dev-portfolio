import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../services/project.service';
import { CommonModule } from '@angular/common';
import 'photoswipe/style.css';

declare var PhotoSwipe: any;

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectCardComponent implements OnInit {
  @Input() project!: Project;

  ngOnInit(): void {
    // Dynamically load PhotoSwipe if not already loaded
    if (typeof PhotoSwipe === 'undefined') {
      this.loadPhotoSwipeScript();
    }
  }

  private loadPhotoSwipeScript(): void {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/photoswipe@5.4.1/dist/photoswipe.umd.js';
    script.onload = () => {
      console.log('PhotoSwipe loaded');
    };
    document.body.appendChild(script);
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

    // Dynamically import PhotoSwipe
    import('photoswipe').then(({ default: PhotoSwipe }) => {
      import('photoswipe/lightbox').then(({ default: PhotoSwipeLightbox }) => {
        try {
          const lightbox = new PhotoSwipeLightbox({
            gallery: undefined,
            children: undefined,
            dataSource: images,
            pswpModule: PhotoSwipe,
          });

          lightbox.init();
          lightbox.loadAndOpen(index);
        } catch (error) {
          console.error('PhotoSwipe error:', error);
          // Fallback: open image in new tab
          window.open(this.project.images[index], '_blank');
        }
      }).catch(err => {
        console.error('Failed to load PhotoSwipe Lightbox:', err);
        window.open(this.project.images[index], '_blank');
      });
    }).catch(err => {
      console.error('Failed to load PhotoSwipe:', err);
      window.open(this.project.images[index], '_blank');
    });
  }
}