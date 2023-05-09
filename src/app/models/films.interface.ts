export interface FilmItem{
  title: string;
  img: string;
}

export interface Section{
  category: string;
  films: FilmItem[];
}

export interface filmsInterface{
  section: Section[];
}
