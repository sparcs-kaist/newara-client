import React from "react";
import { useLoaderData } from "react-router-dom";
import { BoardData } from "./loader";
import { BoardEntry } from "./BoardEntry";
import { PageNavigator } from "./PageNavigator";
import styles from "./board.module.scss";

export const Board: React.FC = () => {
  const { articles, pageInfo } = useLoaderData() as BoardData;

  return (
    <main className={styles["board"]}>
      <section className={styles["board-container"]}>
        <h1>Board</h1>
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
