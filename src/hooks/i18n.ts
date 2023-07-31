import i18n from "@/i18n";

type LocalName = "ko_name" | "en_name";

export const useLocalName = (): LocalName => {
  return (i18n.language + "_name") as LocalName;
};
