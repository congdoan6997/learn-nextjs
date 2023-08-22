import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link className={styles.item} href="/portfolio/illustrations">
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link className={styles.item} href="/portfolio/websites">
          <span className={styles.title}>Websites</span>
        </Link>
        <Link className={styles.item} href="/portfolio/apptications">
          <span className={styles.title}>Apptications</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
