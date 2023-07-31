import type { LoaderFunctionArgs } from "react-router-dom";
import { getArticle } from "@/api/article";
import type { ArticleDetail } from "@/interfaces/article";

export interface PostData {
  article: ArticleDetail;
}

export const postLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<PostData> => {
  const articleId = Number(params["postId"]);

  if (isNaN(articleId) || articleId < 1)
    throw new Response("Not Found", { status: 404 });

  const article = await getArticle(articleId);

  return { article };
};
