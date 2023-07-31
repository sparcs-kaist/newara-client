import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalName } from "@/hooks/i18n";
import { useBoardGroups } from "@/hooks/boards";
import { MdLanguage } from "react-icons/md";
import { Dropdown } from "./Dropdown";
import styles from "./globalnav.module.scss";
import araLogo from "/ara.svg";

export const GlobalNav: React.FC = () => {
  const { t, i18n } = useTranslation();
  const localName = useLocalName();

  const boardGroups = useBoardGroups();

  return (
    <nav className={styles["global-nav"]}>
      <Link className={styles["logo"]} to="/">
        <img src={araLogo} alt="Ara logo" />
      </Link>
      <div className={styles["nav-container"]}>
        <Link className={styles["single-nav"]} to="/board">
          {t("board.all")}
        </Link>
        {boardGroups.map((group) => {
          return group.boards.length <= 1 ? (
            <Link
              key={group.id}
              className={styles["single-nav"]}
              to={`/board/${group.boards[0].slug}`}
            >
              {group.boards[0][localName]}
            </Link>
          ) : (
            <Dropdown
              key={group.id}
              name={group[localName]}
              items={group.boards.map((board) => {
                return {
                  name: board[localName],
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
