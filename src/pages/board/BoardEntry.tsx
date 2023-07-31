import React from "react";
import { useTranslation } from "react-i18next";
import { useLocalName } from "@/hooks/i18n";
import { getTitle } from "@/utils/article";
import { millisecondsToHours } from "@/utils/base";
import type { ArticleListItem } from "@/interfaces/article";
import styles from "./boardentry.module.scss";

export const BoardEntry: React.FC<{ article: ArticleListItem }> = ({
  article,
}) => {
  const { t } = useTranslation();
  const localName = useLocalName();

  const tagName = { N: "new", U: "up" };

  const { created_at, commented_at, content_updated_at } = article;
  const updates = [created_at, commented_at, content_updated_at].map((date) =>
    new Date(date ?? 0).getTime()
  );
  const before24Hours =
    millisecondsToHours(new Date().getTime() - Math.max(...updates)) < 24;

  return (
    <li className={styles["entry"]}>
      <img
        className={styles["profile-img"]}
        src={article.created_by.profile.picture}
        alt="Profile Image"
      />
      <div className={styles["body"]}>
        <div className={styles["title-container"]}>
          {article.parent_topic === null ? null : (
            <span className={styles["topic"]}>
              [{article.parent_topic[localName]}]
            </span>
          )}
          <span className={styles["title"]}>{getTitle(article)}</span>
          {article.comment_count ? (
            <span className={styles["comment-count"]}>
              ({article.comment_count})
            </span>
          ) : null}
          {article.read_status !== "-" && before24Hours ? (
            <span className={styles["status-tag"]}>
              {tagName[article.read_status]}
            </span>
          ) : null}
        </div>
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
