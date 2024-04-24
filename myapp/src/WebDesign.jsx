import React from "react";
import { useEffect, useState, useRef } from "react";
import "./WebDesign.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function WebDesign() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://krds-assignment.github.io/aoc/api-assets/data.json")
      .then((response) => response.json())
      .then((data) => setData(data.features))
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <>
      <div className="row webdesign">
        {data.map((item) => (
          <div className="col-4">
            <div className="block-col">
              <div className="block-one">
                <img className="logo" src={item.logo} alt="Img" />
                <h4 className="headline">{item.title}</h4>
                <div className="border"></div>
                <h4 className="subHeadline">{item.desc}</h4>
              </div>
              <div className="block-two">
                <img className="image" src={item.image} alt="Img" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Carousel>
        {data.map((item) => (
          <div className="col-4">
            <div className="block-col">
              <div className="block-one">
                <img className="logo" src={item.logo} alt="Img" />
                <h4 className="headline">{item.title}</h4>
                <div className="border"></div>
                <h4 className="subHeadline">{item.desc}</h4>
              </div>
              <div className="block-two">
                <img className="image" src={item.image} alt="Img" />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
