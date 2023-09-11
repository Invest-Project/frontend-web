import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchBar from '../../presentation/SearchBar';

import { Typography } from '@material-ui/core';
import MAIN_MARKET_STOCK_INFO from '../../utils/Main_Market.json';
import { StockT } from '../../constants/types';

const INITIAL_STOCK_STATE: StockT = {
  category: '',
  code: 0,
  href: '',
  long_name: '',
  name: '',
  shariah: 0 as 0|1,
};

type stockDataT = typeof INITIAL_STOCK_STATE;

const LandingPage: React.FC<{}> = () => {
  const [query, setQuery] = useState(INITIAL_STOCK_STATE);
  const history = useHistory();

  React.useEffect(() => {
    console.log('test');
    console.log('test again')
    if (query.code) {
      history.push(`/stock/${query.code}`);
    }
  }, [query]);

  return (
    <>
      {/* HERO */}
      <SearchBar
        options={MAIN_MARKET_STOCK_INFO}
        getOptionLabel={(option: stockDataT): string => option?.name}
        label="Search by stock ticker"
        setQuery={setQuery}
      />
      <Typography variant="h6">Welcome to Rogue One!</Typography>
    </>
  );
};

export default LandingPage;
