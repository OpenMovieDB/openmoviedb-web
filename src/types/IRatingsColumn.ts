import { ReactNode } from "react";

export interface IRating {
  rating: string;
  service: string;
}

export interface IRatingsColumn {
  rating?: Array<IRating>;
  ratings?: Array<IRating>;
  props?: ReactNode;
}
