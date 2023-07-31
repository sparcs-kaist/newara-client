import type { IconType } from "react-icons";
import {
  MdHelpOutline,
  MdVisibilityOff,
  MdVoiceOverOff,
  MdWarning,
} from "react-icons/md";
import i18n from "@/i18n";
import { Article } from "@/interfaces/article";

export const getTitle = (article: Article): string => {
  return (
    article.title ?? i18n.t(`hidden.${article.why_hidden[0]}`, { ns: "system" })
  );
};

export const getHiddenProfileImage = (article: Article): IconType | null => {
  if (!article.is_hidden) return null;

  switch (article.why_hidden[0]) {
    case "ADULT_CONTENT":
    case "SOCIAL_CONTENT":
      return MdVisibilityOff as IconType;
    case "REPORTED_CONTENT":
      return MdWarning as IconType;
    case "BLOCKED_USER_CONTENT":
      return MdVoiceOverOff as IconType;
    default:
      return MdHelpOutline as IconType;
  }
};
