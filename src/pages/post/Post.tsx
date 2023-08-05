import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import type { PostData } from "./loader";
import { Comment } from "./Comment";
import { Votes } from "./Votes";
import { useLocalName } from "@/hooks/i18n";
import styles from "./post.module.scss";
import { getTitle } from "@/utils/article";

export const Post: React.FC = () => {
  const { t } = useTranslation();
  const localName = useLocalName();

  const { article } = useLoaderData() as PostData;

  return (
    <main>
      <section>
        <nav className={styles["board-nav"]}>
          <Link
            className={styles["to-board"]}
            to={`/board/${article.parent_board.slug}`}
          >
            <MdKeyboardArrowLeft />
            <span>{article.parent_board[localName]}</span>
          </Link>
        </nav>
        <hr className={styles["divider-dark"]} />
        <header className={styles["header"]}>
          <h1 className={styles["title"]}>
            {getTitle(article)} <span>({article.comment_count})</span>
          </h1>
          <div className={styles["info-container"]}>
            <span>
              {t("article.postedAt")}
              {" · "}
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
              {t("article.view")} · {article.hit_count}
            </span>
          </div>
          <Link className={styles["author-link"]} to="#">
            <img src={article.created_by.profile.picture} alt="Profile Image" />
            <span>{article.created_by.profile.nickname}</span>
            <MdKeyboardArrowRight />
          </Link>
        </header>
        <hr className={styles["divider-light"]} />
        <div
          className={styles["contents"]}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        <div className={styles["button-container"]}>
          <div>
            <Votes
              state={article.my_vote}
              upVotes={article.positive_vote_count}
              downVotes={article.negative_vote_count}
              parentId={article.id}
              isArticle={true}
            />
          </div>
        </div>
        <hr className={styles["divider-dark"]} />
        <h2 className={styles["comments"]}>
          {t("comment.comment", { count: article.comment_count })}{" "}
          <span>{article.comment_count}</span>
        </h2>
        <div className={styles["comment-container"]}>
          {article.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </section>
    </main>
  );
};
