import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sightSpectrum';
  carouselOptions = {
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    margin: 25,
    nav: true,
    navText: [`<div class='nav-btn prev-slide'><img src="https://img.icons8.com/fluent-systems-filled/24/000000/long-arrow-left.png"/></div>`, `<div class='nav-btn next-slide'><img src="https://img.icons8.com/fluent-systems-filled/24/000000/long-arrow-right.png"/></div>`],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 3,
        nav: true,
        loop: true
      },
      1500: {
        items: 3,
        nav: true,
        loop: true
      }
    }
  }

  images = [
    {
      image: "http://via.placeholder.com/300x250"
    },
    {
      image: "http://via.placeholder.com/300x250"
    },
    { 
      image: "http://via.placeholder.com/300x250"
    },
    {
      image: "http://via.placeholder.com/300x250"
    },
    {
      image: "http://via.placeholder.com/300x250"
    },
    {
      image: "http://via.placeholder.com/300x250"
    },
    {
      image: "http://via.placeholder.com/300x250"
    },
    {
      image: "http://via.placeholder.com/300x250"
    },
    {
      image: "http://via.placeholder.com/300x250"
    }
  ]


}
