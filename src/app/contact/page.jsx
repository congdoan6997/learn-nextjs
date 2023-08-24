import React from "react";
import styles from "./page.module.css";
import ImgContact from "public/contact.png";
import Image from "next/image";
import Button from "@/components/botton/Button";
export const metadata = {
  title: "My contact",
  description: "This is my contact info",
};
const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            fill={true}
            className={styles.img}
            alt="Image contact"
          ></Image>
        </div>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Name"
            className={styles.input}
          ></input>
          <input
            type="text"
            placeholder="Email"
            className={styles.input}
          ></input>
          <textarea
            rows={10}
            cols={30}
            placeholder="Message"
            className={styles.textArea}
          ></textarea>
          <Button url="#" text="Send"></Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
