import axios from "@/api/axios";
import { Board, BoardGroups } from "@/interfaces/board";

const groupMap: string[] = [
  "", // groupId starts from index 1.
  "notice",
  "talk",
  "club",
  "trade",
  "communication",
];

export const getBoardGroups = async (): Promise<BoardGroups> => {
  const res = await axios.get<Board[]>("/boards/");
  const boards = res.data;

  // Groups are displayed in this order.
  const groups: BoardGroups = {
    notice: [],
    communication: [],
    talk: [],
    club: [],
    trade: [],
  };

  boards.forEach((board) => {
    const groupName = groupMap[board.group_id];
    groups[groupName].push(board);
  });

  return groups;
};
