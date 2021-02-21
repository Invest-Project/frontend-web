export type StockT = {
  code: number;
  name: string;
  long_name: string;
  category: string;
  shariah: 0|1;
  href: string;
};

// export type StockInfoT = {
//   date: string;
//   open: number;
//   high: number;
//   low: number;
//   close: number;
//   volume: number;
// };

export type StockHistoricalDataT = [
  number, // Date
  number, // open
  number, // high
  number, // low
  number, // close
  number, // volume
];

export interface iFinancialInfo {
  revenue: string;
  profitBeforeTax: string; // Loss is negative
  profitForThePeriod: string; // Loss is negative
  profitAttributableToEquityHolders: string;
  BasicEarningPerShare: string;
  DividendPerShare: string;
  NetAssetPerShareAttributableToEquityHolders: string;
}

// export type StockFinancialDataT = [
//   string, // Financial Year End (Date)
//   string, // Quarter (1|2|3|4)
//   string, // Quarterly report for the financial period ended (Date)
//   string, // Figures isAudited?
//   string, // Attachments URL
//   // Individual Period
//   string, // Revenue $'000
//   string, // Profit/(loss) before tax $'000
//   string, // Profit/(loss) for the period $'000
//   string, // Profit/(loss) attributable to ordinary equity holders of the parent $'000
//   string, // Basic earnings/(loss) per share (Subunit)
//   string, // Proposed/Declared dividend per share (Subunit)
//   string, // Net assets per share attributable to ordinary equity holders of the parent (\$$)
//   // Cumulative Period
//   string, // Revenue \$$'000
//   string, // Profit/(loss) before tax \$$'000,
//   string, // Profit/(loss) for the period \$$'000,
//   string, // Profit/(loss) attributable to ordinary equity holders of the parent \$$'000,
//   string, // Basic earnings/(loss) per share (Subunit),
//   string, // Proposed/Declared dividend per share (Subunit),
//   string, // Net assets per share attributable to ordinary equity holders of the parent (\$$)
// ];

export type StockFinancialDataT = {
  financialYearEnd: string; // Date;
  quarter: 1|2|3|4;
  financialQuarterEnd: string; // Date;
  isAudited: boolean;
  attachmentURL: string;
  individualPeriodData: iFinancialInfo;
  cumulativePeriodData: iFinancialInfo;
}

export type StockHistoricalDataResT = Array<StockHistoricalDataT>;
export type StockFinancialDataResT = Array<StockFinancialDataT>;