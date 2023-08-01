import axios from "@/api/axios";

export const postVote = async (
  id: number,
  isArticle: boolean,
  method: "up" | "down" | "cancel"
): Promise<void> => {
  const parent = isArticle ? "articles" : "comments";
  const path = {
    up: "vote_positive",
    down: "vote_negative",
    cancel: "vote_cancel",
  };

  await axios.post(`/${parent}/${id}/${path[method]}/`);
};
