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
import {
  homeContentApi,
  getsubCategoryListApi,
  getCategoryApi,
} from "../api/base-methods";

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
import Banner from "../components/new/banner";
import FeatureProduct from "../components/new/feature-product";
import ArrivalSection from "../components/new/arrival-sections";
import ProductBanner from "../components/new/product-banner";
import WeakStrong from "../components/new/weak-strong";
import OurIdea from "../components/new/our-idea";
import ProductBannerOne from "../components/new/product-banner-one";
import InstagramSection from "../components/new/instagram-section/index";
import TeamSection from "../components/new/team_sec";
import FirstBannerSection from "../components/new/final-banner-section";
import Footer from "../components/footer";

const NewHome = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();
  let query = useQuery();
  const fsz = query.get("fsz");
  const token = query.get("token");
  const _ga = query.get("_ga");
  const [homeContent, setHomeContent] = useState({});
  // const { user } = useSelector((state) => state.user.data);

  const [list, setList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  // const [favPage, setFavPage] = useState(1);
  // const [favList, setFavList] = useState([]);
  // const [favLoading, setFavLoading] = useState(false);
  // const [favHasNext, setFavHasNext] = useState(false);
  const homecontent = async () => {
    try {
      let response = await homeContentApi();
      //console.log(response);
      setHomeContent(response?.data?.responseData);
    } catch (err) {
      console.log(err);
    }
  };

  const SubcategoryList = async () => {
    try {
      let response = await getsubCategoryListApi();
      //setList(response?.data?.responseData);
      setList(response?.data?.responseData?.subCategories);
      setFilterList(response?.data?.responseData?.filterCategories);
    } catch (err) {
      console.log(err);
    }
  };

  const getCategoryList = async () => {
    try {
      let response = await getCategoryApi();
      //setList(response?.data?.responseData);
      setList(response?.data?.responseData?.categories);
    } catch (err) {
      console.log(err);
    }
  };

  // const categoriesList = async (page) => {
  //   try {
  //     let response = await nftCategoriesApi({ page });
  //     //setList([...list, ...response.data.data.categories]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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

    /// categoriesList(1);
    homecontent();
    SubcategoryList();
    getCategoryList();

    if (_ga) {
      history.replace(url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  useEffect(() => {
    if (process.env.REACT_APP_MARKETING_SCRIPT === "enabled") {
      ReactPixel.init(process.env.REACT_APP_META_PIXEL_ID);
      ReactPixel.pageView();
    }
  }, []);

  return (
    <>
      <Header
        title="liven Science"
        description="Natural Medicine. Sign up now!"
        //image="https://cdn.guardianlink.io/product-hotspot/images/og-image_jt.jpg"
      />
      <main className="main home">
        <div className="page-content">
          {homeContent?.banner?.length > 0 && (
            <Banner bannerContent={homeContent?.banner} />
          )}
          <FeatureProduct
            featureProductsContent={homeContent?.featureProducts}
          />
          <ArrivalSection homeContent={homeContent} categorylist={list} />
          <ProductBanner homeContent={homeContent} />
          <WeakStrong homeContent={homeContent} />
          <OurIdea homeContent={homeContent} />
          <ProductBannerOne homeContent={homeContent} />
          <InstagramSection homeContent={homeContent} filterList={filterList} />
          <TeamSection homeContent={homeContent} />
          <FirstBannerSection homeContent={homeContent} />
          <Footer />
          {/* <Banner list={list} /> */}
          {/* <HotCollections /> */}
          {/* <TopBuyers /> */}
          {/* <TopSellers /> */}
          {/* <HeroBanner /> */}
          {/* <LeaderBoard /> */}
          {/* <NewDropSection /> */}
          {/* <TrailerVideo /> */}
          {/* <MclGameLaunchTimer /> */}
          {/* <MclGameLaunchOne /> */}
          {/* <MclGameLaunchTwo /> */}
          {/* <CollectionList /> */}

          {/* design */}
          {/* <MclTournaments /> */}
          {/* <MclCompletedTournaments /> */}
          {/* <MclGameButton /> */}

          {/* <Trending />
        <LiveAuctions />
        <RecentlySoldNFT /> */}
          {/* {favList.length > 0 && (
          <FavouriteNFTs list={favList} loading={favLoading} />
        )} */}
          {/* <ShowAll categories={list} query={query} /> */}
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default NewHome;
