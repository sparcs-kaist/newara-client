import React from "react";
import { Link } from "react-router-dom";
import styles from "./preview.module.scss";

export const Preview: React.FC<{
  header: string;
  items: {
    id: number;
    title: string;
  }[];
}> = ({ header, items }) => {
  return (
    <section className={styles["preview"]}>
      <div className={styles["box"]}></div>
      <h2 className={styles["header"]}>{header}</h2>
      <ul className={styles["item-container"]}>
        {items.map(({ id, title }) => (
          <li key={id} className={styles["item"]}>
            <Link to="#">{title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
