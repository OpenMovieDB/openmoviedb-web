/* --- Interfaces --- */

import { INovelties } from "@/screens/Home/types/INovelties";
import { IFact } from "@/types/IFact";
import { IVendorItem } from "@/types/IVendorItem";

/* --- Images --- */

import actor1 from "@/public/Actors/actor1.png";
import actor2 from "@/public/Actors/actor2.png";
import actor3 from "@/public/Actors/actor3.png";
import actor4 from "@/public/Actors/actor4.png";
import actor5 from "@/public/Actors/actor5.png";
import actor6 from "@/public/Actors/actor6.png";
import actor7 from "@/public/Actors/actor7.png";
import actor8 from "@/public/Actors/actor8.png";

import filmImage from "@/public/Film/cover.png";

import backgroundImage from "@/public/Hero/HouseOfDragon/slider-bg.png";
import filmTitle from "@/public/Hero/HouseOfDragon/film-logo.png";
import mainCharacter from "@/public/Hero/HouseOfDragon/character.png";

import backgroundImage2 from "@/public/Hero/StrangerThings/slider-bg.png";
import filmTitle2 from "@/public/Hero/StrangerThings/film-logo.png";
import mainCharacter2 from "@/public/Hero/StrangerThings/character.png";

import image1 from "@/public/Popular/1.jpeg";
import image2 from "@/public/Popular/2.jpeg";
import image3 from "@/public/Popular/3.jpeg";
import image4 from "@/public/Popular/4.jpeg";
import image5 from "@/public/Popular/5.jpeg";
import image6 from "@/public/Popular/6.jpeg";
import image7 from "@/public/Popular/7.jpeg";

import image8 from "@/public/Novelties/main-poster-0.png";
import image9 from "@/public/Novelties/main-poster-1.png";
import image10 from "@/public/Novelties/main-poster-2.png";
import image11 from "@/public/Novelties/main-poster-3.png";

import avatar1 from "@/public/Hero/avatar1.png";
import avatar2 from "@/public/Hero/avatar2.png";
import avatar3 from "@/public/Hero/avatar3.png";
import avatar4 from "@/public/Hero/avatar4.png";

import cover1 from "@/public/Recomendations/cover1.png";
import cover2 from "@/public/Recomendations/cover2.png";
import cover3 from "@/public/Recomendations/cover3.png";
import cover4 from "@/public/Recomendations/cover4.png";

import ghost from "@/assets/emojis/ghost.png";
import alien from "@/assets/emojis/alien.png";
import kiss from "@/assets/emojis/kiss.png";
import mage from "@/assets/emojis/mage.png";
import sad from "@/assets/emojis/sad.png";
import laugh from "@/assets/emojis/laugh.png";

import image_1 from "@/public/Filters/Genres/image-1.png";
import image_2 from "@/public/Filters/Genres/image-2.png";
import image_3 from "@/public/Filters/Genres/image-3.png";
import image_4 from "@/public/Filters/Genres/image-4.png";
import image_5 from "@/public/Filters/Genres/image-5.png";
import image_6 from "@/public/Filters/Genres/image-6.png";
import image_7 from "@/public/Filters/Genres/image-7.png";
import image_8 from "@/public/Filters/Genres/image-8.png";
import image_9 from "@/public/Filters/Genres/image-9.png";
import image_10 from "@/public/Filters/Genres/image-10.png";
import image_11 from "@/public/Filters/Genres/image-11.png";
import image_12 from "@/public/Filters/Genres/image-12.png";

import image__1 from "@/public/Filters/Countries/image-1.png";
import image__2 from "@/public/Filters/Countries/image-2.png";
import image__3 from "@/public/Filters/Countries/image-3.png";
import image__4 from "@/public/Filters/Countries/image-4.png";
import image__5 from "@/public/Filters/Countries/image-5.png";
import image__6 from "@/public/Filters/Countries/image-6.png";
import image__7 from "@/public/Filters/Countries/image-7.png";
import image__8 from "@/public/Filters/Countries/image-8.png";
import image__9 from "@/public/Filters/Countries/image-9.png";
import image__10 from "@/public/Filters/Countries/image-10.png";
import image__11 from "@/public/Filters/Countries/image-11.png";
import image__12 from "@/public/Filters/Countries/image-12.png";

import iviLogo from "@/public/vendors/ivi.png";
import premierLogo from "@/public/vendors/premier.png";
import okkoLogo from "@/public/vendors/okko.png";

