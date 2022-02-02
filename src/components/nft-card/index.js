import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useHistory } from "react-router-dom";
import { prominent } from "color.js";
import { currencyFormat } from "../../utils/common";
import sample from "../../images/sampleNFT.jpg";

import "./style.scss";

const NFTCard = ({ nft, ownedCard = false, recentSold = false }) => {
  const erc721 = nft?.nft_type === "erc721";
  const history = useHistory();
  const [bgColor, setBgColor] = useState();

  // useEffect(() => {
  //   if (nft?.asset_type?.includes("image")) {
  //     getBgColor(nft?.asset_url);
  //   } else if (nft?.cover_url) {
  //     getBgColor(nft?.cover_url);
  //   } else {
  //     getBgColor(nft?.asset_url);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const getBgColor = async (input) => {
  //   if (input) {
  //     const image = nft.asset_type.includes("image")
  //       ? nft.asset_url
  //       : nft.cover_url
  //       ? nft.cover_url
  //       : nft.asset_url;
  //     const color = await prominent(image, { amount: 1 });
  //     if (nft.asset_type.includes("image")) {
  //       setBgColor(`rgb(${color[0]},${color[1]},${color[2]},0.3)`);
  //     } else {
  //       setBgColor(`#020001`);
  //     }
  //   } else {
  //     setBgColor(`rgb(0,0,0,0.1)`);
  //   }
  // };

  // const handleClick = () => {
  //   if (nft?.is_on_sale) {
  //     history.push(`/order/details/${nft?.slug}/${nft?.order_details?.slug}`);
  //   } else if (recentSold) {
  //     history.push(`/order/details/${nft?.slug}/${nft?.order_slug}`);
  //   } else {
  //     history.push(`/details/${nft?.slug}`);
  //   }
  // };

  return (
    <a
      className="more-card"
      role="link"
      href={
        nft?.is_on_sale
          ? `/order/details/${nft?.slug}/${nft?.order_details?.slug}`
          : recentSold
          ? `/order/details/${nft?.slug}/${nft?.order_slug}`
          : `/details/${nft?.slug}`
      }
      // onClick={handleClick}
    >
      <span className="nft-type-badge">{nft.nft_type.toUpperCase()}</span>
      <img
        // style={{ background: bgColor }}
        alt="media logo"
        src={(() => {
          if (nft?.asset_type?.includes("image")) {
            return nft.asset_url ? nft.asset_url : sample;
          } else if (nft?.cover_url) {
            return nft.cover_url ? nft.cover_url : sample;
          } else {
            return nft.asset_url ? nft.asset_url : sample;
          }
        })()}
        role="button"
      />

      <div className="top-content-title">
        <div>
          <div className="more-nft-title">{nft?.name}</div>
          {nft?.owner_name && (
            <div className="more-nft-desc">{nft?.owner_name}</div>
          )}
          {recentSold && nft?.seller?.user_name && (
            <div className="more-nft-desc">{nft?.seller?.user_name}</div>
          )}
        </div>
        {nft?.is_on_sale && (
          <>
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
                  })()}
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
        {ownedCard && nft?.quantity && (
          <>
            <div className="more-bid-details">
              <div className="text-start"></div>
              <div className="text-end">
                <div className="mb-title text-secondary">Owned</div>
                <div className="mb-value">{nft?.quantity}</div>
              </div>
            </div>
          </>
        )}
        {recentSold && (
          <>
            <div className="more-bid-details">
              <div className="text-start">
                <div className="mb-title text-secondary">Sold For</div>
                <div className="mb-value">
                  {currencyFormat(nft?.amount, "USD")}
                </div>
              </div>
              <div className="text-end">
                <div className="mb-title text-secondary">Sold On</div>
                <div className="mb-value">
                  {dayjs(nft?.created_at).format("MMM D, YYYY hh:mm A")}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </a>
  );
};

export default NFTCard;
