import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import classNames from "classnames";
import { getPages } from "@/utils/page";
import { PageInfo } from "@/interfaces/base";
import styles from "./pagenavigator.module.scss";

export const PageNavigator: React.FC<{ pageInfo: PageInfo }> = ({
  pageInfo,
}) => {
  const { pages, isStartPage, isEndPage } = getPages(
    pageInfo.current,
    pageInfo.num_pages
  );

  if (pages.length === 0) return <></>;

  return (
    <nav className={styles["pages"]}>
      {isStartPage ? null : (
        <Link className={styles["pages-arrow"]} to={`.?page=${pages[0] - 1}`}>
          <MdKeyboardArrowLeft />
        </Link>
      )}
      {pages.map((page) => (
        <Link
          key={page}
          className={classNames({
            [styles["current-page"]]: pageInfo.current === page,
          })}
          to={`.?page=${page}`}
        >
          {page}
        </Link>
      ))}
      {isEndPage ? null : (
        <Link
          className={styles["pages-arrow"]}
          to={`.?page=${(pages.at(-1) as number) + 1}`} // `pages` is not empty
        >
          <MdKeyboardArrowRight />
        </Link>
      )}
    </nav>
  );
};
