/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import ContentLoader from "react-content-loader";
import { FaCheckCircle } from "react-icons/fa";

import NFTCard from "../nft-card";
import { nftCategoryListApi } from "../../api/methods";
import ExploreTitle from "./explore-title";
import sample from "../../images/sampleNFT.jpg";
import "./style.scss";
import { BiCaretDown, BiX } from "react-icons/bi";

const Explore = ({ categoryDetail }) => {
  const { slug } = useParams();
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const [filter, setFilter] = useState({
    sale: [
      {
        name: "Bid",
        value: "bid",
        checked: false,
      },
      {
        name: "Buy",
        value: "buy",
        checked: false,
      },
    ],
    nft: [
      {
        name: "ERC721",
        value: "erc721",
        checked: false,
      },
      {
        name: "ERC1155",
        value: "erc1155",
        checked: false,
      },
    ],
    sort: [
      {
        name: "Recently Listed",
        value: "recently_listed",
        checked: true,
      },
      {
        name: "Price: High to Low",
        value: "price_desc",
        checked: false,
      },
      {
        name: "Price: Low to High",
        value: "price",
        checked: false,
      },
    ],
  });

  useEffect(() => {
    showAllNFTs(page);
  }, [slug]);

  const showAllNFTs = async (
    page,
    type,
    saleType,
    sort = "recently_listed"
  ) => {
    try {
      page === 1 && setLoading(true);
      setLoadingMore(true);
      let response = await nftCategoryListApi({
        slug,
        page,
        filter: {
          type: type,
          sale_type: saleType,
        },
        sort,
      });
      setList([...list, ...response.data.data.nfts]);
      setHasNext(response.data.data.next_page);
      page === 1 && setLoading(false);
      setLoadingMore(false);
    } catch (err) {
      console.log(err);
    }
  };

  const showAllFilteredNFTs = async (
    page,
    type,
    saleType,
    sort = "recently_listed"
  ) => {
    try {
      page === 1 && setLoading(true);
      setLoadingMore(true);
      let response = await nftCategoryListApi({
        slug,
        page,
        filter: {
          type: type,
          sale_type: saleType,
        },
        sort,
      });
      setList(response.data.data.nfts);
      setHasNext(response.data.data.next_page);
      page === 1 && setLoading(false);
      setLoadingMore(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMore = () => {
    if (hasNext) {
      const typeFilter = filter.nft
        .filter((xx) => xx.checked === true)
        .map((obj, i) => obj.value);

      const saleTypeFilter = filter.sale
        .filter((xx) => xx.checked === true)
        .map((obj, i) => obj.value);

      const sortType = filter.sort.find((obj) => obj.checked === true).value;
      showAllNFTs(page + 1, typeFilter, saleTypeFilter, sortType);
      setPage(page + 1);
    }
  };

  const SaleTypeDropdown = React.forwardRef(({ onClick }, ref) => (
    <div
      className="filter-drop-btn"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      Sale Type <BiCaretDown className="mb-1" />
    </div>
  ));

  const NFTTypeDropdown = React.forwardRef(({ onClick }, ref) => (
    <div
      className="filter-drop-btn"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      NFT Type <BiCaretDown className="mb-1" />
    </div>
  ));

  const ShowAllSort = React.forwardRef(({ onClick }, ref) => (
    <div
      className="filter-drop-sort-btn"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {filter.sort.find((obj) => obj.checked === true)?.name
        ? filter.sort.find((obj) => obj.checked === true).name
        : "Sort By"}{" "}
      <BiCaretDown className="mb-1" />
    </div>
  ));

  const handleSaleCheck = (input) => {
    const info = { ...filter };
    const index = info.sale.findIndex((obj) => obj.value === input.value);
    info.sale[index] = {
      ...info.sale[index],
      checked: !info.sale[index].checked,
    };
    setFilter(info);

    const typeFilter = filter.nft
      .filter((xx) => xx.checked === true)
      .map((obj, i) => obj.value);

    const saleTypeFilter = filter.sale
      .filter((xx) => xx.checked === true)
      .map((obj, i) => obj.value);

    const sortType = filter.sort.find((obj) => obj.checked === true).value;

    showAllFilteredNFTs(1, typeFilter, saleTypeFilter, sortType);
  };

  const handleNFTCheck = (input) => {
    const info = { ...filter };
    const index = info.nft.findIndex((obj) => obj.value === input.value);
    info.nft[index] = {
      ...info.nft[index],
      checked: !info.nft[index].checked,
    };
    setFilter(info);

    const typeFilter = filter.nft
      .filter((xx) => xx.checked === true)
      .map((obj, i) => obj.value);

    const saleTypeFilter = filter.sale
      .filter((xx) => xx.checked === true)
      .map((obj, i) => obj.value);

    const sortType = filter.sort.find((obj) => obj.checked === true).value;

    showAllFilteredNFTs(1, typeFilter, saleTypeFilter, sortType);
  };

  const handleSortNFT = (input) => {
    const info = { ...filter };
    const index = info.sort.findIndex((obj) => obj.value === input.value);

    for (let xx = 0; xx < info.sort.length; xx++) {
      info.sort[xx].checked = false;
    }

    info.sort[index] = {
      ...info.sort[index],
      checked: !info.sort[index].checked,
    };
    setFilter(info);

    const typeFilter = filter.nft
      .filter((xx) => xx.checked === true)
      .map((obj, i) => obj.value);

    const saleTypeFilter = filter.sale
      .filter((xx) => xx.checked === true)
      .map((obj, i) => obj.value);

    const sortType = filter.sort.find((obj) => obj.checked === true).value;

    showAllFilteredNFTs(1, typeFilter, saleTypeFilter, sortType);
  };

  return (
    <>
      <section className="explore-nft-section">
        <div className="container-fluid">
          <div className="row mt-3 explore-title">
            <ExploreTitle
              title={categoryDetail.name}
              description={categoryDetail.description}
            />
          </div>
          <div className="row mt-5">
            <div className="col-sm-12">
              <div className="sec-heading d-flex align-items-center mb-2 explore-heading">
                <span className="me-4 mt-2 text-nowrap">Listed NFTs</span>
                <span className="d-flex justify-content-between mt-2 w-100 filter-blocks">
                  <div className="d-flex flex-wrap filter-box">
                    <Dropdown className="me-2">
                      <Dropdown.Toggle
                        align="start"
                        drop="start"
                        as={SaleTypeDropdown}
                      ></Dropdown.Toggle>

                      <Dropdown.Menu align="start">
                        {filter.sale.map((obj, i) => (
                          <Dropdown.Item
                            key={`sale${i}`}
                            as="button"
                            onClick={() => handleSaleCheck(obj)}
                          >
                            <FaCheckCircle
                              color={obj.checked ? "green" : "#ccc"}
                              className="mb-1 me-2"
                              size={17}
                            />
                            {obj.name}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Toggle
                        align="start"
                        drop="start"
                        as={NFTTypeDropdown}
                      ></Dropdown.Toggle>

                      <Dropdown.Menu align="start">
                        {filter.nft.map((obj, i) => (
                          <Dropdown.Item
                            key={`nft${i}`}
                            as="button"
                            onClick={() => handleNFTCheck(obj)}
                          >
                            <FaCheckCircle
                              color={obj.checked ? "green" : "#ccc"}
                              className="mb-1 me-2"
                              size={17}
                            />
                            {obj.name}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div>
                    <Dropdown>
                      <Dropdown.Toggle
                        align="start"
                        drop="start"
                        as={ShowAllSort}
                      ></Dropdown.Toggle>

                      <Dropdown.Menu align="start">
                        {filter.sort.map((obj, i) => (
                          <Dropdown.Item
                            key={`nft${i}`}
                            as="button"
                            onClick={() => handleSortNFT(obj)}
                          >
                            <FaCheckCircle
                              color={obj.checked ? "green" : "#ccc"}
                              className="mb-1 me-2"
                              size={17}
                            />{" "}
                            {obj.name}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </span>
              </div>

              <div className="mt-4 mb-4 d-flex flex-wrap">
                {filter.sale
                  .filter((xx) => xx.checked === true)
                  .map((obj, i) => (
                    <div key={`filter-pill${i}`} className="filter-pill-button">
                      <div className="first">{obj.name}</div>
                      <div className="last">
                        <BiX
                          role="button"
                          size={20}
                          onClick={() => handleSaleCheck(obj)}
                        />
                      </div>
                    </div>
                  ))}

                {filter.nft
                  .filter((xx) => xx.checked === true)
                  .map((obj, i) => (
                    <div key={`filter-pill${i}`} className="filter-pill-button">
                      <div className="first">{obj.name}</div>
                      <div className="last">
                        <BiX
                          role="button"
                          size={20}
                          onClick={() => handleNFTCheck(obj)}
                        />
                      </div>
                    </div>
                  ))}
              </div>

              {!loading ? (
                <div className="row">
                  {list.length > 0 ? (
                    list.map((nft, i) => (
                      <div
                        key={`list-nft-${i}`}
                        className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                      >
                        <NFTCard nft={nft} key={i} image={sample} />
                      </div>
                    ))
                  ) : (
                    <div className="col-12 text-center">
                      <h3 className="my-3">No Data Found!</h3>
                    </div>
                  )}

                  {!loading && loadingMore && <NFTCardLoader />}

                  {hasNext && (
                    <div className="row mb-5">
                      <div className="col-md-12 text-center">
                        <button
                          className="load_more"
                          disabled={loadingMore}
                          onClick={fetchMore}
                        >
                          {loadingMore ? "Loading..." : "Load More"}
                        </button>
                      </div>
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
    </>
  );
};

const NFTCardLoader = (props) => (
  <ContentLoader
    viewBox="0 50 900 400"
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

export default Explore;
