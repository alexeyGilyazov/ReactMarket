import "./HeaderMain.css";
import img1 from "../../img/headerMainImgSmall1.png";
import img2 from "../../img/headerMainImgSmall2.png";
import img3 from "../../img/headerMainImgSmall3.png";
import { useState, useEffect } from "react";

export default function HeaderMain() {
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <div className="headerMain">
      <h1 className="headerMain__title">
        Your Daily <br />
        <span className="headerMain__title red">Podcast</span>
      </h1>
      <p className="headerMain__description">
        We cover all kinds of categories and <br /> a weekly special guest.
      </p>
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
    </div>
  );
}
