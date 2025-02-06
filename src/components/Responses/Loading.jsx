import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { LOADING_IMAGES } from "../../constants";

export default function Loading({ loading }) {
  const [currentImage, setCurrentImage] = useState("dancingmonkey1.png");

  useEffect(() => {
    //preload images
    LOADING_IMAGES.map((image) => {
      const img = new Image();
      img.src = image;
    });
    let interval;
    if (loading) {
      interval = setInterval(() => {
        const IMAGE_INDEX = Math.floor(Math.random() * LOADING_IMAGES.length);
        setCurrentImage(LOADING_IMAGES[IMAGE_INDEX]);
      }, 200);
    }

    return () => {
      clearInterval(interval);
    };
  }, [loading]);

  return (
    <div className="flex flex-col items-center">
      <img
        src={currentImage}
        alt="monkey"
        aria-hidden="true"
        className="h-[250px]"
      />
      <h3 className="text-[#74fce4] animate-pulse text-lg font-subhead">
        loading... Please wait.
      </h3>
    </div>
  );
}

Loading.propTypes = {
  loading: PropTypes.bool,
};
