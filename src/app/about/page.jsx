import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/botton/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt="Image container"
          className={styles.img}
        ></Image>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting and winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.itemTitle}>Who Are We?</h1>
          <p className={styles.itemDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            rerum velit cumque possimus esse est ex! Perferendis, beatae
            accusantium. Doloribus, deserunt earum cupiditate animi beatae amet?
            <br></br>
            <br></br>
            Quibusdam quia maiores natus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Minima iste numquam, hic ex culpa modi facilis
            atque illo et adipisci fugit accusantium facere molestias asperiores
            placeat rem. Porro, quibusdam repudiandae?
            <br></br>
            <br></br>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptates repellat blanditiis a, recusandae unde officia accusamus
            adipisci voluptatem beatae laboriosam omnis voluptate consectetur
            temporibus dolores magni corrupti sit est!
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.itemTitle}>What We Do?</h1>
          <p className={styles.itemDesc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            rerum velit cumque possimus esse est ex! Perferendis, beatae
            accusantium. Doloribus, deserunt earum cupiditate animi beatae amet?
            <br></br>
            <br></br>
            Quibusdam quia maiores natus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Minima iste numquam, hic ex culpa modi facilis
            atque illo et adipisci fugit accusantium facere molestias asperiores
            placeat rem. Porro, quibusdam repudiandae?
          </p>
          <Button url="/contact" text="Contact"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;
