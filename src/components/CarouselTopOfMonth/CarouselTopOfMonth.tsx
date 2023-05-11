import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

// components
import { IconArrow } from "@/UI/IconArrow/IconArrow";

// styles
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  title?: string;
  isWheel?: boolean;
  titleMargin?: number;
  arrowMargin?: number;
  marginTop?: number;
}

export const CarouselTopOfMonth = ({ children, ...props }: Props) => {
  const {
    title,
    marginTop = 0,
    titleMargin = 30,
    arrowMargin = 0,
    isWheel = false,
  } = props;

  const refTrack = useRef<HTMLDivElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);
  const refTitle = useRef<HTMLHeadingElement>(null);

  const x = useMotionValue(0);

  const [left, setLeft] = useState(0);
  const [heightTrack, setHeightTrack] = useState(0);
  const [container, setContainer] = useState(0);

  const [isInit, setIsInit] = useState(false);
  const [isDrag, setIsDrag] = useState(false);
  const [isTransition, setIsTransition] = useState(false);
  const [position, setPosition] = useState(0);

  const initBox = useCallback((widthBox: number) => {
    const windowWidth = window.innerWidth;
    const containerWidth = refContainer.current?.clientWidth || 0;

    const scroll = windowWidth - widthBox;
    const offset = windowWidth - containerWidth;
    const width = scroll - offset;

    setContainer(containerWidth);
    setLeft(width);

    const containerHeight = refTrack.current!.clientHeight;
    const titleHeight = refTitle.current!.clientHeight;

    title
      ? setHeightTrack(containerHeight + titleHeight)
      : setHeightTrack(containerHeight);

    setIsInit(true);
  }, []);

  const handleTrack = useCallback(
    (direction: "left" | "right" | null, event?: React.WheelEvent) => {
      let offset = (container / 100) * 80;

      if (event) {
        direction = event.deltaY > 0 ? "right" : "left";
        offset = Math.abs(event.deltaY);
      }

      switch (direction) {
        case "left": {
          const isDeep = x.get() + offset > 0;
          x.set(isDeep ? 0 : x.get() + offset);

          break;
        }

        case "right": {
          const isDeep = x.get() - offset < left;
          x.set(isDeep ? left : x.get() - offset);

          break;
        }
      }
    },
    [container, left]
  );

  const handleTransition = useCallback(() => {
    const offset = refTrack
      .current!.style["transform"].split(" ")[0]
      .replace(/[^\-\.\d]/g, "");

    x.set(+offset);

    setPosition(x.get());
    setIsTransition(false);
  }, []);

  useEffect(() => {
    const initHandler = () => setIsInit(false);
    const scrollHandler = (e: any) => e.preventDefault();

    window.addEventListener("resize", initHandler);
    refTrack.current!.addEventListener("mousewheel", scrollHandler);
    refTrack.current!.addEventListener("touchmove", scrollHandler);

    return () => {
      window.removeEventListener("resize", initHandler);
      refTrack.current!.removeEventListener("mousewheel", scrollHandler);
      refTrack.current!.removeEventListener("touchmove", scrollHandler);
    };
  }, []);

  return (
    <section
      className={styles.slider}
      style={{
        height: heightTrack + titleMargin,
        marginTop: `${marginTop}px`,
      }}
    >
      {title && <h1 ref={refTitle}>{title}</h1>}

      <div className={styles.content}>
        <button
          className={position !== 0 && !isTransition ? "" : styles.hidden}
          style={{ left: `${arrowMargin}px` }}
          onClick={() => handleTrack("left")}
        >
          <IconArrow direction="left" />
        </button>

        <button
          className={position !== left && !isTransition ? "" : styles.hidden}
          style={{ right: `${arrowMargin}px` }}
          onClick={() => handleTrack("right")}
        >
          <IconArrow direction="right" />
        </button>

        <div ref={refContainer} className={styles.track}>
          <motion.div
            ref={refTrack}
            drag="x"
            onWheel={(e) => {
              if (isWheel) handleTrack(null, e);
            }}
            dragConstraints={{ left, right: 0 }}
            onDragStart={() => {
              setIsDrag(true);
              setIsTransition(true);
              console.log(x.get());
            }}
            onDragEnd={() => setIsDrag(false)}
            onTransitionEnd={() => setPosition(x.get())}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 50 }}
            onDragTransitionEnd={() => handleTransition()}
            onLayoutMeasure={(box) => {
              if (!isInit) initBox(box.x.max - box.x.min);
            }}
            dragElastic={0.1}
            style={{
              position: "absolute",
              transition: !isTransition ? "0.2s linear" : "none",
              x,
            }}
          >
            <div
              style={{
                display: "flex",
                marginTop: `${titleMargin}px`,
                pointerEvents: isDrag ? "none" : "all",
              }}
            >
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
