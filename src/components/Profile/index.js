import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import styles from "./styles.module.scss";

const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt="user avatar" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
    <ul className={styles.stats}>
      {Object.keys(stats).map((stat) => (
        <li className={styles.stat} key={uuidv4()}>
          <span className={styles.label}>{stat}</span>
          <span className={styles.quantity}>{stats[stat]}</span>
        </li>
      ))}
    </ul>
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
