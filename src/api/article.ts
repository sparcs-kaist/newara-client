import axios from "@/api/axios";
import { addQueries } from "./utils";
import { Article, BestArticles } from "@/interfaces/article";
import { BaseResponse } from "@/interfaces/base";

interface Bests {
  daily_bests: Article[];
  weekly_bests: Article[];
}

export const getBestArticles = async (): Promise<BestArticles> => {
  const res = await axios.get<Bests>("/home/");
  const { daily_bests, weekly_bests } = res.data;

  return { dailyBests: daily_bests, weeklyBests: weekly_bests };
};

export const getArticles = async ({
  board,
  size,
}: {
  board?: string;
  size?: number;
}): Promise<BaseResponse<Article>> => {
  const endpoint = addQueries("/articles/", {
    board,
    page_size: size,
  });
  const res = await axios.get<BaseResponse<Article>>(endpoint);

  return res.data;
};
