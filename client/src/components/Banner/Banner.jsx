import React, { useState, useEffect, useRef } from "react";
import style from "./Banner.module.scss";
import { Link } from "react-router-dom";

const Banner = () => {
  const images = [
    require("../../assets/banner.png"),
    require("../../assets/banner2.jpg"),
    require("../../assets/banner3.jpg"),
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setCurrentImageIndex(
        (previousIndex) => (previousIndex + 1) % images.length
      );
    }, 3000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(timerRef.current);
    };
  }, [images.length]);

  return (
    <div className={style.banner}>
      <Link>
        <img
          className={style.bannerImg}
          src={images[currentImageIndex]}
          alt="banner"
        />
      </Link>
      <div className={style.dots}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`dot ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => {
              setCurrentImageIndex(index);
              startTimer();
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;