import { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./GridMotion.css";
import React from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { COLORS } from "../../constants/colors";

const GridMotion = ({ items }: { items: (string | JSX.Element)[] }) => {

  const gradientColor = "black"
  const gridRef = useRef(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]); // Array of refs for each row
  const mouseXRef = useRef(window.innerWidth / 2);

  const { theme } = useContext(ThemeContext)
  const themeColor = theme === "dark" ? COLORS.dark : COLORS.light ; // Set the background color based on the theme

  // Ensure the grid has 28 items (4 rows x 7 columns) by default
  const totalItems = 28;
  const defaultItems = Array.from(
    { length: totalItems },
    (_, index) => `Item ${index + 1}`,
  );
  const combinedItems =
    items.length > 0 ? items.slice(0, totalItems) : defaultItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8; // Base duration for inertia
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2]; // Different inertia for each row, outer rows slower

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount =
            ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
              maxMoveAmount / 2) *
            direction;

          // Apply inertia and staggered stop
          gsap.to(row, {
            x: moveAmount,
            duration:
              baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeAnimationLoop(); // Properly remove the ticker listener
    };
  }, []);

  return (
    <div className="noscroll loading" ref={gridRef}>
      <section
        className="intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="gridMotion-container">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="rows"
              ref={(el) => (rowRefs.current[rowIndex] = el)} // Set each row's ref
            >
              {[...Array(7)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 7 + itemIndex];
                return (
                  <div key={itemIndex} className="row__item">
                    <div
                      className="row__item-inner"
                      style={{ backgroundColor: themeColor.background, position: 'relative' }}
                    >
                      {typeof content === "string" &&
                      content.startsWith("http") ? (
                        <div
                          className="row__item-img"
                          style={{
                            backgroundImage: `url(${content})`,
                            width: '100%',
                            overflow: "hidden",
                            position: 'absolute',
                          }}
                        ></div>
                      ) : (
                        <div className="row__item-content" style={{
                          width: '100%',
                          height: '100%',
                          overflow: "hidden",
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                        }}>{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="fullview"></div>
      </section>
    </div>
  );
};

export default GridMotion;
