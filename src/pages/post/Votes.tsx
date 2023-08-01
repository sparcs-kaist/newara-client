import React from "react";
import {
  MdOutlineThumbDown,
  MdOutlineThumbUp,
  MdThumbDown,
  MdThumbUp,
} from "react-icons/md";
import { postVote } from "@/api/vote";
import classNames from "classnames";
import styles from "./votes.module.scss";

export const Votes: React.FC<{
  state: boolean | null;
  upVotes: number;
  downVotes: number;
  parentId: number;
  isArticle: boolean;
}> = ({ parentId, isArticle, ...props }) => {
  const [state, setState] = React.useState(props.state);
  const [upVotes, setUpVotes] = React.useState(props.upVotes);
  const [downVotes, setDownVotes] = React.useState(props.downVotes);

  const upVoteHandler = () => {
    if (state === true) {
      setState(null);
      setUpVotes((votes) => votes - 1);
      void postVote(parentId, isArticle, "cancel");
    } else {
      setState(true);
      setUpVotes((votes) => votes + 1);
      if (state === false) setDownVotes((votes) => votes - 1);
      void postVote(parentId, isArticle, "up");
    }
  };

  const downVoteHandler = () => {
    if (state === false) {
      setState(null);
      setDownVotes((votes) => votes - 1);
      void postVote(parentId, isArticle, "cancel");
    } else {
      setState(false);
      setDownVotes((votes) => votes + 1);
      if (state === true) setUpVotes((votes) => votes - 1);
      void postVote(parentId, isArticle, "down");
    }
  };

  return (
    <div className={styles["container"]}>
      <button
        onClick={upVoteHandler}
        className={classNames(styles["vote"], {
          [styles["up"]]: state === true,
        })}
      >
        {state === true ? <MdThumbUp /> : <MdOutlineThumbUp />}
        {upVotes}
      </button>
      <button
        onClick={downVoteHandler}
        className={classNames(styles["vote"], {
          [styles["down"]]: state === false,
        })}
      >
        {state === false ? <MdThumbDown /> : <MdOutlineThumbDown />}
        {downVotes}
      </button>
    </div>
  );
};
