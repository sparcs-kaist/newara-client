import React from "react";
import { useLoaderData } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BoardData } from "./loader";
import { BoardEntry } from "./BoardEntry";
import { PageNavigator } from "./PageNavigator";
import styles from "./board.module.scss";
import { BoardDetail } from "@/interfaces/board";

export const Board: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { board, articles, pageInfo } = useLoaderData() as BoardData;

  const local_name = i18n.language + "_name";

  return (
    <main className={styles["board"]}>
      <section className={styles["board-container"]}>
        <h1>
          {board === null
            ? t("boardGroup.all")
            : (board[local_name as keyof BoardDetail] as string)}
        </h1>
        <ul className={styles["board-entry-container"]}>
          {articles.map((article) => (
            <React.Fragment key={article.id}>
              <BoardEntry article={article} />
              <hr />
            </React.Fragment>
          ))}
        </ul>
        <PageNavigator pageInfo={pageInfo} />
      </section>
      <aside className={styles["aside"]}>
        <section>Recent</section>
        <section>Bookmarks</section>
      </aside>
    </main>
  );
};
