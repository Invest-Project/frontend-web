export type StockT = {
  code: number;
  name: string;
  long_name: string;
  category: string;
  shariah: 0|1;
  href: string;
};

export type StockInfoT = {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export type StockInfoResT = Array<StockInfoT>;