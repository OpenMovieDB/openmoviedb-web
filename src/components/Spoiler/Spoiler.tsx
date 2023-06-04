import * as React from "react";
import styles from "./Spoiler.module.scss";

interface SpoilerProps {
  text?: string;
  textColor?: string;
  hiddenColor?: string;
  revealedColor?: string;
  ariaLabelShowText?: string;
  ariaLabelHideText?: string;
  children: React.ReactNode;
}

export const Spoiler: React.FunctionComponent<SpoilerProps> = ({
  text = null,
  textColor = "inherit",
  hiddenColor = "blur(5px)",
  revealedColor = "blur(0px)",
  ariaLabelShowText = "To reveal spoiler text click here.",
  ariaLabelHideText = "To hide spoiler text again click here.",
  children,
}) => {
  const [isHidden, setHidden] = React.useState<boolean>(true);

  const toggleHidden = (el: HTMLElement) => {
    if (el.tagName !== "A" && el.tagName !== "BUTTON") {
      setHidden(!isHidden);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    toggleHidden(e.target as HTMLElement);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      toggleHidden(e.target as HTMLElement);
    }
  };

  return (
    <span
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      className={`spoiler-text ${styles.contents} ${
        isHidden ? styles["is--hidden"] : ""
      }`}
      style={{ filter: isHidden ? hiddenColor : revealedColor }}
      aria-label={isHidden ? ariaLabelShowText : ariaLabelHideText}
      role="button"
      tabIndex={0}
    >
      <span role="alert" style={{ color: textColor }}>
        {children || text}
      </span>
    </span>
  );
};