import genre_1 from "@/public/Genres/genre-1.png";
import genre_2 from "@/public/Genres/genre-2.png";
import genre_3 from "@/public/Genres/genre-3.png";
import genre_4 from "@/public/Genres/genre-4.png";
import genre_5 from "@/public/Genres/genre-5.png";
import genre_6 from "@/public/Genres/genre-6.png";

/* --- ------- --- */

export const films = [
  {
    filmTitleImage: filmTitle.src,
    filmCharacterImage: mainCharacter.src,
    filmBackground: backgroundImage.src,
    description:
      "Таргариены ведут друг с другом ожесточенную борьбу за Железный трон. Самый долгожданный сериал года",
    url: "#",

    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],

    charactersList: [
      {
        image: avatar1.src,
        firstName: "Вайнона",
        lastName: "Райдер",
      },
      {
        image: avatar2.src,
        firstName: "Вайнона",
        lastName: "Райдер",
      },
      {
        image: avatar3.src,
        firstName: "Вайнона",
        lastName: "Райдер",
      },
      {
        image: avatar4.src,
        firstName: "Вайнона",
        lastName: "Райдер",
      },
    ],

    genres: [
      {
        name: "Боевик",
        icon: genre_1.src,
        href: "#",
      },
      {
        name: "Мелодрама",
        icon: genre_2.src,
        href: "#",
      },
      {
        name: "Драма",
        icon: genre_3.src,
        href: "#",
      },
      {
        name: "Фэнтези",
        icon: genre_4.src,
        href: "#",
      },
    ],
  },
  {
    filmTitleImage: filmTitle2.src,
    filmCharacterImage: mainCharacter2.src,
    filmBackground: backgroundImage2.src,
    description:
      "1980-е годы, тихий провинциальный американский городок. Благоприятное течение местной жизни нарушает загадочное исчезновение подростка по имени Уилл.",
    url: "#",

    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],

    charactersList: [
      {
        image: avatar1.src,
        firstName: "Вайнона",
        lastName: "Райдер",
      },
      {
        image: avatar2.src,
        firstName: "Вайнона",
        lastName: "Райдер",
      },
      {
        image: avatar3.src,
        firstName: "Вайнона",
        lastName: "Райдер",
      },
      {
        image: avatar4.src,
        firstName: "Вайнона",
        lastName: "Райдер",
      },
    ],

    genres: [
      {
        name: "Триллер",
        icon: genre_5.src,
        href: "#",
      },
      {
        name: "Ужас",
        icon: genre_6.src,
        href: "#",
      },
      {
        name: "Драма",
        icon: genre_2.src,
        href: "#",
      },
      {
        name: "Фэнтези",
        icon: genre_4.src,
        href: "#",
      },
    ],
  },
];

export const currentFilm = {
  filmTitle: "Очень странные дела",
  filmTitleOriginal: "Stranger things",
  filmCharacterImage: mainCharacter,
  filmBackground: backgroundImage,
  description:
    "1980-е годы, тихий провинциальный американский городок. Благоприятное течение местной жизни нарушает загадочное исчезновение подростка по имени Уилл. Выяснить обстоятельства дела полны решимости родные мальчика и местный шериф, также события затрагивают лучшего друга Уилла — Майка. Он начинает собственное расследование. Майк уверен, что близок к разгадке, и теперь ему предстоит оказаться в эпицентре ожесточенной битвы потусторонних сил.",
  url: "#",
  ratings: [
    {
      rating: "5.6",
      service: "kinoland",
    },
    {
      rating: "5.6",
      service: "IMDb",
    },
    {
      rating: "6",
      service: "КП",
    },
  ],
  availableServices: [
    {
      name: "Иви",
      icon: "",
    },
    {
      name: "Premier",
      icon: "",
    },
    {
      name: "Okko",
      icon: "",
    },
  ],
  genres: [
    {
      name: "Триллер",
      icon: "😰",
      href: "#",
    },
    {
      name: "Ужас",
      icon: "👻",
      href: "#",
    },
    {
      name: "Драма",
      icon: "😢",
      href: "#",
    },
    {
      name: "Фэнтези",
      icon: "🧙",
      href: "#",
    },
  ],
};

