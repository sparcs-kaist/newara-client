export interface PageInfo {
  num_pages: number;
  num_items: number;
  current: number;
  previous: string | null;
  next: string | null;
}

export interface BaseResponse<T> extends PageInfo {
  results: T[];
}
