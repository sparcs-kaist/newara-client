import React from "react";
import { getBestArticles } from "@/api/article";
import { BestArticles } from "@/interfaces/article";

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
