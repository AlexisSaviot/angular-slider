import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SingleSliderComponent } from './single-slider/single-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SingleSliderComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: []
})

export class AppModule {
  ngDoBootstrap(appRef: ApplicationRef) {
    const rootElements = document.querySelectorAll('app-root');
    rootElements.forEach(elem => appRef.bootstrap(AppComponent, elem));
  }
}
