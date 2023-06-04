import { INovelties } from "@/screens/Home/types/INovelties";

export interface CarouselProps {
  className?: string;
  title: string;
  data: Array<INovelties>;
}
