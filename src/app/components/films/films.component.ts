import { Component, Input } from '@angular/core';
import { filmsInterface } from 'src/app/models/films.interface';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {

  terror: filmsInterface[];
  comedia: filmsInterface[];
  constructor(){
    this.terror = [
      {
      img: '/assets/Terror/apostol.jpg'
      },{
        img: '/assets/Terror/calleterror.jpg'
      },{
        img: '/assets/Terror/infiernoagua.webp'
      },{
        img: '/assets/Terror/insidious2.webp'
      },{
        img: '/assets/Terror/life.webp'
      }
    ]

    this.comedia = [
      {
      img: '/assets/Comedia/casi300.webp'
      },{
        img: '/assets/Comedia/cazafantasmas.webp'
      },{
        img: '/assets/Comedia/dictador.webp'
      },{
        img: '/assets/Comedia/juerga.webp'
      },{
        img: '/assets/Comedia/laterminal.webp'
      }
    ]
   }
}
