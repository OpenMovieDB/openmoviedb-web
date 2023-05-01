import { ReactNode } from "react";

export interface MovieCardProps {
  item: {
    image: string;
    rating: number;
    title: string;
  };
  onClick?: ReactNode | null;
  props?: ReactNode;
}
