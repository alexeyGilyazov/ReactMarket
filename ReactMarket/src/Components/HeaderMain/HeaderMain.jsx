import "./HeaderMain.css";
import Slider from "../Slider/Slider";
import img1 from "../../img/headerMainImgSmall1.png";
import img2 from "../../img/headerMainImgSmall2.png";
import img3 from "../../img/headerMainImgSmall3.png";
import { useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function HeaderMain() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    { src: img1, alt: "image 1" },
    { src: img2, alt: "image 2" },
    { src: img3, alt: "image 3" },
  ];

  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(30px)"],
  );

  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

  return (
    <section>
      <motion.div className="headerMain" style={{ filter, scale }}>
        <h1 className="headerMain__title">
          Your Daily <br />
          <span className="headerMain__title red">Podcast</span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="headerMain__description"
        >
          We cover all kinds of categories and <br /> a weekly special guest.
        </motion.p>
        <div className="headerMain__images">
          {images.map((img, index) => (
            <img
              key={index}
              className={`headerMain__image_${index + 1} star ${index === activeIndex ? "active" : ""}`}
              src={img.src}
              alt={img.alt}
            />
          ))}
        </div>
      </motion.div>
      <Slider />
    </section>
  );
}
