import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import { useBestArticles } from "@/hooks/article";
import { MdSearch } from "react-icons/md";
import { Preview } from "./Preview";
import classNames from "classnames";
import styles from "./home.module.scss";

interface Keyword {
  key: string;
  ko: string;
  en: string;
}

interface SearchForm extends HTMLFormControlsCollection {
  query: HTMLInputElement;
}

export const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const bestArticles = useBestArticles();

  // TODO: Fetch API to get keywords.
  const keywords: Keyword[] = [
    { key: "students-working", ko: "근로 학생", en: "Students Working" },
    { key: "lecture-review", ko: "강의 평가", en: "Lecture Review" },
    { key: "enrolement", ko: "수강 신청", en: "Enrolment" },
    { key: "season-term", ko: "계절 학기", en: "Season Term" },
    { key: "grade", ko: "성적", en: "Grade" },
    { key: "tuition-payment", ko: "등록금 납부", en: "Tuition Payment" },
    { key: "graduation-requirements", ko: "졸업 요건", en: "Graduation Reqs" },
  ];

  const search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = (event.target as HTMLFormElement).elements as SearchForm;
    const query = form.query.value;
    navigate(`/board?query=${query}`);
  };

  return (
    <>
      <main>
        <header className={styles["header"]}>
          <h1 className={styles["slogan"]}>
            <Trans
              i18nKey="slogan.text"
              values={{
                fast: t("slogan.fast"),
                accurate: t("slogan.accurate"),
              }}
              components={[
                <span className={styles["slogan-bold"]} />,
                <span
                  className={classNames(
                    styles["slogan-bold"],
                    styles["slogan-red"]
                  )}
                />,
              ]}
            />
          </h1>
          <form className={styles["search"]} onSubmit={search}>
            <button type="submit">
              <MdSearch />
            </button>
            <input type="search" name="query" />
          </form>
          <div className={styles["keyword-container"]}>
            <span className={styles["keyword"]}>{t("keyword.keywords")}</span>
            {keywords.map((keyword) => {
              const query = keyword[i18n.language as keyof Keyword];
              return (
                <Link
                  key={keyword.key}
                  className={styles["keyword-item"]}
                  to={`/board?query=${query}`}
                >
                  {query}
                </Link>
              );
            })}
          </div>
        </header>
        <section className={styles["preview-container"]}>
          <Preview
            header={t("preview.dailyBest")}
            items={bestArticles.dailyBests.map((article) => ({
              id: article.id,
              title: article.title,
            }))}
          />
          <hr />
          <Preview
            header={t("preview.weeklyBest")}
            items={bestArticles.weeklyBests.map((article) => ({
              id: article.id,
              title: article.title,
            }))}
          />
          <hr />
          <Preview
            header={t("preview.araNotice")}
            items={[
              { id: 1, title: "Title1" },
              { id: 2, title: "Title2" },
              { id: 3, title: "Title3" },
              { id: 4, title: "Title4" },
              { id: 5, title: "Title5" },
            ]}
          />
        </section>
      </main>
    </>
  );
};
