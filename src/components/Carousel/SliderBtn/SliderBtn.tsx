import { forwardRef } from "react";
import styles from "./SliderBtn.module.scss";
import { Button } from "@chakra-ui/react";

interface SliderBtnProps {
  dir: "left" | "right";
}

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
