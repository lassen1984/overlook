import { Component } from '@angular/core';

@Component({ selector: 'ngbd-carousel-basic', templateUrl: './slider.component.html' })
export class SliderComponent {
  images = ['center-square-wroclaw', 'city-houses-reykjavik', 'fishmarket-hamborg', 'frankfurt-skyline-germany'].map((n) => `assets/img/${n}.jpg`);
}