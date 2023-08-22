import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&#169; 2023 PhdBui. All rights reserved.</div>
      <div className={styles.socials}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Facebook"
        ></Image>
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Instagram"
        ></Image>
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Twitter"
        ></Image>
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Youtube"
        ></Image>
      </div>
    </div>
  );
};

export default Footer;
