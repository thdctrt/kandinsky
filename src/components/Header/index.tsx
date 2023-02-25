import styles from "../Header/styles.module.sass";
import React, { Component } from "react";

// interface AboutProps {
//     text: string;
// }

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.square}></div>
      <div className={styles.circle}></div>
      <div className={styles.triangle}></div>
    </div>
  );
};

export default Header;
