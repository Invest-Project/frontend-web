import React from 'react';
import HighChartStock from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { StockInfoResT, StockT } from '../constants/types';

const groupingUnits = [[
  'week',                         // unit name
  [1]                             // allowed multiples
], [
  'month',
  [1, 2, 3, 4, 6]
]];

type OHLChartProps = { 
  stock: StockT,
  stockData: StockInfoResT
};

const OHLChart: React.FC<OHLChartProps> = ({ stockData, stock }) => {
  const stockOptions = {
    chart: {
      height: '50%',
    },
    title: {
      text: stock.long_name
    },
    rangeSelector: {
      selected: 6,
    },
    yAxis: [{
      labels: {
          align: 'right',
          x: -3
      },
      title: {
          text: 'OHLC'
      },
      height: '80%',
      lineWidth: 2,
      resize: {
          enabled: true
      }
    }, {
      labels: {
          align: 'right',
          x: -3
      },
      title: {
          text: 'Volume'
      },
      top: '80%',
      height: '20%',
      offset: 0,
      lineWidth: 2
    }],
    series: [{
      type: 'candlestick',
      name: stock.name,
      data: stockData.map(data => [
        +new Date(data.date),
        data.open,
        data.high,
        data.low,
        data.close
      ]),
      dataGrouping: {
          units: groupingUnits
      }
    }, {
        type: 'column',
        name: 'Volume',
        data: stockData.map(data => [+new Date(data.date), data.volume]),
        yAxis: 1,
        dataGrouping: {
            units: groupingUnits
        }
    }],
    tooltip: {
      split: true,
      // valueDecimals: 3
    }
  };
  
  return (
    <HighchartsReact 
      highcharts={HighChartStock}
      constructorType={'stockChart'}
      options={stockOptions}
    />
  );
};

export default OHLChart;