export const listOfPopular = [
  {
    id: 1,
    image: image1.src,
    title: "За мечтой",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "1",
  },
  {
    id: 2,
    image: image2.src,
    title: "Зов волка",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "2",
  },
  {
    id: 3,
    image: image3.src,
    title: "Тайная жизнь домашних животных 2",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "3",
  },
  {
    id: 4,
    image: image4.src,
    title: "Люди в чёрном: Интернэшнл",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "4",
  },
  {
    id: 5,
    image: image5.src,
    title: "Люди икс: Тёмный феникс",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "1",
  },
  {
    id: 6,
    image: image6.src,
    title: "Детские игры",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "2",
  },
  {
    id: 7,
    image: image7.src,
    title: "Аладин",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "3",
  },
  {
    id: 8,
    image: image7.src,
    title: "Люди икс: Тёмный феникс",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "4",
  },
  {
    id: 1,
    image: image1.src,
    title: "За мечтой",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "1",
  },
  {
    id: 2,
    image: image2.src,
    title: "Зов волка",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "2",
  },
  {
    id: 3,
    image: image3.src,
    title: "Тайная жизнь домашних животных 2",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "3",
  },
  {
    id: 4,
    image: image4.src,
    title: "Люди в чёрном: Интернэшнл",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "4",
  },
  {
    id: 5,
    image: image5.src,
    title: "Люди икс: Тёмный феникс",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "1",
  },
  {
    id: 6,
    image: image6.src,
    title: "Детские игры",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "2",
  },
  {
    id: 7,
    image: image7.src,
    title: "Аладин",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "3",
  },
  {
    id: 8,
    image: image7.src,
    title: "Люди икс: Тёмный феникс",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "4",
  },

  {
    id: 1,
    image: image1.src,
    title: "За мечтой",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "1",
  },
  {
    id: 2,
    image: image2.src,
    title: "Зов волка",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "2",
  },
  {
    id: 3,
    image: image3.src,
    title: "Тайная жизнь домашних животных 2",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "3",
  },
  {
    id: 4,
    image: image4.src,
    title: "Люди в чёрном: Интернэшнл",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "4",
  },
  {
    id: 5,
    image: image5.src,
    title: "Люди икс: Тёмный феникс",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "1",
  },
  {
    id: 6,
    image: image6.src,
    title: "Детские игры",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "2",
  },
  {
    id: 7,
    image: image7.src,
    title: "Аладин",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "3",
  },
  {
    id: 8,
    image: image7.src,
    title: "Люди икс: Тёмный феникс",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "4",
  },
  {
    id: 1,
    image: image1.src,
    title: "За мечтой",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "1",
  },
  {
    id: 2,
    image: image2.src,
    title: "Зов волка",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "2",
  },
  {
    id: 3,
    image: image3.src,
    title: "Тайная жизнь домашних животных 2",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "3",
  },
  {
    id: 4,
    image: image4.src,
    title: "Люди в чёрном: Интернэшнл",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "4",
  },
  {
    id: 5,
    image: image5.src,
    title: "Люди икс: Тёмный феникс",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "1",
  },
  {
    id: 6,
    image: image6.src,
    title: "Детские игры",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "2",
  },
  {
    id: 7,
    image: image7.src,
    title: "Аладин",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "3",
  },
  {
    id: 8,
    image: image7.src,
    title: "Люди икс: Тёмный феникс",
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "4",
  },
];

export const recomendationsList = [
  {
    image: cover1.src,
    title: "История игрушек 4",
    type: "Мультфильм",
  },
  {
    image: cover2.src,
    title: "Очень странные дела",
    type: "Мультфильм",
  },
  {
    image: cover3.src,
    title: "К звёздам",
    type: "Фильм",
  },
  {
    image: cover4.src,
    title: "Она",
    type: "Фильм",
  },
  {
    image: cover1.src,
    title: "История игрушек 4",
    type: "Мультфильм",
  },
  {
    image: cover2.src,
    title: "Очень странные дела",
    type: "Мультфильм",
  },
  {
    image: cover3.src,
    title: "К звёздам",
    type: "Фильм",
  },
  {
    image: cover4.src,
    title: "Она",
    type: "Фильм",
  },
];

export const genresList = [
  {
    icon: laugh.src,
    type: "Комедии",
  },
  {
    icon: ghost.src,
    type: "Ужасы",
  },
  {
    icon: alien.src,
    type: "Фантастика",
  },
  {
    icon: kiss.src,
    type: "Мелодрамы",
  },
  {
    icon: sad.src,
    type: "Драмы",
  },
  {
    icon: mage.src,
    type: "Фэнтези",
  },
  {
    icon: laugh.src,
    type: "Комедии",
  },
  {
    icon: ghost.src,
    type: "Ужасы",
  },
  {
    icon: alien.src,
    type: "Фантастика",
  },
  {
    icon: kiss.src,
    type: "Мелодрамы",
  },
  {
    icon: sad.src,
    type: "Драмы",
  },
  {
    icon: mage.src,
    type: "Фэнтези",
  },
];

