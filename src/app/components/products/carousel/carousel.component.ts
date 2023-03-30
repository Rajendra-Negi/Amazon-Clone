import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @Input() slides: any;

  currentSlide = 0;

  constructor() {}

  ngOnInit() {
    this.autoSlide();
  }

  autoSlide() {
    if (this.currentSlide >= this.slides.length) {
      this.currentSlide = 0;
    }

    setTimeout(() => {
      this.currentSlide++;
      this.autoSlide();
    }, 5000);
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }
}
