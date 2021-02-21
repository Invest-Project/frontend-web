import axios, { AxiosResponse } from 'axios';
import { StockInfoResT } from '../../constants/types';
import API from '../../constants/api';

export async function fetchStockData(code: string) {
  try {
    const response: AxiosResponse<StockInfoResT> = await axios.post(API.GET.getStockData, {
      id: code
    });

    const response2 = await axios.post('http://localhost:3001/requestRecords', {
      id: code
    });
  
    return {
      chart: response.data,
      record: response2.data
    };
  } catch (e) {
    console.error(e);
  }
}