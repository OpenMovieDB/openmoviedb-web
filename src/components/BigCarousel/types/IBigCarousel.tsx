import { INovelties } from "@/screens/Home/Novelties";

export interface CarouselProps {
  className?: string;
  title: string;
  data: Array<INovelties>;
}
