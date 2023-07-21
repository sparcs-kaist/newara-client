export const getPages = (
  current: number,
  pages: number,
  display = 10
): {
  pages: number[];
  isStartPage: boolean;
  isEndPage: boolean;
} => {
  const remainder = (current - 1) % display;

  const start = current - remainder;
  const end = Math.min(start + display - 1, pages);

  return {
    pages: [...Array(end - start + 1).keys()].map((el) => el + start),
    isStartPage: start === 1,
    isEndPage: end === pages,
  };
};
