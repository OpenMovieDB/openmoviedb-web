import { ReactNode } from "react";

// TODO: Write interface for BigCarousel data
export interface CarouselProps {
  data: {
    description: string;
    id: any;
    rating: number;
    title: string;
    url: string;
  };
  id: number;
  className?: string;
  title?: string;
}
