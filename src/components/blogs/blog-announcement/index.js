import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import dayjs from "dayjs";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import blog1 from "../../../images/blog-banner.png";
import blog2 from "../../../images/blog-img1.png";
import blog3 from "../../../images/blog-img2.png";
import blog4 from "../../../images/blog-img3.png";
import { getBlogListApi, getBlogCattApi } from "../../../api/methods";

import { Interweave } from "interweave";

import "../style.scss";

const BlogAnnouncment = ({
  AnnouncementData = {},
  announcementSliderData = [],
  announcementSplitData = [],
}) => {
  const options = {
    loop: true,
    margin: 10,
    items: 3,
    nav: true,
    dots: false,
    autoplay: true,
    navText: [
      "<div class='nav-button owl-prev'><img src='https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/back-arrow.png' /></div>",
      "<div class='nav-button owl-next'><img src='https://cdn.guardianlink.io/product-hotspot/images/jump/jump-trade/front-arrow.png' /></div>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  // const GetSourceImage = async (input) => {
  //   const Filterdata = data?.data?.filter((data) => data.id == input);
  //   if (
  //     Array.isArray(Filterdata[0]?._embedded["wp:featuredmedia"]) &&
  //     Filterdata[0]?._embedded["wp:featuredmedia"].length > 0
  //   ) {
  //     console.log(
  //       Filterdata[0]?._embedded["wp:featuredmedia"]["0"]?.source_url
  //     );
  //     return Filterdata[0]?._embedded["wp:featuredmedia"]["0"]["media_details"][
  //       "sizes"
  //     ]["medium"]["source_url"];
  //   }
  //   return "";
  // };
  console.log(announcementSliderData);
  console.log(announcementSplitData);

  return (
    <section class="bg_green announcement ptb-100">
      <div class="container">
        <div className="row">
          <div className="col-sm-12 py-5">
            <h2 className="sectionTitle">ANNOUNCEMENTS</h2>
          </div>
        </div>
        <div class="row">
          {Object.keys(AnnouncementData).length && (
            <div class="col-md-9">
              <div class="book">
                <div class="f_book">
                  <img
                    src={
                      AnnouncementData?._embedded["wp:featuredmedia"]["0"][
                        "source_url"
                      ]
                    }
                  />
                </div>
                <div class="s_book">
                  <div class="content_book">
                    <span class="cat_1">ANNOUNCEMENT</span>
                    <h2>{AnnouncementData?.title?.rendered}</h2>
                    <Interweave content={AnnouncementData?.content?.rendered} />
                  </div>
                </div>
              </div>
            </div>
          )}
          {announcementSliderData.length && (
            <div class="col-md-3">
              {announcementSliderData?.map((item, i) => (
                <div class="book_xtra">
                  <span class="cat_1">ANNOUNCEMENT</span>
                  <h2>
                    <Interweave content={item?.title?.rendered} />
                  </h2>
                </div>
              ))}
            </div>
          )}
        </div>
        <div class="row">
          {announcementSplitData.length &&
            announcementSplitData?.map((item, i) => (
              <div class="col-lg-4">
                <h2>
                  <Interweave content={item?.title?.rendered} />
                </h2>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogAnnouncment;
