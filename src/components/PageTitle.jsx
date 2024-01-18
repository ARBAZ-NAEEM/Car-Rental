import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";

const PageTitle = (props) => {
  const { subHeading, heading, bgImg, gap, bgImgPosition, rotationInterval } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    // Rotate images automatically
    intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImg.length);
    }, rotationInterval || 5000);

    return () => {
      // Cleanup interval on component unmount
      clearInterval(intervalId);
    };
  }, [rotationInterval, bgImg.length]);

  const transitionStyle = {
    transition: "background-position 1s ease-in-out", // Adjust the duration and easing as needed
  };

  return (
    <div
      className="title-bar text-center text-light"
      style={{
        backgroundImage: `url(${bgImg[currentIndex]})`,
        backgroundSize: "cover",
        padding: gap,
        backgroundPosition: bgImgPosition || "center",
        ...transitionStyle,
      }}
    >
      <Container>
        {subHeading ? (
          <h4
            className="mb-0 subHeading"
            style={{ textTransform: "uppercase" }}
          >
            {subHeading}
          </h4>
        ) : null}
        <h1 className="mb-0">
          <span>{heading}</span>
        </h1>
      </Container>
    </div>
  );
};

export default PageTitle;
