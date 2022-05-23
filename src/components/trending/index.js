import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { toast } from "react-toastify";
import ContentLoader from "react-content-loader";
import { trendingNFTsApi } from "../../api/methods";
import CollectionCard from "../nft-more/nft-card";

import { useHistory } from "react-router-dom";

import frontArrow from "../../images/jump-trade/front-arrow.png";
import backArrow from "../../images/jump-trade/back-arrow.png";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./style.scss";

const Trending = () => {
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [hasNext, setHasNext] = useState(false);

  useEffect(() => {
    trendingNFTList(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const trendingNFTList = async (page) => {
    try {
      setLoading(true);
      let response = await trendingNFTsApi(page);

      setList([...list, ...response.data.data.nfts]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(
        "The request could not be processed at this time. Please try again."
      );
    }
  };

  return (
    <>
      {list.length >= 4 && (
        <section className="trending-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="sec-heading trending-heading">
                  <span className="title">WHAT'S TRENDING</span>
                </div>

                {!loading ? (
                  <div className="row">
                    {list.length > 0 ? (
                      <>
                        <OwlCarousel
                          className="owl-theme"
                          margin={20}
                          nav
                          smartSpeed={500}
                          dots={false}
                          navContainerClass={"carousel-btn-block"}
                          // navText={[
                          //   `<span class="icon-right-arrow left"><img src=${arrowRight} /></span>`,
                          //   `<span class="icon-right-arrow right"><img src=${arrowRight} /></span>`,
                          // ]}
                          navText={[
                            `<span class="icon-right-arrow left"> <img src=${backArrow} /> </span>`,
                            `<span class="icon-right-arrow right"><img src=${frontArrow} /></span>`,
                          ]}
                          responsive={{
                            0: {
                              items: 1,
                            },
                            768: {
                              items: 2,
                            },
                            800: {
                              items: 3,
                            },
                            1024: {
                              items: 4,
                            },
                            1200: {
                              items: 4,
                            },
                            1541: {
                              items: 4,
                            },
                          }}
                        >
                          {list.map((nft, i) => (
                            <CollectionCard
                              key={`trending-${i}`}
                              nft={nft}
                              recentSold={false}
                              favouriteNFT={false}
                            />
                          ))}
                        </OwlCarousel>
                        {list.length > 4 && (
                          <span
                            className="viewallBtnliveaction trend-btn"
                            onClick={() =>
                              history.push("/nft-marketplace/trending-nfts")
                            }
                          >
                            View all
                          </span>
                        )}
                      </>
                    ) : (
                      <div className="col-12 text-center">
                        <h3 className="my-3">
                          You'll Soon See A Trending NFTs!
                        </h3>
                      </div>
                    )}
                  </div>
                ) : (
                  <NFTCardLoader />
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

const NFTCardLoader = (props) => (
  <ContentLoader
    viewBox="0 50 900 300"
    width={"100%"}
    height={"100%"}
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    className="mt-1"
    {...props}
  >
    <rect x="0" y="5" rx="2" ry="2" width="218" height="280" />
    <rect x="228" y="5" rx="2" ry="2" width="218" height="280" />
    <rect x="456" y="5" rx="2" ry="2" width="218" height="280" />
    <rect x="684" y="5" rx="2" ry="2" width="218" height="280" />
  </ContentLoader>
);

export default Trending;
