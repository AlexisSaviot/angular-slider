import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Slide } from '../models/slider.model';

@Component({
  selector: 'app-single-slider',
  templateUrl: './single-slider.component.html',
  styleUrls: ['./single-slider.component.scss'],
})
export class SingleSliderComponent implements OnChanges {
  @Input() slides: Slide[];
  @Input() imagesPerSlide = 4;
  showNavigationArrows = false;
  showNavigationIndicators = false;

  groupSlides: any[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.hasOwnProperty('slides') && this.slides){
      const slidesNumber = this.slides.length;
      for (let i=0; i<=slidesNumber-1; i+= this.imagesPerSlide) {
        this.groupSlides.push(this.slides.splice(0, this.imagesPerSlide))
      }
    }
  }
}
