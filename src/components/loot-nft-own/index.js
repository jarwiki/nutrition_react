import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { Modal, Table } from "react-bootstrap";
import { BiX } from "react-icons/bi";

import BidName from "../bid-history/bid-name";
import userImg from "../../images/user_1.png";
import { nftBidHistory } from "../../api/methods";
import { currencyFormat } from "../../utils/common";
import { TableLoader } from "../nft-basic-details/content-loader";
import "./style.scss";

const LootNFTOwn = ({ data }) => {
  return (
    <>
      <div className="bid-winner">
        <div className="winner-title">
          <div className="winner-text">WINNER</div>
        </div>

        <div className="winner-user-details">
          <img alt="" src={userImg} />
          <div className="winner-id">{"User"}</div>
        </div>

        <div className="nft-sold-details">
          <div className="sold-for">
            <div className="sold-for-title">NFT sold for</div>
            <div className="sold-for-value">{currencyFormat(10, "USD")}</div>
          </div>
          <div className="sold-on">
            <div className="sold-on-title">NFT sold on</div>
            <div className="sold-on-value">
              {dayjs(new Date()).format("MMM D, YYYY hh:mm A")}
            </div>
          </div>
        </div>

        <div className="nft-lastbid-details">
          <div className="lastbid-left">
            <div className="lastbid-title">Last Bid</div>
            <div className="lastbid-value">{currencyFormat(10, "USD")}</div>
          </div>
          <div className="lastbid-right">
            <div className="lastbid-date-title">Last Bid Date</div>
            <div className="lastbid-date-value">
              {dayjs(new Date()).format("MMM D, YYYY hh:mm A")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LootNFTOwn;
