import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { FaTimesCircle } from "react-icons/fa";
import BidValue from "../bid-value";

import ErrorText from "./error-text";
import { bidBuyError, validateQuantity } from "../../utils/common";
import { bidSaleCancelApi, buySaleCancelApi } from "../../api/methods";

import "./style.scss";

const NFTCancelTheSale = ({
  cancelTheSalePop = false,
  setCancelTheSalePop,
  nft,
  isOwner,
  orderDetails,
}) => {
  const history = useHistory();
  const { user } = useSelector((state) => state.user.data);
  const [success, setSuccess] = useState(false);
  const [bidCancel, setBidCancel] = useState(false);
  const [buyCancel, setBuyCancel] = useState(false);
  const [cancelQuantity, setCancelQuantity] = useState("");
  const erc721 = nft.nft_type === "erc721";

  const [error, setError] = useState({
    isError: false,
    errorTitle: "",
    errorDescription: "",
  });

  const handleBidCancel = async () => {
    try {
      const result = await bidSaleCancelApi({
        order_slug: isOwner && nft.owner_details.orders[0].slug,
      });
      if (result.data.success) {
        setSuccess(true);
      }
    } catch (error) {
      if (error.response.data.status === 422) {
        const err = bidBuyError(error.response.data.fail_status);
        setError({
          ...error,
          isError: true,
          progressError: "error-progress",
          errorTitle: err.title,
          errorDescription: err.description,
        });
      }
    }
  };

  const handleBuyCancel = async () => {
    try {
      const result = await buySaleCancelApi({
        order_slug: orderDetails.slug,
        order: { quantity: erc721 ? 1 : cancelQuantity },
      });
      if (result.data.success) {
        setSuccess(true);
      }
    } catch (error) {
      if (error.response.data.status === 422) {
        const err = bidBuyError(error.response.data.fail_status);
        setError({
          ...error,
          isError: true,
          progressError: "error-progress",
          errorTitle: err.title,
          errorDescription: err.description,
        });
      }
    }
  };

  const handleQuantityInputChange = (e) => {
    if (e.target.value) {
      if (
        validateQuantity(e.target.value) &&
        e.target.value <= orderDetails.available_quantity &&
        e.target.value !== 0
      ) {
        setCancelQuantity(e.target.value);
      }
    } else {
      setCancelQuantity(e.target.value);
    }
  };
  return (
    <Offcanvas
      show={cancelTheSalePop}
      onHide={() => setCancelTheSalePop(!cancelTheSalePop)}
      placement="end"
      className="w-100 w-md-50 w-lg-42"
    >
      <Offcanvas.Body className="p-0 pop-body-container">
        {user ? (
          <>
            <div className="pop-nft-details">
              {!success ? (
                !erc721 ? (
                  <>
                    <div className="pop-head-content">
                      <div className="pop-bid-title">Cancel the sale</div>
                      <div
                        className="close-button-pop"
                        onClick={() => setCancelTheSalePop(!cancelTheSalePop)}
                      >
                        <img
                          alt="place bid logo"
                          src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e"
                        ></img>
                      </div>
                    </div>
                    <div class="pop-bid-progress ">
                      <div class="progress-complete"></div>
                    </div>
                    <div className="pop-bid-bodyContent px-4">
                      <div className={`input-bid-container mt-5 mb-5`}>
                        <div className="input-field-bid px-0">
                          <label className="input-bid-text">
                            No of units to cancel sale
                          </label>
                          <div className="input-quantity-container bid-input">
                            <input
                              type="text"
                              className="input-quantity"
                              value={cancelQuantity}
                              placeholder="0 NFTs"
                              onChange={handleQuantityInputChange}
                            />
                            <span className="bid-currency">
                              /{orderDetails.available_quantity}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* <div className="d-flex">
                        <BidValue title="Artist fee" value={"10 %"} />
                        <BidValue title="Service fee" value={"10 %"} />
                      </div>
                      <hr className="custom-divider" /> */}
                    </div>
                    <div className="bottom-area">
                      <h5 className="text-center">
                        Are you sure want to cancel the sale?
                      </h5>

                      <div className="bottom-content-pop">
                        <div className="back-button">Cancel</div>
                        <div className="place-bid-button">
                          <button
                            className={`btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop`} //process -> proccessing
                            onClick={handleBuyCancel}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pop-head-content">
                      <div className="pop-bid-title">Cancel the sale</div>
                      <div
                        className="close-button-pop"
                        onClick={() => setCancelTheSalePop(!cancelTheSalePop)}
                      >
                        <img
                          alt="place bid logo"
                          src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e"
                        ></img>
                      </div>
                    </div>

                    {/* error-progress -> error progress , loading -> progressing */}
                    <div
                      className={`pop-bid-progress ${success ? "error" : ""}`}
                    >
                      <div className="progress-complete"></div>
                    </div>

                    <div className="sucess-title">
                      <FaTimesCircle color={"#f21e00"} size={60} />
                      <div className="message mt-3">
                        Are you sure want to cancel the {buyCancel && "Buy "}
                        {bidCancel && "Bid "}
                        sale
                      </div>
                    </div>

                    {/* <div className="pop-bid-bodyContent">
                    <div className="error-float-container">
                      {error && (
                        <ErrorText
                          handleClick={() =>
                            setError({
                              ...error,
                              isError: false,
                              progressError: "",
                            })
                          }
                          type="error"
                          title={error.errorTitle}
                          desc={error.errorDescription}
                        />
                      )}
                    </div>
                  </div> */}
                    {!buyCancel && !bidCancel && (
                      <div className="bottom-area">
                        <div className="bottom-content-pop">
                          <div className="place-bid-button">
                            {/* {(()=>{
                              if (orderDetails) {
                                
                              }
                            })()} */}
                            <button
                              className={`btn btn-outline-dark text-center btn-lg w-75 me-3 rounded-pill place-bid-btn-pop `} //process -> proccessing
                              onClick={() => setBuyCancel(!buyCancel)}
                            >
                              Buy Cancel
                            </button>
                            <button
                              className={`btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop `} //process -> proccessing
                              onClick={() => setBidCancel(!bidCancel)}
                            >
                              Bid Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {buyCancel && (
                      <div className="bottom-area">
                        <div className="bottom-content-pop">
                          <div
                            className={`back-button`} //process -> proccessing
                            onClick={() => {
                              setBuyCancel(!buyCancel);
                              setCancelTheSalePop(!cancelTheSalePop);
                            }}
                          >
                            No
                          </div>
                          <div className="place-bid-button">
                            <button
                              className={`btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop `} //process -> proccessing
                              onClick={handleBuyCancel}
                            >
                              Yes
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {bidCancel && (
                      <div className="bottom-area">
                        <div className="bottom-content-pop">
                          <div
                            className={`back-button`} //process -> proccessing
                            onClick={() => {
                              setBidCancel(!bidCancel);
                              setCancelTheSalePop(!cancelTheSalePop);
                            }}
                          >
                            No
                          </div>
                          <div className="place-bid-button">
                            <button
                              className={`btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop `} //process -> proccessing
                              onClick={handleBidCancel}
                            >
                              Yes
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )
              ) : (
                <>
                  <div className="sucess-title">
                    <FaTimesCircle color={"#f21e00"} size={60} />
                    <div className="message mt-3">
                      Your NFT sale has been Removed
                    </div>
                  </div>

                  <div className="bottom-area">
                    <div className="bottom-content-pop">
                      <div className="place-bid-button">
                        <button
                          className="btn btn-dark text-center btn-lg w-75 rounded-pill place-bid-btn-pop "
                          onClick={() => history.push("/")}
                        >
                          Okay
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="pop-nft-details">
              <div className="pop-head-content">
                <div className="pop-bid-title">
                  {/* {erc721 ? "Sign in to place a bid" : "Sign in to place a buy"} */}
                </div>
                <div
                  className="close-button-pop"
                  onClick={() => setCancelTheSalePop(!cancelTheSalePop)}
                >
                  {/* <BiX
                    role="button"
                    size={45}
                    onClick={() => setCancelTheSalePop(!cancelTheSalePop)}
                  /> */}
                  <img
                    alt="bid logo"
                    src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e"
                  ></img>
                </div>
              </div>
              <div className="pop-signin">
                <div className="pop-signin-title text-center mb-1">
                  {erc721 ? "Sign in to place a bid" : "Sign in to place a buy"}
                </div>
                <div className="pop-nft-media">
                  <button
                    className="btn btn-dark text-center btn-lg mt-2 rounded-pill place-bid-btn"
                    onClick={() =>
                      window.open(
                        `${process.env.REACT_APP_ACCOUNTS_URL}/signin?redirect=${window.location.href}`,
                        "_self"
                      )
                    }
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default NFTCancelTheSale;
