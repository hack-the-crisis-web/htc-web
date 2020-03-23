import React from "react";
import facebookIcon from "../../img/social/facebook.svg";
import twitterIcon from "../../img/social/twitter.svg";
import styles from "./SocialIconLink.module.scss";

const getImgPropsForIconType = type => {
  switch (type) {
    case "facebook":
      return { alt: "facebook", src: facebookIcon };
    case "twitter":
      return { alt: "twitter", src: twitterIcon };
    default:
      return {};
  }
};

const SocialIconLink = ({ type, href }) => (
  <a className={styles.noDecoration} href={href}>
    <img
      {...getImgPropsForIconType(type)}
      style={{ width: "1em", height: "1em" }}
    />
  </a>
);

export default SocialIconLink;
