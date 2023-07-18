import React from "react";
import { Link } from "react-router-dom";
import styles from "./dropdown.module.scss";

export const Dropdown: React.FC<{
  name: string;
  items: {
    name: string;
    link: string;
  }[];
}> = ({ name, items }) => {
  return (
    <div className={styles["dropdown"]}>
      <div className={styles["dropdown__name"]}>{name}</div>
      <div className={styles["dropdown__items"]}>
        {items.map((item) => (
          <Link key={item.name} to={item.link}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
