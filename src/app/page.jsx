import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/botton/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.desc}>
          Turn your Idea into Reality. We bring together the teams from your
          global tech industry.
        </p>
        {/* <button className={styles.btn}>See Our Works</button> */}
        <Button url="/portfolio" text="See Our Works"></Button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.img}></Image>
      </div>
    </div>
  );
}
