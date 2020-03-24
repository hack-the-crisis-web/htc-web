import React from "react";
import facebookWhiteIcon from "../../img/social/facebookWhite.svg";
import twitterWhiteIcon from "../../img/social/twitterWhite.svg";
import styles from "./SocialIconLink.module.scss";

const getFacebookIcon = color => {
  switch (color) {
    case "white":
    default:
      return facebookWhiteIcon;
  }
};

const getTwitterIcon = color => {
  switch (color) {
    case "white":
    default:
      return twitterWhiteIcon;
  }
};

const getImgPropsForIconType = (type, color) => {
  switch (type) {
    case "facebook":
      return { alt: "facebook", src: getFacebookIcon(color) };
    case "twitter":
      return { alt: "twitter", src: getTwitterIcon(color) };
    default:
      return {};
  }
};

const SocialIconLink = ({ type, href, color = "white" }) => (
  <a className={styles.noDecoration} href={href}>
    <img
      {...getImgPropsForIconType(type, color)}
      style={{ width: "20px", height: "20px" }}
    />
  </a>
);

export default SocialIconLink;
