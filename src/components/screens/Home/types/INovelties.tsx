import { RatingInlineProps } from "@/types/IRatingInlineProps";

export interface IGenres {
  name: string;
  icon: string;
  href: string;
}

export interface INovelties {
  id: number;
  image: string;
  description: string;
  ratings: any; // Array<RatingInlineProps>
  title: string;
  url: string;
  genres: Array<IGenres>;
}
