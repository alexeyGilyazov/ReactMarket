import { useScroll, useTransform } from "framer-motion";
import TickerLine from "../TickerLine/TickerLine";
import "./Carousel.css";

export default function Carousel() {
  const { scrollY } = useScroll();
  const scrollProgress = useTransform(scrollY, (value) => value); // значение прокрутки

  const lines = [
    { text: "PodCast", reverse: false },
    { text: "Style", reverse: true },
    { text: "Studio", reverse: false },
    { text: "Design", reverse: true },
  ];

  return (
    <section className="wrapper">
      {lines.map((line, index) => (
        <TickerLine
          key={index}
          items={[
            <span className="text-solid">{line.text}</span>,
            <span className="text-outline">{line.text}</span>,
          ]}
          offset={scrollProgress}
          reverse={line.reverse}
        />
      ))}
    </section>
  );
}
