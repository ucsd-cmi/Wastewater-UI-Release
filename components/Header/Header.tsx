import { HeaderNotes, TitleBar } from "@basics";
import React, { FunctionComponent } from "react";
import styles from "./Header.module.scss";
import { Arrow, VariantIcon } from "@icons/index";
import Link from "next/link";
import { useRouter } from "next/router";

interface HeaderProps {
  title: string;
  titlebar_img_src: string;
  titlebar_img_alt: string;
  faqTrigger: (toggleState: boolean) => void;
}

const Header: FunctionComponent<HeaderProps> = ({
  title,
  titlebar_img_src,
  titlebar_img_alt,
  faqTrigger,
}) => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <TitleBar
        title={title}
        titlebar_img_src={titlebar_img_src}
        titlebar_img_alt={titlebar_img_alt}
      />
      <div className={styles.push} />
      {router.pathname !== "/variants" && (
        <div className={styles.infoSection}>
          <div className={styles.newInfo}>
            <div>
              <span className={styles.icon}>
                <VariantIcon />
              </span>
              Variant lineage details are now available
            </div>
            <Link href="/variants" passHref={true} prefetch={true}>
              <a target="_blank" className={styles.variantLink}>
                <span className={styles.goToLink}>
                  View Now <Arrow />
                </span>
              </a>
            </Link>
          </div>
          <div className={styles.notesBox}>
            <HeaderNotes faqTrigger={faqTrigger} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
