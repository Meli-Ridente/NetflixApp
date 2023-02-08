import { Component } from '@angular/core';
import { filmsInterface } from './models/films.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NetflixApp';
  // comedyFilms: filmsInterface;
  constructor(){
    // this.comedyFilms = {
    //   section: 'Comedia',
    //   films: {
    //     title: 'Casi 300',
    //     image: '/assets/Comedia/casi300.webp'
    //   }
    // }
  }
}