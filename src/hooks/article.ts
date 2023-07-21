import React from "react";
import { getArticles, getBestArticles } from "@/api/article";
import { Article, BestArticles } from "@/interfaces/article";

export const useBestArticles = (): BestArticles => {
  const [bestArticles, setBestArticles] = React.useState<BestArticles>({
    dailyBests: [],
    weeklyBests: [],
  });

  React.useEffect(() => {
    void (async () => {
      const data = await getBestArticles();
      setBestArticles(data);
    })();
  }, []);

  return bestArticles;
};

export const useNotices = (): Article[] => {
  const [notices, setNotices] = React.useState<Article[]>([]);

  React.useEffect(() => {
    void (async () => {
      const data = await getArticles({ board: "ara-notice", size: 5 });
      setNotices(data.results);
    })();
  }, []);

  return notices;
};
