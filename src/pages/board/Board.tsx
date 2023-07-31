import React from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BoardData } from "./loader";
import { BoardEntry } from "./BoardEntry";
import { PageNavigator } from "./PageNavigator";
import { useLocalName } from "@/hooks/i18n";
import classNames from "classnames";
import styles from "./board.module.scss";

export const Board: React.FC = () => {
  const { t } = useTranslation();
  const localName = useLocalName();

  const { board, articles, pageInfo } = useLoaderData() as BoardData;
  const [searchParams] = useSearchParams();

  return (
    <main className={styles["board"]}>
      <section className={styles["board-container"]}>
        <header className={styles["board-header"]}>
          <h1>{board === null ? t("board.all") : board[localName]}</h1>
          <div className={styles["filter-container"]}>
            {board === null || board.topics.length === 0 ? null : (
              <>
                <span
                  className={classNames(
                    styles["filter"],
                    styles["filter-name"]
                  )}
                >
                  {t("board.filter")}
                </span>
                <Link
                  className={classNames(styles["filter"], {
                    [styles["filter-selected"]]:
                      searchParams.get("topic") === null,
                  })}
                  to="."
                >
                  {t("board.filter-none")}
                </Link>
                {board.topics.map((topic) => (
                  <Link
                    key={topic.id}
                    className={classNames(styles["filter"], {
                      [styles["filter-selected"]]:
                        searchParams.get("topic") === topic.slug,
                    })}
                    to={`.?topic=${topic.slug}`}
                  >
                    {topic[localName]}
                  </Link>
                ))}
              </>
            )}
          </div>
        </header>
        <hr />
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
