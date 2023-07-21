import React from "react";
import { useTranslation } from "react-i18next";
import { getTitle } from "@/utils/article";
import type { Article } from "@/interfaces/article";
import styles from "./boardentry.module.scss";

export const BoardEntry: React.FC<{ article: Article }> = ({ article }) => {
  const { t } = useTranslation();

  return (
    <li className={styles["entry"]}>
      <img
        className={styles["profile-img"]}
        src={article.created_by.profile.picture}
        alt="Profile Image"
      />
      <div className={styles["body"]}>
        <span className={styles["title"]}>{getTitle(article)}</span>
        <div className={styles["info-container"]}>
          <span>
            {t("article.date", {
              date: new Date(article.created_at),
              formatParams: {
                date: {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                },
              },
            })}
          </span>
          <span>
            {t("article.view")} {article.hit_count}
          </span>
          <span className={styles["upvote"]}>
            +{article.positive_vote_count}
          </span>
          <span className={styles["downvote"]}>
            -{article.negative_vote_count}
          </span>
        </div>
      </div>
      <span className={styles["author"]}>
        {article.created_by.profile.nickname}
      </span>
    </li>
  );
};