export const listOfNovelties: INovelties[] = [
  {
    id: 1,
    image: image8.src,
    description:
      "Хозяева Макса уезжают за город в гости на ранчо и берут его с собой. Тем временем, в городе у Снежка и Гиджет свои приключения.",
    title: "История игрушек 4",
    genres: [
      {
        name: "Триллер",
        icon: "😰",
        href: "#",
      },
      {
        name: "Ужас",
        icon: "👻",
        href: "#",
      },
      {
        name: "Драма",
        icon: "😢",
        href: "#",
      },
      {
        name: "Фэнтези",
        icon: "🧙",
        href: "#",
      },
    ],
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "1",
  },
  {
    id: 2,
    image: image9.src,
    title: "Тайная жизнь домашних животных 2",
    description:
      "Хозяева Макса уезжают за город в гости на ранчо и берут его с собой. Тем временем, в городе у Снежка и Гиджет свои приключения.",
    genres: [
      {
        name: "Триллер",
        icon: "😰",
        href: "#",
      },
      {
        name: "Ужас",
        icon: "👻",
        href: "#",
      },
      {
        name: "Драма",
        icon: "😢",
        href: "#",
      },
      {
        name: "Фэнтези",
        icon: "🧙",
        href: "#",
      },
    ],
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "2",
  },
  {
    id: 3,
    image: image10.src,
    description:
      "Хозяева Макса уезжают за город в гости на ранчо и берут его с собой. Тем временем, в городе у Снежка и Гиджет свои приключения.",
    title: "Люди в чёрном: Интернэшнл",
    genres: [
      {
        name: "Триллер",
        icon: "😰",
        href: "#",
      },
      {
        name: "Ужас",
        icon: "👻",
        href: "#",
      },
      {
        name: "Драма",
        icon: "😢",
        href: "#",
      },
      {
        name: "Фэнтези",
        icon: "🧙",
        href: "#",
      },
    ],
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "3",
  },
  {
    id: 4,
    image: image11.src,
    description:
      "Хозяева Макса уезжают за город в гости на ранчо и берут его с собой. Тем временем, в городе у Снежка и Гиджет свои приключения.",
    title: "Люди икс: Тёмный феникс",
    genres: [
      {
        name: "Триллер",
        icon: "😰",
        href: "#",
      },
      {
        name: "Ужас",
        icon: "👻",
        href: "#",
      },
      {
        name: "Драма",
        icon: "😢",
        href: "#",
      },
      {
        name: "Фэнтези",
        icon: "🧙",
        href: "#",
      },
    ],
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "4",
  },
  {
    id: 1,
    image: image8.src,
    description:
      "Хозяева Макса уезжают за город в гости на ранчо и берут его с собой. Тем временем, в городе у Снежка и Гиджет свои приключения.",
    title: "История игрушек 4",
    genres: [
      {
        name: "Триллер",
        icon: "😰",
        href: "#",
      },
      {
        name: "Ужас",
        icon: "👻",
        href: "#",
      },
      {
        name: "Драма",
        icon: "😢",
        href: "#",
      },
      {
        name: "Фэнтези",
        icon: "🧙",
        href: "#",
      },
    ],
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "1",
  },
  {
    id: 2,
    image: image9.src,
    title: "Тайная жизнь домашних животных 2",
    description:
      "Хозяева Макса уезжают за город в гости на ранчо и берут его с собой. Тем временем, в городе у Снежка и Гиджет свои приключения.",
    genres: [
      {
        name: "Триллер",
        icon: "😰",
        href: "#",
      },
      {
        name: "Ужас",
        icon: "👻",
        href: "#",
      },
      {
        name: "Драма",
        icon: "😢",
        href: "#",
      },
      {
        name: "Фэнтези",
        icon: "🧙",
        href: "#",
      },
    ],
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "2",
  },
  {
    id: 3,
    image: image10.src,
    description:
      "Хозяева Макса уезжают за город в гости на ранчо и берут его с собой. Тем временем, в городе у Снежка и Гиджет свои приключения.",
    title: "Люди в чёрном: Интернэшнл",
    genres: [
      {
        name: "Триллер",
        icon: "😰",
        href: "#",
      },
      {
        name: "Ужас",
        icon: "👻",
        href: "#",
      },
      {
        name: "Драма",
        icon: "😢",
        href: "#",
      },
      {
        name: "Фэнтези",
        icon: "🧙",
        href: "#",
      },
    ],
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "3",
  },
  {
    id: 4,
    image: image11.src,
    description:
      "Хозяева Макса уезжают за город в гости на ранчо и берут его с собой. Тем временем, в городе у Снежка и Гиджет свои приключения.",
    title: "Люди икс: Тёмный феникс",
    genres: [
      {
        name: "Триллер",
        icon: "😰",
        href: "#",
      },
      {
        name: "Ужас",
        icon: "👻",
        href: "#",
      },
      {
        name: "Драма",
        icon: "😢",
        href: "#",
      },
      {
        name: "Фэнтези",
        icon: "🧙",
        href: "#",
      },
    ],
    ratings: [
      {
        rating: "5.6",
        service: "kinoland",
      },
      {
        rating: "5.6",
        service: "IMDb",
      },
      {
        rating: "6",
        service: "КП",
      },
    ],
    url: "4",
  },
];

