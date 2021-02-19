import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { StockInfoResT, StockT } from '../../constants/types';
import OHLChart from '../../presentation/OHLC';
import { fetchStockData } from '../../store/stock/actions';
import MAIN_MARKET_STOCK_INFO from '../../utils/Main_Market.json';


const StockProfile: React.FC<{ code: string }> = ({ code }) => {
  const selectedStock = MAIN_MARKET_STOCK_INFO.find(stock => stock.code == code) as StockT;
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    async function getStockData() {
      const [_, ...stockData] = await fetchStockData(code);
      setStockData(stockData);
    }

    getStockData();
  }, []);

  if (selectedStock) {
    return (
      <>
        <p>Stock Info</p>
        <p>Stock Code: {selectedStock.code}</p>
        <p>Stock Ticker: {selectedStock.name}</p>
        <p>Stock Name: {selectedStock.long_name}</p>
        <p>Category: {selectedStock.category} {selectedStock.shariah ? 'V' : 'X'}</p>
        <p>Visit <a href={selectedStock.href}>here</a> for more info</p>
        <OHLChart stock={selectedStock} stockData={stockData} />
      </>
    )
  } else {
    return <Redirect to="/" />;
  }
};

export default StockProfile;
