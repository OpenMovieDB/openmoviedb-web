import { ReactNode } from "react";

export interface GenresProps {
  data: {
    genres: {
      name: string;
      href: string;
      icon: string;
    }[];
  };
  className?: string;
  children?: ReactNode;
}
