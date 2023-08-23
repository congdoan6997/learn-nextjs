import React from "react";
import styles from "./page.module.css";
import Button from "@/components/botton/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  // console.log(params);
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button className={styles.btn} url="#" text="See more"></Button>
          </div>
          <div className={styles.imgContent}>
            <Image
              alt="image catefory portfolio"
              className={styles.img}
              src={item.image}
              fill={true}
            ></Image>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
