import axios from "@/api/axios";
import { addQueries } from "./utils";
import type {
  ArticleDetail,
  ArticleListItem,
  BestArticles,
} from "@/interfaces/article";
import { BaseResponse } from "@/interfaces/base";

interface Bests {
  daily_bests: ArticleListItem[];
  weekly_bests: ArticleListItem[];
}

export const getBestArticles = async (): Promise<BestArticles> => {
  const res = await axios.get<Bests>("/home/");
  const { daily_bests, weekly_bests } = res.data;

  return { dailyBests: daily_bests, weeklyBests: weekly_bests };
};

export const getArticles = async ({
  board,
  page,
  size,
}: {
  board?: string;
  page?: number;
  size?: number;
}): Promise<BaseResponse<ArticleListItem>> => {
  const endpoint = addQueries("/articles/", {
    board,
    page,
    page_size: size,
  });
  const res = await axios.get<BaseResponse<ArticleListItem>>(endpoint);

  return res.data;
};

export const getArticle = async (id: number): Promise<ArticleDetail> => {
  const res = await axios.get<ArticleDetail>(`/articles/${id}/`);

  return res.data;
};
