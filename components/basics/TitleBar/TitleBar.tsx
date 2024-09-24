import Image from "next/image";
import React, { FunctionComponent } from "react";
import styles from "./TitleBar.module.scss";

interface TitleBarProps {
  title: string;
  titlebar_img_src: string;
  titlebar_img_alt: string;
}

const TitleBar: FunctionComponent<TitleBarProps> = ({
  title,
  titlebar_img_src,
  titlebar_img_alt,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoContainer}>
        <Image
          src={titlebar_img_src}
          alt={titlebar_img_alt}
          className={styles.logo}
          layout="fill"
        />
      </div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default TitleBar;
