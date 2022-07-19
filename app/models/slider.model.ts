export class Slide {
    image: string;
    url: string;
    title: string;
}

export class Slider {
    slides: Slide[];
    imagesPerSlide = 1;
}
