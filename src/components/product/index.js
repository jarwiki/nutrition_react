import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getProductDetailsApi } from "../../api/base-methods";
import { add_to_cart_thunk } from "../../redux/thunk/user_cart_thunk";
import { useDispatch, useSelector } from "react-redux";
import { cart_on_thunk } from "../../redux/thunk/user_thunk";

const Product = ({ ProductDetails, key }) => {
  ///console.log(ProductDetails, "ProductDetails");
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, cart } = useSelector((state) => state);
  const userCart = cart?.data ? cart?.data : null;
  const [productData, setProductData] = useState(false);
  const [inCart, setInCart] = useState(false);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (user) {
      const orderSlug = userCart?.line_items?.find(
        (obj) => obj._id === ProductDetails?._id
      );
      if (orderSlug) {
        setInCart(true);
      } else {
        setInCart(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCart]);

  useEffect(() => {
    //console.log(status, "status");
    if (user?.login && status) {
      dispatch(cart_on_thunk());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const pageNaviagation = () => {
    if (ProductDetails?.isFree) {
      history.push(`/product/free/${ProductDetails?.slug}`);
    } else {
      history.push(`/product/${ProductDetails?.slug}`);
    }
  };

  return (
    <div
      class="product text-center product-with-qty cursor-pointer"
      style={{ cursor: "pointer" }}
      key={ProductDetails?._id}
      onClick={() => pageNaviagation()}>
      <figure class="product-media">
        {(() => {
          if (ProductDetails?.isFree) {
            return (
              <Link to={`/product/free/${ProductDetails?.slug}`}>
                <img
                  src={`${ProductDetails?.photos[0]}`}
                  alt="product"
                  class="img-fluid"
                  width="280"
                  height="315"
                />
              </Link>
            );
          } else {
            return (
              <Link to={`/product/${ProductDetails?.slug}`}>
                <img
                  //src={"http://54.177.7.240" + ProductDetails?.photos[0]}
                  src={`${ProductDetails?.photos[0]}`}
                  alt="product"
                  class="img-fluid"
                  width="280"
                  height="315"
                />
              </Link>
            );
          }
        })()}
        {productData?.discount > 0 && (
          <div class="product-label-group">
            <label class="product-label label-sale">
              {productData?.discount}% Off
            </label>
          </div>
        )}
      </figure>
      <div class="product-details">
        <h3 class="product-name">{ProductDetails?.name}</h3>

        <div className="product-price ls-md offer_price_details">
          <span className="price">Rs {ProductDetails?.saleAmount}</span>
          <span className="price line-through">
            Rs. {ProductDetails?.actualAmount}
          </span>
          {/* <!-- <span class="price base-color">25% off</span> --> */}
        </div>
        <div class="ratings-container">
          <div class="ratings-full">
            <span class="ratings" style={{ width: "100%" }}></span>
            <span class="tooltiptext tooltip-top"></span>
          </div>
        </div>
        {/* <!-- <div class="row">
                                    <div class="col-sm-12">
                                        <div class="product-action">
                                            <a href="#" class="btn-product btn-cart ls-l" data-toggle="modal" data-target="#addCartModal" title="Add to cart"><i class="d-icon-bag"></i><span>Add to cart</span></a>
                                        </div>
                                    </div>
                                </div> --> */}

        <div class="product-action">
          {user?.login ? (
            !ProductDetails?.isFree ? (
              <a
                //  href="#"
                class="btn-product btn-cart ls-l"
                data-toggle="modal"
                data-target="#addCartModal"
                title="Add to cart"
                onClick={() => {
                  // if (!inCart) {
                  //   dispatch(
                  //     add_to_cart_thunk(
                  //       ProductDetails._id,
                  //       "BASIC",
                  //       ProductDetails?.productType[0]?.saleAmount,
                  //       setStatus
                  //     )
                  //   );
                  // }
                  history.push(`/product/free/details/${ProductDetails?.slug}`);
                }}>
                <i class="d-icon-bag"></i>
                <span>Add to Bag</span>
              </a>
            ) : (
              <Link
                to={`/product/free/details/${ProductDetails?.slug}`}
                class="btn-product btn-cart ls-l">
                Add to Bag
              </Link>
            )
          ) : !ProductDetails?.isFree ? (
            <Link
              to={`/login?redirect=${process.env.REACT_APP_URL}/product/details/${ProductDetails?.slug}`}
              class="btn-product btn-cart ls-l">
              {" "}
              Add to Bag{" "}
            </Link>
          ) : (
            <Link
              to={`/product/free/details/${ProductDetails?.slug}`}
              class="btn-product btn-cart ls-l">
              Add to Bag
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Product;
