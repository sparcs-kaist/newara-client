import type { LoaderFunctionArgs } from "react-router-dom";
import { getArticles } from "@/api/article";
import { getBoard } from "@/api/board";
import type { ArticleListItem } from "@/interfaces/article";
import { PageInfo } from "@/interfaces/base";
import { BoardDetail } from "@/interfaces/board";

export interface BoardData {
  board: BoardDetail | null;
  articles: ArticleListItem[];
  pageInfo: PageInfo;
}

export const boardLoader = async ({
  request,
  params,
}: LoaderFunctionArgs): Promise<BoardData> => {
  const pageQ = Number(new URL(request.url).searchParams.get("page"));
  const page = isNaN(pageQ) || pageQ < 1 ? undefined : pageQ;

  const boardSlug = params["boardSlug"];

  const board = boardSlug === undefined ? null : await getBoard(boardSlug);

  const { results, ...pageInfo } = await getArticles({
    board: boardSlug,
    page,
  });
  return { board, articles: results, pageInfo };
};
