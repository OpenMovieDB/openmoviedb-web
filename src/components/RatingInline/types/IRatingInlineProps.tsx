import { ReactNode } from "react";

export interface RatingInlineProps {
  item: { rating: string; service: string };
  props?: ReactNode;
}
