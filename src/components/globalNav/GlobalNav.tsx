import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useBoardGroups } from "@/hooks/boards";
import { Board, BoardGroup } from "@/interfaces/board";
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
        {boardGroups.map((group) => {
          const name = i18n.language + "_name";
          return group.boards.length <= 1 ? (
            <Link
              key={group.id}
              className={styles["single-nav"]}
              to={`/board/${group.boards[0].slug}`}
            >
              {group.boards[0][name as keyof Board] as string}
            </Link>
          ) : (
            <Dropdown
              key={group.id}
              name={group[name as keyof BoardGroup] as string}
              items={group.boards.map((board) => {
                return {
                  name: board[name as keyof Board] as string,
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
