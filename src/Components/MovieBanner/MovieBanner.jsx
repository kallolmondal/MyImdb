import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE_URL } from "../../Utilities/utilities";

import "./MovieBanner.css";

function MovieBanner({banner}) {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <Slider {...settings}>
        {banner?.map((item, index) => {
          return (
            <div className="banner-container" key ={item.id}>
              <div>
                <img
                  className="banner-image"
                  src={BASE_URL + item.backdrop_path}
                />
              </div>
              <div>
                <h1>{item.original_title}</h1>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default MovieBanner;
