export interface IGenres {
  name: string;
  icon: string;
  href: string;
}

export interface INovelties {
  id: number;
  image: string;
  description: string;
  rating: number;
  title: string;
  url: string;
  genres: Array<IGenres>;
}
