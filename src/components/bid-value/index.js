import React from "react";
import { useSelector } from "react-redux";

import userImg from "../../images/user_1.png";

import "./style.scss";

const BidValue = ({
  title,
  value,
  currency,
  status,
  isEnd = false,
  isLeft = false,
  isOwner = false,
  name,
  avatar,
  userSlug,
}) => {
  const { user } = useSelector((state) => state.user.data);
  return (
    <div className="current-bid">
      <div className="title">
        {title}
        {status && <span className="status-tag rounded-pill">{status}</span>}
      </div>
      <div className="value">
        {isEnd ? (
          <div className="user-detail">
            <img alt="" src={avatar ? avatar : userImg} />
            {userSlug ? (
              <div
                className="win-user-name"
                role={"button"}
                onClick={() => {
                  window.open(
                    user?.slug === userSlug
                      ? `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/profile`
                      : `${process.env.REACT_APP_ACCOUNTS_URL}/accounts/view/${userSlug}`
                  );
                }}
              >
                {name}
              </div>
            ) : (
              <div className="win-user-name">{name}</div>
            )}
          </div>
        ) : (
          <>
            <div className="crypto me-3">
              {currency} {value}
              {isLeft && <div className="edition">left</div>}
            </div>
            {isOwner && <div className="h2">Edition</div>}
          </>
        )}
      </div>
    </div>
  );
};

export default BidValue;
