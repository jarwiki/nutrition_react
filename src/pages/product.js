import React, { useState, useEffect } from "react";
import ReactPixel from "react-facebook-pixel";
///import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

//import Banner from "../components/banner";
// import LiveAuctions from "../components/live-auctions";
// import Trending from "../components/trending";
// //import HotCollections from "../components/hot-collections";
//import TopBuyers from "../components/top-buyers";
//import TopSellers from "../components/top-sellers";
// import RecentlySoldNFT from "../components/recently-sold-nft";
// import ShowAll from "../components/show-all";
import { useHistory, useRouteMatch } from "react-router";

import { setCookiesByName, setCookies } from "../utils/cookies";
import { user_load_by_token_thunk } from "../redux/thunk/user_thunk";
import { nftCategoriesApi } from "../api/methods";
import useQuery from "../hook/useQuery";
//import FavouriteNFTs from "../components/favourite-NFTs";
// import HeroBanner from "../components/hero-banner";
// //import NewDropSection from "../components/new-drop-section";
// // import CollectionList from "../components/collection-list";
// import TrailerVideo from "../components/trailer-video";
// import MclGameLaunchTimer from "../components/mcl-game-launch-timer";
// import MclGameLaunchOne from "../components/mcl-game-launch-one";
// import MclGameLaunchTwo from "../components/mcl-game-launch-two";
// import LeaderBoard from "../components/leader-board";
// import MclCompletedTournaments from "../components/mcl-completed-tournaments";
// import MclTournaments from "../components/mcl-tournaments";
// import MclGameButton from "../components/mcl-game-button";

import Header from "../components/header";
import ProductDetails from "../components/new/product-details";
import {
  getProductDetailsApi,
  getProductDetailsSlugApi,
} from "../api/base-methods";
import Banner from "../components/new/banner";

import Footer from "../components/footer";

// import useQuery from "../hook/useQuery";

const NewHome = () => {
  const query = useQuery();
  const slug = query.get("slug");
  const { url } = useRouteMatch();
  const match = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  //let query = useQuery();
  const fsz = query.get("fsz");
  const token = query.get("token");
  const _ga = query.get("_ga");

  let { productid } = match.params;

  if (query.get("slug")) productid = query.get("slug");
  // console.log(productid, "productid");
  // const { user } = useSelector((state) => state.user.data);

  const [productData, setProductData] = useState({});
  const [subCategoryProducts, setSubCategoryProducts] = useState({});
  const [subCategory, setSubCategory] = useState({});

  // const [favPage, setFavPage] = useState(1);
  // const [favList, setFavList] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [favHasNext, setFavHasNext] = useState(false);

  const getProductDetails = async () => {
    try {
      setLoading(true);
      let response = await getProductDetailsSlugApi(productid);
      setProductData(response?.data?.responseData?.product);
      setSubCategoryProducts(response?.data?.responseData?.subcategoryProducts);
      setSubCategory(response?.data?.responseData?.categoryProducts[0]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    if (fsz) {
      sessionStorage.setItem("fsz", fsz);
      setCookiesByName("source", fsz);
    }

    if (token) {
      setCookies(token);

      history.replace(url);
      dispatch(user_load_by_token_thunk(token));
    }

    getProductDetails();
    ///categoriesList(1);
    // if (_ga) {
    //   history.replace(url);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (fsz) {
      sessionStorage.setItem("fsz", fsz);
      setCookiesByName("source", fsz);
    }

    if (token) {
      setCookies(token);

      history.replace(url);
      dispatch(user_load_by_token_thunk(token));
    }

    getProductDetails();
    ///categoriesList(1);
    // if (_ga) {
    //   history.replace(url)
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productid]);

  // useEffect(() => {
  //   if (user) {
  //     getUserFavedNFTOrders();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);

  // const getUserFavedNFTOrders = async () => {
  //   try {
  //     setFavLoading(true);
  //     const result = await userFavedNFTOrders(favPage);
  //     setFavList(result.data.data.orders);
  //     setFavLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //     setFavLoading(false);
  //   }
  // };

  // Meta Pixel Code
  // useEffect(() => {
  //   if (process.env.REACT_APP_MARKETING_SCRIPT === "enabled") {
  //     ReactPixel.init(process.env.REACT_APP_META_PIXEL_ID);
  //     ReactPixel.pageView();
  //   }
  // }, []);

  return (
    <>
      <Header
        title="liven Science"
        description="Natural Medicine. Sign up now!"
        //image="https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"
      />
      <main className="main pt-6 single-product">
        <div className="page-content">
          <div className="container min-height">
            <ProductDetails
              productData={productData}
              subCategoryProducts={subCategoryProducts}
              loading={loading}
              subCategory={subCategory}
            />
          </div>
          <Footer />
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default NewHome;
