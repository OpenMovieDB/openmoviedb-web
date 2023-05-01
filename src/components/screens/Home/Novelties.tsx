"use client";

import { BigCarousel } from "@/components/BigCarousel/BigCarousel";

import image1 from "@/public/Novelties/main-poster-0.png";
import image2 from "@/public/Novelties/main-poster-1.png";
import image3 from "@/public/Novelties/main-poster-2.png";
import image4 from "@/public/Novelties/main-poster-3.png";

export interface INovelties {
  id: number;
  image: string;
  description: string;
  rating: number;
  title: string;
  url: string;
  genres: [
    {
      name: string;
      icon: string;
      href: string;
    }
  ];
}

const Novelties = () => {
  const listOfNovelties: INovelties[] = [
    {
      id: 1,
      image: image1.src,
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
      rating: 7.1,
      url: "1",
    },
    {
      id: 2,
      image: image2.src,
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
      rating: 7.1,
      url: "2",
    },
    {
      id: 3,
      image: image3.src,
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
      rating: 7.1,
      url: "3",
    },
    {
      id: 4,
      image: image4.src,
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
      rating: 7.1,
      url: "4",
    },
    {
      id: 1,
      image: image1.src,
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
      rating: 7.1,
      url: "1",
    },
    {
      id: 2,
      image: image2.src,
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
      rating: 7.1,
      url: "2",
    },
    {
      id: 3,
      image: image3.src,
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
      rating: 7.1,
      url: "3",
    },
    {
      id: 4,
      image: image4.src,
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
      rating: 7.1,
      url: "4",
    },
  ];

  return (
    <BigCarousel
      title="Новинки"
      data={listOfNovelties}
      className="mt-96"
    ></BigCarousel>
  );
};

export default Novelties;
