import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  highlightvideo: SafeResourceUrl | any;

  videos = [
    {
      img: '../../assets/imagesVideos/video1.png',
      src: 'https://www.youtube.com/embed/b9WUxLBnLOc?autoplay=1&mute=1&loop=1&playlist=b9WUxLBnLOc'

    },
    {
      img: '../../assets/imagesVideos/video2.png',
      src: 'https://www.youtube.com/embed/-VRR_qbsPp8?autoplay=1&mute=1&loop=1&playlist=-VRR_qbsPp8&controls=1&rel=0'

    },
    {
      img: '../../assets/imagesVideos/video3.jpg'

    },
    {
      img: '../../assets/imagesVideos/video4.jpg'

    },
    {
      img: '../../assets/imagesVideos/video5.jpg'
    },
    {
      img: '../../assets/imagesVideos/video6.jpg'

    },
    {
      img: '../../assets/imagesVideos/video7.jpg'

    },
    {
      img: '../../assets/imagesVideos/video8.jpg'

    },
    {
      img: '../../assets/imagesVideos/video9.jpg'

    },
    {
      img: '../../assets/imagesVideos/video10.jpg'

    },
    {
      img: '../../assets/imagesVideos/video11.jpg'

    },
  ]
 logos = [
  { img: '../../assets/imagesVideos/logo.jpg' },
  { img: '../../assets/imagesVideos/logo1.jpg' },
  { img: '../../assets/imagesVideos/logo2.webp' },
  { img: '../../assets/imagesVideos/logo3.webp' },
  { img: '../../assets/imagesVideos/logo4.webp' },
  { img: '../../assets/imagesVideos/logo5.png' },
  { img: '../../assets/imagesVideos/logo6.jpg' },
  { img: '../../assets/imagesVideos/logo7.jpg' },
  { img: '../../assets/imagesVideos/logo8.png' },
  { img: '../../assets/imagesVideos/logo9.avif' },
  { img: '../../assets/imagesVideos/logo10.jpg' },
  { img: '../../assets/imagesVideos/logo11.png' },
  { img: '../../assets/imagesVideos/logo12.png' },
  { img: '../../assets/imagesVideos/logo13.png' },
  { img: '../../assets/imagesVideos/logo14.png' },
  { img: '../../assets/imagesVideos/logo15.png' },
  { img: '../../assets/imagesVideos/logo16.png' },
  { img: '../../assets/imagesVideos/logo17.png' },
  { img: '../../assets/imagesVideos/logo18.png' },
  { img: '../../assets/imagesVideos/logo19.png' },
  { img: '../../assets/imagesVideos/logo20.png' },
  { img: '../../assets/imagesVideos/logo21.png' },
  { img: '../../assets/imagesVideos/logo22.png' },
  { img: '../../assets/imagesVideos/logo23.png' },
  { img: '../../assets/imagesVideos/logo24.png' },
  { img: '../../assets/imagesVideos/logo25.png' },
  { img: '../../assets/imagesVideos/logo26.png' },
  { img: '../../assets/imagesVideos/logo27.png' },
  { img: '../../assets/imagesVideos/logo28.png' },
  { img: '../../assets/imagesVideos/logo29.png' },
  { img: '../../assets/imagesVideos/logo30.png' },
  { img: '../../assets/imagesVideos/logo31.jpg' },
  { img: '../../assets/imagesVideos/logo32.jpg' },
  { img: '../../assets/imagesVideos/logo33.jpg' },
  { img: '../../assets/imagesVideos/logo34.jpg' },
  { img: '../../assets/imagesVideos/logo35.png' },
  { img: '../../assets/imagesVideos/logo36.png' },
  { img: '../../assets/imagesVideos/logo37.avif' },
  { img: '../../assets/imagesVideos/logo38.jpg' },
  { img: '../../assets/imagesVideos/logo39.png' },
  { img: '../../assets/imagesVideos/logo40.png' }
];


  cusvideos = [
    {
      img: '../../assets/imagesVideos/reel1.png',
      name: 'Ideal Kitchen',
      views: 3.5
    },
    {
      img: '../../assets/imagesVideos/reel2.png',
      name: 'Ideal Kitchen',
      views: 2.8
    },
    {
      img: '../../assets/imagesVideos/reel3.png',
      name: 'Kalingapatnam Restaurant',
      views: 5.9

    },
    {
      img: '../../assets/imagesVideos/reel4.png',
      name: 'Kalingapatnam Restaurant',
      views: 3.9

    },
    {
      img: '../../assets/imagesVideos/reel5.png',
      name: 'Poruginiti Chepalapulsu',
      views: 4.5

    },
    {
      img: '../../assets/imagesVideos/reel6.png',
      name: 'Mana Chinna Mandi',
      views: 6.3
    },

  ]
  // highlightvideo:any=this.videos[0].src
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.highlightvideo =
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/b9WUxLBnLOc?autoplay=1&mute=1&loop=1&playlist=b9WUxLBnLOc'
      );

  }

  highlight(link: any): void {
    console.log(link, 'link')
    console.log(this.highlightvideo, 'variable')
    this.highlightvideo =
      this.sanitizer.bypassSecurityTrustResourceUrl(link);
    console.log(this.highlightvideo, 'variableafter')

  }
  demotab(){

    document.getElementById('demotabhome')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
  }

}
