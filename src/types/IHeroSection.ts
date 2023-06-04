interface IGenresItem {
  name: string;
  href: string;
  icon: string;
}

interface IHeroSectionRatings {
  rating: string;
  service: string;
}

interface IHeroSectionCharactersList {
  image: string;
  firstName: string;
  lastName: string;
}

export interface IHeroSectionItem {
  filmTitleImage?: string | any;
  filmCharacterImage?: string | any;
  filmBackground?: string | any;
  filmTitle?: string;
  filmTitleOriginal?: string;
  description: string;
  url: string;
  ratings: Array<IHeroSectionRatings>;
  charactersList?: Array<IHeroSectionCharactersList>;
  genres: Array<IGenresItem>;

  href?: string;
  icon?: string;
  firstName?: string;
  lastName?: string;
}

export interface IHeroSection {
  item: IHeroSectionItem;
}
