import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const TransactionHistory = ({ items }) => (
  <table className={styles["transaction-history"]}>
    <thead>
      <tr>
        {["Type", "Amount", "Currency"].map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={styles["transaction-type"]}>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default TransactionHistory;
