import React, { useState } from "react";
import ReadMoreReact from "read-more-react";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import AritstPills from "./artist-pills";
import amitabh_img from "../../images/artist-image.png";
import stanlee_img from "../../images/stanlee.jpg";
import ht_img from "../../images/ht_logo.png";
import metaverse_couple from "../../images/metaverse-couple.jpg";
import kalpana from "../../images/Kalpana.png";
import latimes from "../../images/latimes/latimes.jpg";
import viacom18 from "../client-category/fullyfaltoo/img/Viacom18.jpeg";

import "./style.scss";
const NFTArtist = ({ id }) => {
  return (
    <div className="nft-artist">
      <div className="row mt-4 artist-content">
        <div className="col-12 col-md-5">
          <img
            className="artist-img"
            src={(() => {
              if (id === 1) {
                return amitabh_img;
              } else if (
                id === parseInt(process.env.REACT_APP_HINDUSTAN_TIMES_ID)
              ) {
                return ht_img;
              } else if (id === parseInt(process.env.REACT_APP_FF_ID)) {
                return viacom18;
              } else if (id === parseInt(process.env.REACT_APP_META_VERSE_ID)) {
                return metaverse_couple;
              } else if (
                id === parseInt(process.env.REACT_APP_KALPANA_CHAWLA_ID)
              ) {
                return kalpana;
              } else if (id === parseInt(process.env.REACT_APP_LATIMES_ID)) {
                return latimes;
              } else {
                return stanlee_img;
              }
            })()}
            alt="artist logo"
          />
        </div>
        <div className="col-12 col-md-7 mt-4 mt-md-0 artist-details-content">
          <div className="artist-name">
            {id !== parseInt(process.env.REACT_APP_KALPANA_CHAWLA_ID)
              ? "The Inspiration"
              : "Kalpana Chawla"}
          </div>
          <div className="at-name">
            {(() => {
              if (id === 1) {
                return "Amitabh Bachchan";
              } else if (
                id === parseInt(process.env.REACT_APP_HINDUSTAN_TIMES_ID)
              ) {
                return "Hindustan Times";
              } else if (id === parseInt(process.env.REACT_APP_FF_ID)) {
                return "Viacom18 Media Pvt. Ltd.";
              } else if (id === parseInt(process.env.REACT_APP_META_VERSE_ID)) {
                return "Metaverse Wedding";
              } else if (
                id === parseInt(process.env.REACT_APP_KALPANA_CHAWLA_ID)
              ) {
                return "Exclusive Photographs Presented By Jean-Pierre Harrison";
              } else if (id === parseInt(process.env.REACT_APP_LATIMES_ID)) {
                return "MISTER SAMPSON";
              } else {
                return "Stan Lee";
              }
            })()}
          </div>
          <div className="artist-desc mt-5">
            <ReadMoreReact
              min={300}
              ideal={500}
              max={700}
              text={(() => {
                if (id === 1)
                  return `Amitabh Bachchan is, without question, the most influential film personality of the last century. In an illustrious career that spans four decades, he's donned multiple portfolios like acting, production, television hosting, and singing!`;
                else if (
                  id === parseInt(process.env.REACT_APP_HINDUSTAN_TIMES_ID)
                )
                  return `Hindustan Times is one of India's most respected and leading English news destination, with a legacy of close to a hundred years. Through the course of the century, HT has witnessed and set forth India's most iconic moments to its citizenry. As India celebrates its 73rd Republic Day on 26th January 2022, we invite you to stake claim to piece of India's glorious history through the lens of the Hindustan Times. HT's foray into Web 3.0 through its NFTs is an attempt in bringing its storied past into the future. This would include timeless tokens of spectacular landmarks and milestones in Indian history which was published in the daily through the course of the last century Many such iconic timeless tokens are being put up for an auction on 26th Jan. For any further details on this please log on www.nft.hindustantimes.com and stake your claim to a piece of history.`;
                else if (id === parseInt(process.env.REACT_APP_FF_ID))
                  return `Viacom18 Media Pvt. Ltd. is one of India's fastest-growing entertainment networks and a house of iconic brands that offers multi-platform, multi-generational and multicultural brand experiences. Now Viacom18's Youth, Music, and English Entertainment Cluster steps into the world of NFTs by announcing the launch of “Fully Faltoo” - a platform to buy and bid on exclusive NFTs. The Fully Faltoo NFT collection gives our fans all over the world an opportunity to claim ownership over edgy and unique digital art pieces. The collectibles also feature creations inspired by iconic pop culture properties like Roadies and Bakra. The industry-leading security for the Fully Faltoo is provided by GuardianLink, who will also take care of the process of securely minting, transferring, and storing NFTs.`;
                else if (id === parseInt(process.env.REACT_APP_META_VERSE_ID))
                  return `The NFT Collection featuring the first meta-verse wedding of Asia is one of the most exclusive collections brought to you by BeyondLife.club. The NFT collection brings you artwork featuring backgrounds and attires from the Harry Potter and cyberpunk era in addition to the classic wedding attire featuring the bride, groom, and the father-in-law!`;
                else if (
                  id === parseInt(process.env.REACT_APP_KALPANA_CHAWLA_ID)
                )
                  return `Kalpana Chawla… The name would not need any introduction for any Indian woman and for any Indian for that matter! Kalpana Chawla has been a source of inspiration for millions of women who have dared to fly beyond the confines of their constraints. She is an aerospace engineer, an astronaut, and a wonderful human being who left behind, a legacy that will be a blazing trail for Indian women to follow and to look up to!`;
                else if (id === parseInt(process.env.REACT_APP_LATIMES_ID))
                  return `MISTER SAMPSON is a Los Angeles based Creative Director, Graphic Designer, Illustrator and Muralist originally from Syracuse, New York.  Even though he was a fine arts major, an internship with Def Jam Records during his senior year of college gave TaVon experience in the graphic arts. His one-month internship became a five-year stint as he became one of their top Art Directors where he designed singles and album covers for many award-winning artists. In 2012, TaVon relocated to Los Angeles where he spent another two years as an Art Director before realizing his purpose as an artist was being under explored and there were important areas of his own life he wanted to express.`;
                else
                  return `The inspiration behind the creation of all our art NFTs - both illustrations and video - is none other than the creation of the legendary Stan Lee. Stan Lee is one of the most prolific and formidable creator of superheroes in the last 100 years, and he has been the creative brain behind the creation of some memorable multiverses. Chakra is the only Indian superhero that Stan Lee has co-created!`;
              })()}
            />
          </div>
          <div className="artist-pill-container mt-4">
            <AritstPills
              title="Managed By"
              value={(() => {
                if (id === parseInt(process.env.REACT_APP_FF_ID)) {
                  return "Viacom18 Media Pvt. Ltd.";
                } else {
                  return "BeyondLife.club";
                }
              })()}
            />
          </div>
          {/* <div className="bottom-owner-contact-links">
            <div className="share-link-owner">
              <FaFacebookF />
            </div>
            <div className="share-link-owner">
              <FaInstagram />
            </div>
            <div className="share-link-owner">
              <FaTwitter />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NFTArtist;
