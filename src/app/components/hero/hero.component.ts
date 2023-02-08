import { Component } from '@angular/core';
import { Top10Interface } from 'src/app/models/top10.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  top10: Top10Interface[];
  constructor(){
    this.top10 =[
      {
        imgTop: '/assets/numerostop10/1.png',
        img: '/assets/Top10/1-papel.webp'
      },{
        imgTop: '/assets/numerostop10/2.png',
        img: '/assets/Top10/2-reina.webp'
      },{
        imgTop: '/assets/numerostop10/3.png',
        img: '/assets/Top10/3-titanes.webp'
      },{
        imgTop: '/assets/numerostop10/4.png',
        img: '/assets/Top10/4-lostinspace.webp'
      },{
        imgTop: '/assets/numerostop10/5.png',
        img: '/assets/Top10/5-dondecaben.webp'
      }]
  }
}
