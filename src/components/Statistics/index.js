import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h3 className={styles.title}>{title}</h3>}
    <ul className={styles["stat-list"]}>
      {stats.map(({ id, label, percentage }) => (
        <li className={styles.item} key={id}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ).isRequired,
};

export default Statistics;
