import React from "react";
import styles from "./page.module.css";
import Button from "@/components/botton/Button";
import Image from "next/image";

const Category = ({ params }) => {
  // console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            iusto magni dolorem similique nostrum maiores minima, aliquid sunt
            perspiciatis aliquam a mollitia deleniti reiciendis eum eligendi
            non! Architecto, necessitatibus voluptatum.
          </p>
          <Button className={styles.btn} url="#" text="See more"></Button>
        </div>
        <div className={styles.imgContent}>
          <Image
            alt="image catefory portfolio"
            className={styles.img}
            src="/websites.jpg"
            fill={true}
          ></Image>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            iusto magni dolorem similique nostrum maiores minima, aliquid sunt
            perspiciatis aliquam a mollitia deleniti reiciendis eum eligendi
            non! Architecto, necessitatibus voluptatum.
          </p>
          <Button className={styles.btn} url="#" text="See more"></Button>
        </div>
        <div className={styles.imgContent}>
          <Image
            alt="image catefory portfolio"
            className={styles.img}
            src="/websites.jpg"
            fill={true}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Category;
