import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Votes } from "./Votes";
import type { Comment as CommentType } from "@/interfaces/comment";
import styles from "./comment.module.scss";

export const Comment: React.FC<{ comment: CommentType }> = ({ comment }) => {
  const { t } = useTranslation();

  const [isReplyOpened, setIsReplyOpened] = React.useState<boolean>(false);

  const replyBtnHandler = () => {
    setIsReplyOpened((curr) => !curr);
  };

  Intl.DateTimeFormat;

  return (
    <div className={styles["comment"]}>
      <img
        className={styles["profile-image"]}
        src={comment.created_by.profile.picture}
        alt="Profile Image"
      />
      <div className={styles["nickname-container"]}>
        <Link className={styles["nickname"]} to="#">
          {comment.created_by.profile.nickname}
        </Link>
        <span className={styles["comment-date"]}>
          {t("article.date", {
            date: new Date(comment.created_at),
            formatParams: {
              date: {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
              },
            },
          })}
        </span>
      </div>
      <p className={styles["contents"]}>{comment.content}</p>
      <div className={styles["button-container"]}>
        <Votes
          state={comment.my_vote}
          upVotes={comment.positive_vote_count}
          downVotes={comment.negative_vote_count}
          parentId={comment.id}
          isArticle={false}
        />
        {comment.comments ? (
          <button className={styles["reply-btn"]} onClick={replyBtnHandler}>
            {t(isReplyOpened ? "comment.closeReply" : "comment.reply")}
          </button>
        ) : null}
      </div>
      {comment.comments && comment.comments.length ? (
        <>
          <div className={styles["reply-bar"]}>
            <hr />
          </div>
          <div className={styles["reply-container"]}>
            {comment.comments.map((reply) => (
              <Comment key={reply.id} comment={reply} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};
