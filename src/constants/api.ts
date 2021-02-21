const BACK_END = 'http://localhost:3001';

const API = {
  GET: {
    getStockData: `${BACK_END}/requestEod`,
    getStockFinancials: `${BACK_END}/requestRecords`
  }
}

export default API;
