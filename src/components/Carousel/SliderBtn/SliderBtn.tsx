import { forwardRef } from "react";
import styles from "./SliderBtn.module.scss";
import { Button } from "@chakra-ui/react";

interface SliderBtnProps {
  dir: "left" | "right";
}

export const SliderBtn = forwardRef<HTMLButtonElement, SliderBtnProps>(
  (props, ref) => {
    console.log("click!");

    return (
      <Button ref={ref} className={styles.btn}>
        {props.dir === "left" ? "<" : ">"}
      </Button>
    );
  }
);

SliderBtn.displayName = "SliderBtn";
