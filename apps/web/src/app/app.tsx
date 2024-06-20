// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useMemo } from 'react';
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  // RouterProvider,
  // createHashRouter,
} from 'react-router-dom';
import { storage, utils } from '@qubejs/web-react';
import containers from '../containers';
import templates from '../templates';
import '../styles/themes/main/index.scss';
import config from '../config';

const {
  redirect: { setUrlMapping, setNavigate },
  datetime: { DateTime },
} = utils;

setUrlMapping(config.urlMapping);

storage.containers.set({
  ...containers,
  ...templates,
});

const data = [];
for (let index = 0; index < 100; index++) {
  data.push({
    date: new DateTime().addDays(index).toString(),
    open: parseInt((Math.random() * 100).toString()),
    closed: parseInt((Math.random() * 100).toString()),
  });
}
const pieData = [
  {
    category: '6671275cf536773e22496615',
    transactionType: 'dr',
    amount: 2244,
    categoryName: 'Entertainment',
  },
  {
    category: '6671275cf536773e22496610',
    transactionType: 'dr',
    amount: 12,
    categoryName: 'Dine out',
  },
  {
    category: '6671275cf536773e22496606',
    transactionType: 'cr',
    amount: 20000,
    categoryName: 'Bonus',
  },
];
export function App() {
  const navigate = useNavigate();
  // const { Snackbar } = storage.components.get();
  const { Chart } = storage.components.get();
  console.log(data, Chart);
  useEffect(() => {
    setNavigate(navigate);
  }, []);

  const chartConfigLine = useMemo(
    () => ({
      xAxis: [
        {
          scaleType: 'time',
          dataType: 'date',
          dataKey: 'date',
          min: new Date(data[0].date),
          max: new Date(data[data.length - 1].date),
          valueFormatter: (val) => {
            return utils.format.getFormatters().dateOnly(val);
          },
        },
      ],
      series: [
        {
          label: 'Open',
          // area: true,
          showMark: false,
          connectNulls: true,
          dataKey: 'open',
          valueFormatter: (value) => {
            return value === null
              ? 'N/A'
              : utils.format.getFormatters().currency(value);
          },
          // color: cssVariabs.brandSecondary,
        },
        {
          label: 'Closed',
          // xValue: 'date',
          // area: true,
          showMark: false,
          connectNulls: true,
          dataKey: 'closed',
          // color: cssVariabs.infoDarker,
          valueFormatter: (value) => {
            return value === null
              ? 'N/A'
              : utils.format.getFormatters().currency(value);
          },
        },
      ],
    }),
    []
  );
  const chartConfigBar = useMemo(
    () => ({
      xAxis: [
        {
          scaleType: 'band',
          dataType: 'date',
          dataKey: 'date',
          min: new Date(data[0].date),
          max: new Date(data[data.length - 1].date),
          valueFormatter: (val) => {
            return utils.format.getFormatters().dateOnly(val);
          },
        },
      ],
      series: [
        {
          label: 'Open',
          // area: true,
          showMark: false,
          connectNulls: true,
          dataKey: 'open',
          valueFormatter: (value) => {
            return value === null
              ? 'N/A'
              : utils.format.getFormatters().currency(value);
          },
          // color: cssVariabs.brandSecondary,
        },
        {
          label: 'Closed',
          // xValue: 'date',
          // area: true,
          showMark: false,
          connectNulls: true,
          dataKey: 'closed',
          // color: cssVariabs.infoDarker,
          valueFormatter: (value) => {
            return value === null
              ? 'N/A'
              : utils.format.getFormatters().currency(value);
          },
        },
      ],
    }),
    []
  );
  const chartConfigPie = useMemo(
    () => ({
      // colors:['red', 'green', 'blue'],
      series: [
        {
          name: 'name',
          outerRadius: 100,
          data: pieData.map((pD, idx) => {
            return {
              value: pD.amount,
              label: pD.categoryName,
            };
          }),
          // color: cssVariabs.brandSecondary,
        },
        {
          innerRadius: 70,
          data: pieData.map((pD, idx) => {
            return {
              value: pD.amount,
              label: pD.category,
            };
          }),
          // color: cssVariabs.brandSecondary,
        },
      ],
    }),
    []
  );

  return (
    <div>
      Line Chart
      <Chart
        type="Line"
        data={data}
        chartConfig={chartConfigLine}
        height={400}
      />
      Bar Chart
      <Chart
        type="Bar"
        data={data.slice(0, 10)}
        chartConfig={chartConfigBar}
        height={400}
      />
      Pie Charts
      <Chart type="Pie" chartConfig={chartConfigPie} height={400} />
    </div>
  );
}

export default App;
