import axios, { AxiosResponse } from 'axios';
import { StockInfoResT } from '../../constants/types';
import API from '../../constants/api';

export async function fetchStockData(code: string) {
  try {
    const response: AxiosResponse<StockInfoResT> = await axios.get(API.GET.getStockData, {
      params: { code }
    });
  
    return response.data;
  } catch (e) {
    console.error(e);
  }
}