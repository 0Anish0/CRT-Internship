import { styled, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

import image1 from "../../Assets/image1.jpg";
import image2 from "../../Assets/image2.jpg";
import image3 from "../../Assets/image3.jpg";
import image4 from "../../Assets/image4.jpg";

const SliderContainer = styled(Box)`
  margin: auto;
  padding-top: 5px;
  width: 99%;
  height: 50vh;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 6px 5px 4px rgb(255 225 1/ 0.6);
  margin-bottom: 25px;
`;

const SliderImages = styled(Box)`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const SliderImage = styled(Box)`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

const SliderButton = styled("div")`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 24px;
  padding: 10px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const PrevButton = styled(SliderButton)`
  left: 0;
`;

const NextButton = styled(SliderButton)`
  right: 0;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: white;
  font-weight: bolder;
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const SubHeading = styled(Typography)`
  font-size: 22px;
  background: #ffffff;
  padding: 3px 5px;
  border-radius: 6px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const BlogHubStyle = styled("span")`
  background: linear-gradient(45deg, #2196f3, #ff5722);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
`;

const Banner = () => {
  const images = [image1, image2, image3, image4];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <SliderContainer>
      <SliderImages
        style={{
          transform: `translateX(${-currentSlide * 25}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((image, index) => (
          <SliderImage key={index}>
            <img src={image} alt={`Slide ${index}`} style={{ width: "100%"}} />
          </SliderImage>
        ))}
      </SliderImages>
      <PrevButton onClick={prevSlide}>❮</PrevButton>
      <NextButton onClick={nextSlide}>❯</NextButton>
      <Heading>BlogHub</Heading>
      <SubHeading>
        Welcome to <BlogHubStyle>BlogHub</BlogHubStyle> - Where Ideas Flourish!
      </SubHeading>
    </SliderContainer>
  );
};

export default Banner;
