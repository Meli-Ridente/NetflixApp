import { Component, Input } from '@angular/core';
import { filter } from 'rxjs';
import { filmsInterface } from 'src/app/models/films.interface';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})

export class FilmsComponent {

  pelis: filmsInterface = {section: [{category: '', films: [{title: '', img: ''}]}]};
  constructor(){
    this.pelis = {
      section: [
        {
          category: 'Terror',
          films: [
            {
              title: 'Apostol',
              img: '/assets/Terror/apostol.jpg'
            },
            {
              title: 'Calle Terror',
              img: '/assets/Terror/calleterror.jpg'
            }, 
            {
              title: 'Infierno Agua',
              img: '/assets/Terror/infiernoagua.webp'
            },
            {
              title: 'Insidi ous 2',
              img: '/assets/Terror/insidious2.webp'
            },
            {
              title: 'Life',
              img: '/assets/Terror/life.webp'
            },
            {
              title: 'Malasana',
              img: '/assets/Terror/malasana.webp'
            },
            {
              title: 'Multiple',
              img: '/assets/Terror/multiple.webp'
            },
            {
              title: 'Reflejos',
              img: '/assets/Terror/reflejos.webp'
            }
          ]
        },
        {
          category: 'Acción',
          films: [
            {
              title: 'Ejercito muertos',
              img: '/assets/Accion/ejercitomuertos.jpg'
            },
            {
              title: 'El protector',
              img: '/assets/Accion/elprotector.webp'
            }, 
            {
              title: 'Equalizer 2',
              img: '/assets/Accion/equalizer2.webp'
            },
            {
              title: 'Heat',
              img: '/assets/Accion/heat.webp'
            },
            {
              title: 'Jack Reacher',
              img: '/assets/Accion/jackreacher.webp'
            },
            {
              title: 'John Wick 2',
              img: '/assets/Accion/johnwick2.webp'
            },
            {
              title: 'Kill Bill 2',
              img: '/assets/Accion/killbill2.webp'
            },
            {
              title: 'Mision imposible nacion',
              img: '/assets/Accion/misionimposiblenacion.webp'
            }
          ]
        },
        {
          category: 'Anime',
          films: [
            {
              title: 'Ajin',
              img: '/assets/Anime/ajin.jpg'
            },
            {
              title: 'Castillo ambulante',
              img: '/assets/Anime/castilloambulante.webp'
            }, 
            {
              title: 'Chiriro',
              img: '/assets/Anime/chihiro.webp'
            },
            {
              title: 'Evangelion',
              img: '/assets/Anime/evangelion.webp'
            },
            {
              title: 'Gitsarise',
              img: '/assets/Anime/gitsarise.webp'
            },
            {
              title: 'Gundam',
              img: '/assets/Anime/gundam.webp'
            },
            {
              title: 'La puta',
              img: '/assets/Anime/laputa.webp'
            },
            {
              title: 'Ninokuni',
              img: '/assets/Anime/ninokuni.jpg'
            }
          ]
        },
        {
          category: 'Comedia',
          films: [
            {
              title: 'Casi 300',
              img: '/assets/Comedia/casi300.webp'
            },
            {
              title: 'Caza fantasmas',
              img: '/assets/Comedia/cazafantasmas.webp'
            }, 
            {
              title: 'Dictador',
              img: '/assets/Comedia/dictador.webp'
            },
            {
              title: 'Erase Hollywood',
              img: '/assets/Comedia/erasehollywood.webp'
            },
            {
              title: 'Juerga',
              img: '/assets/Comedia/juerga.webp'
            },
            {
              title: 'La terminal',
              img: '/assets/Comedia/laterminal.webp'
            },
            {
              title: 'Regreso al futuro',
              img: '/assets/Comedia/regresofuturo.webp'
            },
            {
              title: 'Rick and Morty',
              img: '/assets/Comedia/rickandmorty.webp'
            }
          ]
        },
        {
          category: 'Drama',
          films: [
            {
              title: '1917',
              img: '/assets/Drama/1917.webp'
            },
            {
              title: 'Arrival',
              img: '/assets/Drama/arrival.webp'
            }, 
            {
              title: 'Club lucha',
              img: '/assets/Drama/clublucha.webp'
            },
            {
              title: 'Corazones',
              img: '/assets/Drama/corazones.webp'
            },
            {
              title: 'Naufrago',
              img: '/assets/Drama/naufrago.webp'
            },
            {
              title: 'Scarface',
              img: '/assets/Drama/scarface.webp'
            },
            {
              title: 'Schindler',
              img: '/assets/Drama/schindler.webp'
            },
            {
              title: 'Sombra diablo',
              img: '/assets/Drama/sombradiablo.webp'
            }
          ]
        },
        {
          category: 'Sci-fi',
          films: [
            {
              title: '6 dia',
              img: '/assets/Sci-fi/6dia.webp'
            },
            {
              title: '12 monos',
              img: '/assets/Sci-fi/12monos.webp'
            }, 
            {
              title: 'After rearth',
              img: '/assets/Sci-fi/afterearth.webp'
            },
            {
              title: 'Colver paradox',
              img: '/assets/Sci-fi/colverparadox.jpg'
            },
            {
              title: 'Core',
              img: '/assets/Sci-fi/core.webp'
            },
            {
              title: 'Doom',
              img: '/assets/Sci-fi/doom.webp'
            },
            {
              title: 'Jumper',
              img: '/assets/Sci-fi/jumper.webp'
            },
            {
              title: 'Passengers',
              img: '/assets/Sci-fi/passengers.webp'
            }
          ]
        }
      ]
    }
  }
}
