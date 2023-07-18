import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useBoardGroups } from "@/hooks/boards";
import { Board } from "@/interfaces/boards";
import { MdLanguage } from "react-icons/md";
import { Dropdown } from "./Dropdown";
import styles from "./globalnav.module.scss";
import araLogo from "/ara.svg";

export const GlobalNav: React.FC = () => {
  const { t, i18n } = useTranslation();
  const boardGroups = useBoardGroups();

  return (
    <nav className={styles["global-nav"]}>
      <Link className={styles["logo"]} to="/">
        <img src={araLogo} alt="Ara logo" />
      </Link>
      <div className={styles["nav-container"]}>
        <Link className={styles["single-nav"]} to="/board">
          {t("boardGroup.all")}
        </Link>
        {Object.entries(boardGroups).map(([groupName, boards]) => {
          const name = (i18n.language + "_name") as keyof Board;
          return boards.length <= 1 ? (
            <Link
              key={groupName}
              className={styles["single-nav"]}
              to={`/board/${boards[0].slug}`}
            >
              {boards[0][name] as string}
            </Link>
          ) : (
            <Dropdown
              key={groupName}
              name={t(`boardGroup.${groupName}`)}
              items={boards.map((board) => {
                return {
                  name: board[name] as string,
                  link: `/board/${board.slug}`,
                };
              })}
            />
          );
        })}
      </div>
      <button
        className={styles["translate-btn"]}
        onClick={() => {
          const lang = i18n.language === "ko" ? "en" : "ko";
          void i18n.changeLanguage(lang);
        }}
      >
        <MdLanguage />
      </button>
    </nav>
  );
};
