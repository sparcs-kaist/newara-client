import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./globalfooter.module.scss";
import sparcsLogo from "/sparcs-black.svg";

export const GlobalFooter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles["global-footer"]}>
      <a className={styles["logo"]} href="https://sparcs.org/">
        <img src={sparcsLogo} alt="SPARCS Logo" />
      </a>
      <div className={styles["container"]}>
        <Link to="/contributors">{t("footer.contributors")}</Link>
        <button>{t("footer.termsOfService")}</button>
      </div>
      <a href="mailto:new-ara@sparcs.org">
        {t("footer.contact")}: new-ara@sparcs.org
      </a>
    </footer>
  );
};
