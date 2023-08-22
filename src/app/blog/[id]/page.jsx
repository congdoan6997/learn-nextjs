import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            consequatur itaque. Voluptates quibusdam ratione veniam sed, saepe
            nulla praesentium voluptatibus rem porro in sapiente nobis
            consequuntur atque vero dolores laborum.
          </p>
          <div className={styles.author}>
            <Image
              src="/websites.jpg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Test</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/websites.jpg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          molestias qui incidunt magni eum quos quam expedita exercitationem
          laudantium veritatis eveniet saepe, voluptatibus nihil porro assumenda
          obcaecati, quas itaque cupiditate? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Accusantium modi ipsum amet labore, quo
          recusandae veniam neque officiis pariatur commodi quasi non mollitia
          totam? Facilis delectus accusamus saepe magnam. Ullam? Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Perspiciatis, veritatis
          sint quod natus tenetur sunt vitae, iste quia magni suscipit ex labore
          placeat voluptatum deleniti repellat quo facere? Perferendis, laborum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quam
          placeat non dignissimos, eveniet ea sequi quod velit earum? Explicabo
          fugit fugiat praesentium neque, sequi rem labore iure quasi
          repudiandae.
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          neque aperiam corporis, quos nemo quo nulla odio veniam vel qui dolor
          voluptate sapiente commodi adipisci consequuntur a quidem voluptatum
          facere.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
          doloremque excepturi libero iste iure eum earum quas vero quia ex
          assumenda sapiente perferendis voluptas doloribus accusantium? Ea
          distinctio error illo.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
