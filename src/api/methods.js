import appAxios from "./axios-utils";

export const nftCategoriesApi = ({ page }) =>
  appAxios.get(`/dashboard/categories?page=${page}`);

export const nftCategoryDetailApi = ({ slug }) =>
  appAxios.get(`/categories/${slug}`);

export const nftCategoryListApi = ({ slug, page, filter, sort }) =>
  appAxios.get(`/categories/${slug}/nfts?page=${page}`, {
    params: {
      filter,
      sort,
    },
  });

export const nftShowAllApi = ({ page, filter, sort }) =>
  appAxios.get(`/dashboard/index?page=${page}`, {
    params: {
      filter,
      sort,
    },
  });

export const hotNFTsApi = ({ page }) =>
  appAxios.get(`/dashboard/hot_nfts?page=${page}`);

export const topSellersApi = ({ page, time_format }) =>
  appAxios.get(
    `/dashboard/top_sellers?page=${page}&time_format=${time_format}`
  );

export const nftDetailApi = ({ nft_slug, order_slug }) => {
  if (order_slug) {
    return appAxios.get(`/nfts/${nft_slug}?order_slug=${order_slug}`);
  } else {
    return appAxios.get(`/nfts/${nft_slug}`);
  }
};

export const nftMoreApi = ({ page }) => appAxios.get(`/nfts/more?page=${page}`);

export const nftBuyHistory = ({ nft_slug, page }) =>
  appAxios.get(`/nfts/${nft_slug}/buy_history?page=${page}`);

export const nftBidHistory = ({ nft_slug, page }) =>
  appAxios.get(`/nfts/${nft_slug}/bid_history?page=${page}`);

export const nftTransactionHistory = ({ nft_slug, page }) =>
  appAxios.get(`/nfts/${nft_slug}/transaction_histories?page=${page}`);

export const orderBidHistory = ({ order_slug, page }) =>
  appAxios.get(`/orders/${order_slug}/bid_history?page=${page}`);

export const nftBidWinner = ({ nft_slug }) =>
  appAxios.get(`/nfts/${nft_slug}/bid_winner`);

export const nftOwnerApi = ({ nft_slug }) =>
  appAxios.get(`/nfts/${nft_slug}/owners`);

// export const nftBuyApi = (props) =>
//   appAxios.post("/buys", { order: { ...props } });

// export const nftBidApi = (props) =>
//   appAxios.post("/bids", { nft: { ...props } });

export const nftMakeFav = ({ nft_slug }) =>
  appAxios.post(`/nfts/${nft_slug}/fav`);

export const nftMakeUnFav = ({ nft_slug }) =>
  appAxios.post(`/nfts/${nft_slug}/unfav`);

export const lootBuyApi = (props) =>
  appAxios.post("/buys/loot_box", { nft: { ...props } });

export const putOnSaleApi = ({ slug, order }) =>
  appAxios.post(`/nfts/${slug}/orders`, { order: order });

export const nftBuyApi = ({ order_slug, order }) =>
  appAxios.post(`/orders/${order_slug}/buy`, { order });

export const nftBidApi = ({ order_slug, order }) =>
  appAxios.post(`/orders/${order_slug}/bid`, { order });

export const bidSaleCancelApi = ({ order_slug }) =>
  appAxios.post(`/orders/${order_slug}/bid_cancel`);

export const saleCancelApi = ({ order_slug }) =>
  appAxios.post(`/orders/${order_slug}/sale_cancel`);

export const buySaleCancelApi = ({ order_slug, order }) =>
  appAxios.post(`/orders/${order_slug}/buy_cancel`, { order });

export const acceptBidApi = ({ order_slug, order }) =>
  appAxios.post(`/orders/${order_slug}/accept_bid`, { order });

export const sellerFavedNFTSApi = ({ slug, page }) =>
  appAxios.get(`/users/${slug}/faved?page=${page}`);

export const sellerOwnedNFTsApi = ({ slug, page }) =>
  appAxios.get(`/users/${slug}/owned?page=${page}`);

export const sellerDetailApi = ({ slug }) =>
  appAxios.get(`/users/${slug}/seller_me`);