export const seriesList = [
  {
    index: "Серия 1",
    image: filmImage,
    title: "Глава 1. Исчезновение Уилла Байерса",
    date: "15 июля 2016",
  },
  {
    index: "Серия 2",
    image: filmImage,
    title: "Глава 2. Чудак с Кленовой улицы",
    date: "15 июля 2016",
  },
  {
    index: "Серия 3",
    image: filmImage,
    title: "Глава 3. Здорово, Джолли",
    date: "15 июля 2016",
  },
  {
    index: "Серия 4",
    image: filmImage,
    title: "Глава 1. Исчезновение Уилла Байерса",
    date: "15 июля 2016",
  },
  {
    index: "Серия 5",
    image: filmImage,
    title: "Глава 2. Чудак с Кленовой улицы",
    date: "15 июля 2016",
  },
  {
    index: "Серия 6",
    image: filmImage,
    title: "Глава 3. Здорово, Джолли",
    date: "15 июля 2016",
  },
];

export const actorsList = [
  { image: actor1, name: "Уиллертоф Харрис" },
  { image: actor2, name: "Даэмон Гроув" },
  { image: actor3, name: "Барб Хайнд" },
  { image: actor4, name: "Мюррэй Бейкермен" },
  { image: actor5, name: "Ширли Помрой" },
  { image: actor6, name: "Чак Крэндолл" },
  { image: actor7, name: "Тедди Каппер" },
  { image: actor8, name: "Рэнди МакГрегор" },
  { image: actor1, name: "Уиллертоф Харрис" },
  { image: actor2, name: "Даэмон Гроув" },
  { image: actor3, name: "Барб Хайнд" },
  { image: actor4, name: "Мюррэй Бейкермен" },
  { image: actor5, name: "Ширли Помрой" },
  { image: actor6, name: "Чак Крэндолл" },
  { image: actor7, name: "Тедди Каппер" },
  { image: actor8, name: "Рэнди МакГрегор" },
];

export const movieAuthorsList = {
  director: [
    {
      name: "Мэтт Даффер",
      url: "#",
    },
    {
      name: "Росс Даффер",
      url: "#",
    },
    {
      name: "Шон Даффер",
      url: "#",
    },
  ],
  script: [
    {
      name: "Мэтт Даффер",
      url: "#",
    },
    {
      name: "Росс Даффер",
      url: "#",
    },
    {
      name: "Джесси Никсон-Лопес",
      url: "#",
    },
  ],
  producer: [
    {
      name: "Дэн Коэн",
      url: "#",
    },
    {
      name: "Мэтт Коэн",
      url: "#",
    },
    {
      name: "Росс Даффер",
      url: "#",
    },
  ],
  operator: [
    {
      name: "Тим Иви",
      url: "#",
    },
    {
      name: "Марк Риттер",
      url: "#",
    },
  ],
  composer: [
    {
      name: "Кайл Диксон",
      url: "#",
    },
    {
      name: "Майкл Стейн",
      url: "#",
    },
  ],
  artist: [
    {
      name: "Руди Гардини",
      url: "#",
    },
    {
      name: "Эмили Флеминг",
      url: "#",
    },
  ],
};

