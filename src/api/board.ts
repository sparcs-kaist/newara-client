import axios from "@/api/axios";
import { BoardDetail, BoardGroup } from "@/interfaces/board";

export const getBoardGroups = async (): Promise<BoardGroup[]> => {
  const res = await axios.get<BoardGroup[]>("/board_groups/");
  const boards = res.data;

  return boards;
};

export const getBoard = async (slug: string): Promise<BoardDetail> => {
  const res = await axios.get<BoardDetail>(`/boards/${slug}/`);
  const board = res.data;

  return board;
};
