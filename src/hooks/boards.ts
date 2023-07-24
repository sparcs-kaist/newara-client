import React from "react";
import { getBoardGroups } from "@/api/board";
import { BoardGroup } from "@/interfaces/board";

export const useBoardGroups = (): BoardGroup[] => {
  const [boardGroups, setBoardGroups] = React.useState<BoardGroup[]>([]);

  React.useEffect(() => {
    void (async () => {
      const data = await getBoardGroups();
      setBoardGroups(data);
    })();
  }, []);

  return boardGroups;
};
