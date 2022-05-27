import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { useRouteMatch, Link } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { currencyFormat } from "../../utils/common";
import { add_to_cart_thunk } from "../../redux/thunk/user_cart_thunk";
import NFTCounter from "../nft-counter";
import images from "../../utils/images.json";
import "./style.scss";

const CollectionCard = ({ nft, recentSold = false, favouriteNFT = false }) => {
  const erc721 = nft?.nft_type === "erc721";
  const { search } = useRouteMatch().params;
  //const [bgColor, setBgColor] = useState();
  //const [auctionEndTime, setAuctionEndTime] = useState("");
  const [isAuctionStarted, setIsAuctionStarted] = useState(false);
  const [isAuctionEnded, setIsAuctionEnded] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => state);
  const [inCart, setInCart] = useState(false);
  const userSlug = user.data?.user ? user.data?.user?.slug : null;
  const userCart = cart?.data ? cart?.data : null;

  useEffect(() => {
    if (nft?.order_details?.timed_auction) {
      setIsAuctionStarted(
        new Date(nft?.time).getTime() >=
          new Date(nft?.order_details?.auction_start_time).getTime()
      );
      setIsAuctionEnded(
        new Date(nft?.time).getTime() >
          new Date(nft?.order_details?.auction_end_time).getTime()
      );
      setShowTimer(true);
    }
    if (favouriteNFT && nft?.timed_auction) {
      setIsAuctionStarted(
        new Date(nft?.time).getTime() >=
          new Date(nft?.auction_start_time).getTime()
      );
      setIsAuctionEnded(
        new Date(nft?.time).getTime() >
          new Date(nft?.auction_end_time).getTime()
      );
      setShowTimer(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAuctionStartTimer = () => {
    setIsAuctionStarted(true);
    // setAuctionEndTime(nft?.order_details?.auction_end_time);
  };
  const handleAuctionEndTimer = () => {
    setIsAuctionEnded(true);
  };

  const level = [
    {
      type: "1",
      name: "LVL 1",
      value: images.level1,
    },
    {
      type: "2",
      name: "LVL 2",
      value: images.level2,
    },
    {
      type: "3",
      name: "LVL 3",
      value: images.level3,
    },
    {
      type: "4",
      name: "LVL 4",
      value: images.level4,
    },
    {
      type: "5",
      name: "LVL 5",
      value: images.level5,
    },
    {
      type: "6",
      name: "LVL 6",
      value: images.level6,
    },
    {
      type: "7",
      name: "LVL 7",
      value: images.level7,
    },
    {
      type: "8",
      name: "LVL 8",
      value: images.level8,
    },
    {
      type: "9",
      name: "LVL 9",
      value: images.level9,
    },
    {
      type: "10",
      name: "LVL 10",
      value: images.level10,
    },
    {
      type: "11",
      name: "LVL 11",
      value: images.level11,
    },
    {
      type: "12",
      name: "LVL 12",
      value: images.level12,
    },
    {
      type: "13",
      name: "LVL 13",
      value: images.level13,
    },
    {
      type: "14",
      name: "LVL 14",
      value: images.level14,
    },
    {
      type: "15",
      name: "LVL 15",
      value: images.level15,
    },
  ];

  const role = [
    {
      type: "Batsman",
      name: "BATSMAN",
      value: images.batsmanICO,
    },
    {
      type: "Bowler",
      name: "BOWLER",
      value: images.bowlerIco,
    },
    {
      type: "Bat",
      name: "BAT",
      value: images.batsmanICO,
    },
  ];

  const playerCategory = [
    {
      type: "ROOKIE",
      value: "RO",
      color: "#3b56ff",
    },
    {
      type: "RARE",
      value: "RA",
      color: "#f58220",
    },
    {
      type: "EPIC",
      value: "EP",
      color: "#9e6cef",
    },
    {
      type: "LEGEND",
      value: "LG",
      color: "linear-gradient(202deg, #e2ff00, #18e0e0, #e8318d)",
    },
    {
      type: "SUPER RARE",
      value: "SR",
      color: "#803cef",
    },
    {
      type: "ULTRA RARE",
      value: "UR",
      color: "#803cef",
    },
    {
      type: "IMMORTAL",
      value: "IM",
      color: "#803cef",
    },
  ];

  const levelData = level.find(
    (obj) => obj.type === nft?.core_statistics?.level?.value
  );
  const roleData = role.find(
    (obj) => obj.type === nft?.core_statistics?.role?.value
  );
  const playerCatData = playerCategory.find(
    (obj) => obj.type === nft?.core_statistics?.category?.value
  );

  // const handleAddToCart = () => {
  //   dispatch(add_to_cart_thunk(nft?.order_details?.slug, nft?.quantity));
  // };

  useEffect(() => {
    if (userSlug) {
      const orderSlug = userCart?.line_items.find(
        (obj) => obj.order_slug === nft?.order_details?.slug
      );
      if (orderSlug) {
        setInCart(true);
      } else {
        setInCart(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCart]);

  const KycPopOver = () => (
    <Popover>
      <Popover.Body>
        <p className="password-terms">
          Please complete your KYC process to be eligible for purchasing NFTs.
        </p>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="more-card jt-card">
      <span className="nft-type-badge">{nft.nft_type.toUpperCase()}</span>
      <article className={`player_stats `}>
        {roleData && (
          <div className="player-type">
            <img src={roleData?.value} alt="Player-status" loading="lazy" />
          </div>
        )}

        {playerCatData && (
          <div
            className="player-range"
            style={{
              borderBottom: levelData ? "0.1rem solid #fff" : "none",
            }}
          >
            <span
              className="band"
              style={{
                background: playerCatData?.color ? playerCatData?.color : "",
              }}
            >
              {playerCatData?.value}
            </span>
          </div>
        )}

        {levelData && (
          <div className="player-level">
            <h6>{levelData?.name}</h6>
            <img src={levelData?.value} alt="Player-level" loading="lazy" />
          </div>
        )}
      </article>
      <Link
        to={(() => {
          if (favouriteNFT) {
            return search
              ? `/${search}/order/details/${nft?.slug}/${nft?.order_slug}`
              : `/order/details/${nft?.slug}/${nft?.order_slug}`;
          } else if (nft?.is_on_sale) {
            return search
              ? `/${search}/order/details/${nft?.slug}/${nft?.order_details?.slug}`
              : `/order/details/${nft?.slug}/${nft?.order_details?.slug}`;
          } else if (recentSold) {
            return search
              ? `/${search}/order/details/${nft?.slug}/${nft?.order_slug}`
              : `/order/details/${nft?.slug}/${nft?.order_slug}`;
          } else {
            return search
              ? `/${search}/details/${nft?.slug}`
              : `/details/${nft?.slug}`;
          }
        })()}
      >
        <img
          // style={{ background: bgColor }}
          alt="media logo"
          src={(() => {
            if (nft?.asset_type?.includes("image")) {
              return nft.asset_url ? nft.asset_url : images.sample;
            } else if (nft?.cover_url) {
              return nft.cover_url ? nft.cover_url : images.sample;
            } else {
              return nft.asset_url ? nft.asset_url : images.sample;
            }
          })()}
          role="button"
          loading="lazy"
        />
      </Link>

      <div className="top-content-title">
        {/* <div className="heart_box">
          <div className="svg_size filled_heart_icon"></div> */}

        {/* <div className="svg_size heart_icon"></div> */}
        {/* </div> */}
        {userSlug &&
          nft?.is_on_sale &&
          nft?.order_details?.is_buy &&
          nft?.owner_slug !== userSlug && (
            <>
              {user?.data?.user?.kyc_status !== "success" ? (
                <OverlayTrigger
                  trigger={["click"]}
                  rootClose={true}
                  placement="top"
                  overlay={KycPopOver()}
                >
                  <div className="cart_box">
                    <div className="svg_size cart_icon"></div>
                    <span className="cart_text">Add To Cart</span>
                  </div>
                </OverlayTrigger>
              ) : (
                <div
                  className={`cart_box ${inCart && "add_cart"}`}
                  onClick={() => {
                    if (!inCart) {
                      dispatch(
                        add_to_cart_thunk(
                          nft?.order_details?.slug,
                          nft?.quantity
                        )
                      );
                    }
                  }}
                >
                  <div className="svg_size cart_icon"></div>
                  <span className="cart_text">
                    {!inCart ? "Add To Cart" : "Added To Cart"}
                  </span>
                </div>
              )}
            </>
          )}

        <div>
          {nft?.owner_name && (
            <div className="more-nft-desc">{nft?.owner_name}</div>
          )}
          {recentSold && nft?.seller?.user_name && (
            <div className="more-nft-desc">{nft?.seller?.user_name}</div>
          )}
          <div className="more-nft-title">{nft?.name}</div>

          <h6 className="nft-signature">
            {nft?.signed_by?.length > 0 ? (
              <>
                <span>Signed by </span> {nft?.signed_by[0]}{" "}
                {nft?.signed_by?.length > 1 && <>&amp; {nft?.signed_by[1]}</>}
              </>
            ) : (
              <br />
            )}
          </h6>
        </div>

        {nft?.is_on_sale && (
          <>
            {nft?.order_details?.is_bid && nft?.order_details?.timed_auction && (
              <>
                {showTimer && (
                  <>
                    {!isAuctionStarted && !isAuctionEnded && (
                      <div className="time-counter-box">
                        <span className="time-counter-card">
                          <span className="time-title">Starts</span>
                          <NFTCounter
                            time={nft?.order_details?.auction_start_time}
                            cTime={nft?.time}
                            timeClass="font-onerem"
                            intervalClass="font-psevenrem"
                            intervalGapClass="me-1"
                            handleEndEvent={handleAuctionStartTimer}
                          />
                        </span>
                      </div>
                    )}
                    {!isAuctionEnded && isAuctionStarted && (
                      <div className="time-counter-box">
                        <span className="time-counter-card">
                          <span className="time-title">Ends</span>
                          <NFTCounter
                            time={nft?.order_details?.auction_end_time}
                            cTime={nft?.time}
                            timeClass="font-onerem"
                            intervalClass="font-psevenrem"
                            intervalGapClass="me-1"
                            handleEndEvent={handleAuctionEndTimer}
                          />
                        </span>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
            <div className="more-bid-details">
              <div className="text-start">
                <div className="mb-title text-secondary">
                  {(() => {
                    if (erc721) {
                      return nft?.order_details?.is_bid
                        ? "Bid Price"
                        : "Buy Price";
                    } else {
                      return "Buy Price";
                    }
                  })()}{" "}
                  {/* {nft?.order_details?.is_bid && 100 > 0 ? (
                  <span className="value-diff-range green">
                    <BiUpArrowAlt className="arrow-icon" />
                    {`${100}%`}
                  </span>
                ) : (
                  <span className="value-diff-range red">
                    <BiDownArrowAlt className="arrow-icon" />
                    {`${100}%`}
                  </span>
                )} */}
                </div>
                <div className="mb-value">
                  {(() => {
                    if (erc721) {
                      return nft?.order_details?.is_bid
                        ? currencyFormat(
                            nft?.order_details?.top_bid
                              ? nft?.order_details?.top_bid
                              : nft?.order_details?.minimum_bid,
                            "USD"
                          )
                        : currencyFormat(nft?.order_details?.buy_amount, "USD");
                    } else {
                      return currencyFormat(
                        nft?.order_details?.buy_amount,
                        "USD"
                      );
                    }
                  })()}
                </div>
              </div>
              {erc721 &&
                nft?.order_details?.is_bid &&
                nft?.order_details?.is_buy && (
                  <div className="text-end">
                    <div className="mb-title text-secondary">Buy Price</div>
                    <div className="mb-value">
                      {currencyFormat(nft?.order_details?.buy_amount, "USD")}
                    </div>
                  </div>
                )}
            </div>
          </>
        )}
        {recentSold && (
          <div className="more-bid-details">
            <div className="text-start">
              <div className="mb-title text-secondary">
                Sold For
                {/* {100 > 0 ? (
                  <span className="value-diff-range green">
                    <BiUpArrowAlt className="arrow-icon" />
                    {`${100}%`}
                  </span>
                ) : (
                  <span className="value-diff-range red">
                    <BiDownArrowAlt className="arrow-icon" />
                    {`${100}%`}
                  </span>
                )} */}
              </div>
              <div className="mb-value">
                {currencyFormat(nft?.amount, "USD")}
              </div>
            </div>
            <div className="text-end">
              <div className="mb-title-date text-secondary">Sold On</div>
              <div className="mb-value">
                {dayjs(nft?.created_at).format("MMM D, YYYY hh:mm A")}
              </div>
            </div>
          </div>
        )}
        {favouriteNFT && (
          <>
            {nft?.is_bid && nft?.timed_auction && (
              <>
                {showTimer && (
                  <>
                    {!isAuctionStarted && !isAuctionEnded && (
                      <div className="time-counter-box">
                        <span className="time-counter-card">
                          <span className="time-title">Starts</span>
                          <NFTCounter
                            time={nft?.auction_start_time}
                            cTime={nft?.time}
                            timeClass="font-onerem"
                            intervalClass="font-psevenrem"
                            intervalGapClass="me-1"
                            handleEndEvent={handleAuctionStartTimer}
                          />
                        </span>
                      </div>
                    )}
                    {!isAuctionEnded && isAuctionStarted && (
                      <div className="time-counter-box">
                        <span className="time-counter-card">
                          <span className="time-title">Ends</span>
                          <NFTCounter
                            time={nft?.auction_end_time}
                            cTime={nft?.time}
                            timeClass="font-onerem"
                            intervalClass="font-psevenrem"
                            intervalGapClass="me-1"
                            handleEndEvent={handleAuctionEndTimer}
                          />
                        </span>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
            <div className="more-bid-details">
              <div className="text-start">
                <div className="mb-title text-secondary">
                  {(() => {
                    if (erc721) {
                      return nft?.is_bid ? "Bid Price" : "Buy Price";
                    } else {
                      return "Buy Price";
                    }
                  })()}{" "}
                </div>
                <div className="mb-value">
                  {(() => {
                    if (erc721) {
                      return nft?.is_bid
                        ? currencyFormat(
                            nft?.top_bid ? nft?.top_bid : nft?.minimum_bid,
                            "USD"
                          )
                        : currencyFormat(nft?.buy_amount, "USD");
                    } else {
                      return currencyFormat(nft?.buy_amount, "USD");
                    }
                  })()}
                </div>
              </div>
              {erc721 && nft?.is_bid && nft?.is_buy && (
                <div className="text-end">
                  <div className="mb-title text-secondary">Buy Price</div>
                  <div className="mb-value">
                    {currencyFormat(nft?.buy_amount, "USD")}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CollectionCard;
