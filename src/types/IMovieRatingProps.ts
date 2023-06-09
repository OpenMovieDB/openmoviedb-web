import { ReactNode } from "react";

export interface RatingProps {
  rating?: number;
  className?: string;
  hasBg?: boolean;
  props?: ReactNode;
}
