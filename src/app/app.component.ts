import { Component, Input} from '@angular/core';
// import { filmsInterface } from './models/films.interface';
import { Top10Interface } from './models/top10.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NetflixApp';
  @Input() top10: Top10Interface = {imgTop:'', img:''};
  
  constructor(){
  }
}