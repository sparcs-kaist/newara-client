interface QuerySet {
  [key: string]: string | number | null | undefined;
}

export const addQueries = (endpoint: string, queries: QuerySet): string => {
  const query = Object.entries(queries)
    .map(([key, value]) =>
      value === undefined || value === null ? null : `${key}=${value}`
    )
    .filter((el) => el !== null)
    .join("&");

  return query === "" ? endpoint : `${endpoint}?${query}`;
};