export const factsList: IFact[] = [
  {
    index: 1,
    text: 'Официальный постер для сериала был создан Кайлом Ламбертом. Он был выполнен в стиле, напоминающем работы известного художника Дрю Струзана, который разработал официальные плакаты для фильмов "Звёздные войны: Эпизод 4 – Новая надежда" (1977), "Индианы Джонса", "Назад в будущее" (1985), "Инопланетянина" (1982) и многих других.',
    isSpoiler: false,
  },
  {
    index: 2,
    text: "Создатели шоу, Мэтт и Росс Дафферы, сказали, что для создания атмосферы в сериале они черпали вдохновение из работ Стивена Спилберга, Джона Карпентера и Стивена Кинга.",
    isSpoiler: false,
  },
  {
    index: 3,
    text: 'Финн Вулфард, который сыграл Майка Уилера в сериале, на самом деле не слышал о многих из фильмов, на которые ссылались в сериале. Ему пришлось посмотреть "Пришельцев", "Гремлинов" и "Охотников за привидениями", чтобы лучше понимать свою роль.',
    isSpoiler: true,
  },
  {
    index: 4,
    text: 'В своё время Дэвид Харбор (Джим Хоппер) подавал на роль злодея в фильме "Люди Икс".',
    isSpoiler: false,
  },
  {
    index: 5,
    text: "Милли Бобби Браун, которая сыграла Одинокую Девочку, была так впечатлена своей ролью, что она начала говорить на диалекте голосом, близким к тому, который использовала для персонажа.",
    isSpoiler: false,
  },
  {
    index: 6,
    text: "Съемки сериала проходили в Атланте (штат Джорджия, США).",
    isSpoiler: true,
  },
  {
    index: 7,
    text: 'Каждый эпизод первого сезона назван в честь известной книги или фильма ужасов. Например, первый эпизод – "The Vanishing of Will Byers" – назван в честь фильма "The Vanishing" (1988), а второй – "The Weirdo on Maple Street" – в честь серии "The Twilight Zone" ("The Monsters Are Due on Maple Street").',
    isSpoiler: false,
  },
  {
    index: 8,
    text: "Съемки второго сезона начались до премьеры первого. Это произошло потому, что создатели хотели быть уверены, что актеры не будут выглядеть слишком старыми для своих ролей.",
    isSpoiler: false,
  },
  {
    index: 9,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    isSpoiler: true,
  },
];

export const PopularGenresData = [
  {
    icon: image_1.src,
    name: "Мультфильмы",
    href: "#",
  },
  {
    icon: image_2.src,
    name: "Триллеры",
    href: "#",
  },
  {
    icon: image_3.src,
    name: "Детские",
    href: "#",
  },
  {
    icon: image_4.src,
    name: "Комедия",
    href: "#",
  },
  {
    icon: image_5.src,
    name: "Военные",
    href: "#",
  },
  {
    icon: image_6.src,
    name: "Документальные",
    href: "#",
  },
  {
    icon: image_7.src,
    name: "Ужасы",
    href: "#",
  },
  {
    icon: image_8.src,
    name: "Фантастика",
    href: "#",
  },
  {
    icon: image_9.src,
    name: "Драмы",
    href: "#",
  },
  {
    icon: image_10.src,
    name: "Триллеры",
    href: "#",
  },
  {
    icon: image_11.src,
    name: "Аниме",
    href: "#",
  },
  {
    icon: image_12.src,
    name: "Детективы",
    href: "#",
  },
];

export const CountriesData = [
  {
    icon: image__1.src,
    name: "Россия",
    href: "#",
  },
  {
    icon: image__2.src,
    name: "Австрия",
    href: "#",
  },
  {
    icon: image__3.src,
    name: "Алжир",
    href: "#",
  },
  {
    icon: image__4.src,
    name: "Великобритания",
    href: "#",
  },
  {
    icon: image__5.src,
    name: "Азербайджан",
    href: "#",
  },
  {
    icon: image__6.src,
    name: "Американское Самоа",
    href: "#",
  },
  {
    icon: image__7.src,
    name: "СССР",
    href: "#",
  },
  {
    icon: image__8.src,
    name: "США",
    href: "#",
  },
  {
    icon: image__9.src,
    name: "Франция",
    href: "#",
  },
  {
    icon: image__10.src,
    name: "Южная Корея",
    href: "#",
  },
  {
    icon: image__11.src,
    name: "Австралия",
    href: "#",
  },
  {
    icon: image__12.src,
    name: "Албания",
    href: "#",
  },
];

export const vendorsList: IVendorItem[] = [
  {
    icon: iviLogo.src,
    title: "Иви",
  },
  {
    icon: premierLogo.src,
    title: "Premier",
  },
  {
    icon: okkoLogo.src,
    title: "Okko",
  },
];
