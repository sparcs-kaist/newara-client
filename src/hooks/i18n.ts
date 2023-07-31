import { useTranslation } from "react-i18next";

type LocalName = "ko_name" | "en_name";

export const useLocalName = (): LocalName => {
  const { i18n } = useTranslation();

  return (i18n.language + "_name") as LocalName;
};
