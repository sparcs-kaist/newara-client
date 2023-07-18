import React from "react";
import { getBoardGroups } from "@/api/boards";
import { BoardGroups } from "@/interfaces/boards";

export const useBoardGroups = (): BoardGroups => {
  const [boardGroups, setBoardGroups] = React.useState<BoardGroups>({});

  React.useEffect(() => {
    void (async () => {
      const data = await getBoardGroups();
      setBoardGroups(data);
    })();
  }, []);

  return boardGroups;
};
