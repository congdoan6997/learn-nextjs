import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            width={400}
            height={250}
            src="/websites.jpg"
            alt="Image"
            // fill={true}
            className={styles.img}
          ></Image>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            delectus saepe aliquam enim tenetur praesentium perspiciatis
            explicabo earum quaerat! Veritatis adipisci voluptatibus impedit
            voluptas rerum reiciendis iure sunt doloribus et.
          </p>
        </div>
      </Link>
      <Link href="" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            width={400}
            height={250}
            src="/websites.jpg"
            // fill={true}
            alt="Image"
            className={styles.img}
          ></Image>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            delectus saepe aliquam enim tenetur praesentium perspiciatis
            explicabo earum quaerat! Veritatis adipisci voluptatibus impedit
            voluptas rerum reiciendis iure sunt doloribus et.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
