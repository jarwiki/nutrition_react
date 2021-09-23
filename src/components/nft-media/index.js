import React, { useState } from "react";
import { Modal, OverlayTrigger, Popover } from "react-bootstrap";
import {
  AiFillHeart,
  AiOutlineShareAlt,
  AiOutlineExpand,
  AiOutlineLink,
  AiFillFacebook,
  AiFillTwitterCircle
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "./style.scss";

const NFTMedia = () => {
  const [modalShow, setModalShow] = useState(false);
  const [liked, setLiked] = useState(false);
  return (
    <div className="nft-media">
      <img src="https://picsum.photos/780/750" />
      {/* <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif" /> */}
      {/* <video controls>
        <source
          src="https://www.w3schools.com/tags/movie.mp4"
          type="video/mp4"
        />
      </video> */}

      {/* <audio controls className="shadow-sm ">
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio> */}
      <div className="media-lsf">
        <CustomPopover
          icon={
            <div onClick={() => setLiked(!liked)}>
              <AiFillHeart size={25} color={liked ? "red" : "black"} />
            </div>
          }
          placement="top"
          text="Favourite"
        />

        <div>
          <SharePopover
            icon={<AiOutlineShareAlt size={25} />}
            placement="top"
          />
        </div>

        <CustomPopover
          icon={
            <div onClick={() => setModalShow(true)}>
              <AiOutlineExpand size={25} />
            </div>
          }
          placement="top"
          text="Fullscreen"
        />
      </div>

      <Modal
        fullscreen
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
        <Modal.Header closeButton className="full-screen-header"></Modal.Header>
        <Modal.Body>
          <img className="modal-img" src="https://picsum.photos/780/750" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

const CustomPopover = ({ icon, placement, text }) => {
  return (
    <OverlayTrigger
      trigger={['hover', 'focus']}
      rootClose
      key={placement}
      placement={placement}
      overlay={
        <Popover className="mb-2">
          <Popover.Body className="p-2 custom-pop">{text}</Popover.Body>
        </Popover>
      }
    >
      {icon}
    </OverlayTrigger>
  );
};

const SharePopover = ({ icon, placement }) => {
  return (
    <>
      <OverlayTrigger
        trigger="click"
        rootClose
        key={placement}
        placement={placement}
        overlay={
          <Popover className="mb-2">
            <Popover.Body className="p-1 custom-pop">
              <CopyToClipboard
                text={window.location.href}
                onCopy={() => {
                  toast.success("Copied to Clipboard");
                }}
              >
                <AiOutlineLink size={35} />
              </CopyToClipboard>
              <AiFillFacebook size={35} style={{ color: "#4267B2" }} />
              <AiFillTwitterCircle size={35} style={{ color: "#1DA1F2" }} />
              <FaTelegramPlane size={35} style={{ color: "#0088cc" }} />
            </Popover.Body>
          </Popover>
        }
      >
        <span>{icon}</span>
      </OverlayTrigger>
    </>
  );
};

export default NFTMedia;
