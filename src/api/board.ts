import axios from "@/api/axios";
import { BoardGroup } from "@/interfaces/board";

export const getBoardGroups = async (): Promise<BoardGroup[]> => {
  const res = await axios.get<BoardGroup[]>("/board_groups/");
  const boards = res.data;

  return boards;
};
