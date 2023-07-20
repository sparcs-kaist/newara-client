interface QuerySet {
  [key: string]: string | number | undefined;
}

export const addQueries = (endpoint: string, queries: QuerySet): string => {
  const query = Object.entries(queries)
    .map(([key, value]) => (value === undefined ? "" : `${key}=${value}`))
    .join("&");

  return query === "" ? endpoint : `${endpoint}?${query}`;
};
