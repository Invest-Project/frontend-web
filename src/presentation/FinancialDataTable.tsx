import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { StockFinancialDataResT } from '../constants/types';
import { Typography, Link, Tooltip } from '@material-ui/core';

type FinancialDataTableProps = {
  financials: StockFinancialDataResT;
}

const FINANCIAL_DATA_HEADERS = [
  'Financial Year End',
  'Quarter',
  'Financial Period Ended',
  // Individual Period
  'Revenue',
  'Profit/(loss) before tax',
  'Profit/(loss) for the period',
  'Profit/(loss) attributable to ordinary equity holders of the parent', 
  'BEPS',
  'DPS',
  'Net assets per share',
  // Cumulative Period
  'Revenue',
  'Profit/(loss) before tax',
  'Profit/(loss) for the period',
  'Profit/(loss) attributable to ordinary equity holders of the parent', 
  'BEPS',
  'DPS',
  'Net assets per share',
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const FinancialDataTable: React.FC<FinancialDataTableProps> = ({financials}) => {
  const classes = useStyles();

  if (financials.length) {
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="financial data table">
          <TableHead>
            <TableRow>
              <TableCell>{FINANCIAL_DATA_HEADERS[0]}</TableCell>
              {
                FINANCIAL_DATA_HEADERS.slice(1).map(header => (
                  <Tooltip title={header}>
                    <TableCell align="right">{header}</TableCell>
                  </Tooltip>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {financials.map((row, index) => (
              <TableRow key={index}>
                {/* Financial Year End */}
                <TableCell component="th" scope="row">
                  <Typography>
                    <Link href={row.attachmentURL} target="_blank">
                      {row.financialYearEnd}
                    </Link>
                  </Typography>
                </TableCell>
                {/* Quarter */}
                <TableCell align="right">{row.quarter}</TableCell>
                <TableCell align="right">{row.financialQuarterEnd}</TableCell>
                {/* Individual Period */
                  Object.values(row.individualPeriodData).map((data, index) => (
                    <TableCell align="right" key={index}>{isLoss(data)}</TableCell>
                  ))
                }
                {/* Cumulative Period */
                  Object.values(row.cumulativePeriodData).map((data, index) => (
                    <TableCell align="right" key={index}>{isLoss(data)}</TableCell>
                  ))
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return null;
  }
};

function isLoss(figure: string) {
  if (figure[0] === '-') {
    return `(${figure.slice(1)})`;
  } else {
    return figure;
  }
}

export default FinancialDataTable;
