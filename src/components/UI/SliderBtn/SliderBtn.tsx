import { forwardRef } from "react";
import { Button } from "@chakra-ui/react";

import { SliderBtnProps } from "./types/ISliderBtnProps";

export const SliderBtn = forwardRef<HTMLButtonElement, SliderBtnProps>(
  (props, ref) => {
    return (
      <Button bg="transparent" color="gray.100" ref={ref} m="40px">
        {props.dir === "left" ? "<" : ">"}
      </Button>
    );
  }
);

SliderBtn.displayName = "SliderBtn";
