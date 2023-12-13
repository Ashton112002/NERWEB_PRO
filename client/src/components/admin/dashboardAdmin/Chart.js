import React, { Fragment, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getRevenue } from './FetchApi';
import {
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  AreaChart,
  Area
} from 'recharts';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css';
const TimeSeriesChart = () => {
  const [data, setData] = useState([
    {
      total_sales: 200,
      name: 'Dec 05,2023'
    },
    {
      total_sales: 400,
      name: 'Dec 05,2023'
    },
    {
      total_sales: 4100,
      name: 'Dec 08,2023'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async dateRanges => {
    try {
      const result = await getRevenue(dateRanges);

      setData(result.Revenue);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  };
  const formatter = value => `Php ${value}`;

  return (
    <div className="relative m-4 bg-white p-4 shadow-lg">
      <div className="">
        <div class="flex justify-start">
          <div>
            <h1 className="border-b-2 border-yellow-700 mb-4 pb-2 text-2xl font-semibold">
              Revenue
            </h1>
          </div>
          <div className="ml-4">
            Select Date Range:
            <DateRangePicker
              // placeholder="Select Date"
              onChange={async value => {
                console.log(value);
                await fetchData({
                  from: value[0],
                  to: value[1]
                });
              }}
            />
          </div>
        </div>

        {!isLoading && (
          <ResponsiveContainer width="100%" height={500}>
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 30,
                bottom: 0
              }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={formatter} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="total_sales"
                stroke="#679641"
                fill="#679641"
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default TimeSeriesChart;
