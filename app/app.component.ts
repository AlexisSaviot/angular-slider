import { Component, ElementRef } from '@angular/core';
import { Slider } from './models/slider.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public slider: Slider;

  constructor(private elem: ElementRef) {
    this.slider = JSON.parse(this.elem.nativeElement.getAttribute('app-slider'));
    this.slider.imagesPerSlide = +this.slider.imagesPerSlide;
  }
}
