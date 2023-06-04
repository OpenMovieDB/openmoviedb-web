import { useMemo } from "react";
import { ISearchResults } from "@/types/ISearchResults";
import image from "@/public/SearchResults/image.png";

const data = [
  {
    image: image.src,
    title: "Винни-Пух: Кровь и мёд",
    type: "Фильм",
    year: "2023",
    rating: 3.9,
  },
  {
    image: image.src,
    title: "Винни-Пух: Кровь и мёд",
    type: "Фильм",
    year: "2023",
    rating: 3.9,
  },
  {
    image: image.src,
    title: "Винни-Пух: Кровь и мёд",
    type: "Фильм",
    year: "2023",
    rating: 3.9,
  },
  {
    image: image.src,
    title: "Винни-Пух: Кровь и мёд",
    type: "Фильм",
    year: "2023",
    rating: 3.9,
  },
];

export const useSearch = (query: string) => {
  const results = useMemo(() => {
    if (!query) {
      return [];
    }

    return data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return results;
};
