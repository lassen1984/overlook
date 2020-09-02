import { Component } from '@angular/core';

@Component({ selector: 'ngbd-carousel-basic', templateUrl: './slider.component.html' })
export class SliderComponent {
  // images = ['center-square-wroclaw', 'city-houses-reykjavik', 'fishmarket-hamborg', 'frankfurt-skyline-germany'].map((n) => `assets/img/${n}.jpg`);

  imageObject: Array<object> = [{
    image: '../../../assets/img/center-square-wroclaw.jpg', // Support base64 image
    thumbImage: '../../../assets/img/center-square-wroclaw.jpg', // Support base64 image
    // title: 'Image title', //Optional: You can use this key if want to show image with title
    // alt: 'Image alt' //Optional: You can use this key if want to show image with alt
},{
    image: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
    thumbImage: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
    // title: 'Image title', //Optional: You can use this key if want to show image with title
    // alt: 'Image alt' //Optional: You can use this key if want to show image with alt
}



];

}

