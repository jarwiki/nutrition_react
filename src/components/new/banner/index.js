import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import useWindowSize from "../../../utils/useWindowSize";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";

const Banner = ({ bannerContent }) => {
  const { width } = useWindowSize();
  return (
    <>
      {bannerContent?.length > 0 &&
        (width > 767 ? (
          <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
          >
            {bannerContent
              ?.filter((BannerDetail) => !BannerDetail?.isMobile)
              .map((BannerDetail, key) => (
                <div key={key}>
                  <Link to={`/products/bannerlist/${BannerDetail._id}`}>
                    <figure>
                      <img src={`${BannerDetail?.image}`} alt="intro-banner" />
                    </figure>
                  </Link>
                </div>
              ))}
          </Carousel>
        ) : (
          <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
          >
            {bannerContent
              ?.filter((BannerDetail) => BannerDetail?.isMobile)
              .map((BannerDetail, key) => (
                <div key={key}>
                  <Link to={`/products/bannerlist/${BannerDetail._id}`}>
                    <figure>
                      <img src={`${BannerDetail?.image}`} alt="intro-banner" />
                    </figure>
                  </Link>
                </div>
              ))}
          </Carousel>
        ))}
    </>
  );
};

export default Banner;
