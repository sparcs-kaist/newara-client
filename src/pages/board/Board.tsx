import React from "react";
import { useLoaderData } from "react-router-dom";
import { getTitle } from "@/utils/article";
import { BoardData } from "./loader";
import { PageNavigator } from "./PageNavigator";
import styles from "./board.module.scss";

export const Board: React.FC = () => {
  const { articles, pageInfo } = useLoaderData() as BoardData;

  return (
    <main className={styles["board"]}>
      <section className={styles["board-container"]}>
        <h1>Board</h1>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <span>{getTitle(article)}</span>
            </li>
          ))}
        </ul>
        <PageNavigator pageInfo={pageInfo} />
      </section>
      <aside>
        <section>Recent</section>
        <section>Bookmarks</section>
      </aside>
    </main>
  );
};
