import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";

import bannerMiddleware from "../../Redux/Banner/bannerMiddleware";
import { BASE_URL } from "../../Utilities/Utilities";
import "./MovieBanner.css";

function MovieBanner() {
  const dispatch = useDispatch();
  const { banner, loading } = useSelector((state) => state.bannerState);
  console.log("MovieBanner", banner, loading);
  useEffect(() => {
    dispatch(bannerMiddleware());
  }, []);
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
