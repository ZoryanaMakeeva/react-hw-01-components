import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import styles from "./styles.module.scss";

import FriendListItem from "../FriendListItem";

const FriendList = ({ friends }) => (
  <ul className={styles["friend-list"]}>
    {friends.map(({ avatar, name, isOnline }) => (
      <FriendListItem
        key={uuidv4()}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};

export default FriendList;
