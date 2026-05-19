import { motion, useTransform } from "framer-motion";
import "./TickerLine.css";

function TickerLine({ items, offset, reverse }) {
  const direction = reverse ? -1 : 1;

  const x = useTransform(offset, (value) => -value * 0.2 * direction);

  return (
    <div className="ticker-container">
      <motion.div
        className="ticker-track"
        style={{
          x: x,
        }}
      >
        {items}
        {items}
      </motion.div>
    </div>
  );
}

export default TickerLine;
