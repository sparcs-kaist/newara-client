import React from "react";
import { useTranslation, Trans } from "react-i18next";
import classNames from "classnames";
import styles from "./home.module.scss";

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <h1 className={styles["slogan"]}>
          <Trans
            i18nKey="slogan.text"
            values={{ fast: t("slogan.fast"), accurate: t("slogan.accurate") }}
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
      </main>
    </>
  );
};
