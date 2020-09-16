import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span className={styles[`status-${isOnline ? "online" : "offline"}`]} />
    <img
      className={styles.avatar}
      src={avatar}
      alt="friend avatar"
      width="48"
    />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
