export interface BaseResponse<T> {
  num_pages: number;
  num_items: number;
  current: number;
  previous: string | null;
  next: string | null;
  results: T[];
}
