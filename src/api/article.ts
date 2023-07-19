import axios from "@/api/axios";
import { Article, BestArticles } from "@/interfaces/article";

interface Bests {
  daily_bests: Article[];
  weekly_bests: Article[];
}

export const getBestArticles = async (): Promise<BestArticles> => {
  const res = await axios.get<Bests>("/home/");
  const { daily_bests, weekly_bests } = res.data;

  return { dailyBests: daily_bests, weeklyBests: weekly_bests };
};
