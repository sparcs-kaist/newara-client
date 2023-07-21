import type { LoaderFunctionArgs } from "react-router-dom";
import { getArticles } from "@/api/article";
import type { Article } from "@/interfaces/article";
import { PageInfo } from "@/interfaces/base";

export interface BoardData {
  articles: Article[];
  pageInfo: PageInfo;
}

export const boardLoader = async ({
  request,
  params,
}: LoaderFunctionArgs): Promise<BoardData> => {
  const pageQ = Number(new URL(request.url).searchParams.get("page"));
  const page = isNaN(pageQ) || pageQ < 1 ? undefined : pageQ;

  const { results, ...pageInfo } = await getArticles({
    board: params["boardSlug"],
    page,
  });
  return { articles: results, pageInfo };
};
