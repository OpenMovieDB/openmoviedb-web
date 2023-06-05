import { ReactNode } from "react";

export interface GenresItem {
  name: string;
  href?: string;
  icon?: string;
}

export interface GenresProps {
  item: {
    name: string;
    href: string;
    icon: string;
  };
}
