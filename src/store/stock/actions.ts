import axios, { AxiosResponse } from 'axios';
import { StockHistoricalDataResT, StockFinancialDataResT } from '../../constants/types';
import API from '../../constants/api';

export async function fetchStockData(code: string) {
  try {
    const historicalData: AxiosResponse<StockHistoricalDataResT> = await axios.post(API.GET.getStockData, {
      id: code
    });

    const financialData: AxiosResponse<StockFinancialDataResT> = await axios.post(API.GET.getStockFinancials, {
      id: code
    });
  
    return {
      history: historicalData.data,
      financials: financialData.data
    };
  } catch (e) {
    console.error(e);
  }
}