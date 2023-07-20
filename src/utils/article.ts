import i18n from "@/i18n";
import { Article } from "@/interfaces/article";

export const getTitle = (article: Article): string => {
  return (
    article.title ?? i18n.t(`hidden.${article.why_hidden[0]}`, { ns: "system" })
  );
};
