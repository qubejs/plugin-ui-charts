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
    month: new Date(new DateTime().addDays(index).toStringDefault()),
    open: parseInt((Math.random() * 100).toString()),
    closed: parseInt((Math.random() * 100).toString()),
  });
}

export function App() {
  const navigate = useNavigate();
  // const { Snackbar } = storage.components.get();
  const { Chart } = storage.components.get();
  console.log(Chart);
  useEffect(() => {
    setNavigate(navigate);
  }, []);
  const series = useMemo(
    () => [
      {
        type: 'area',
        name: 'Open',
        data: data.map((item) => ({ x: item.month.getTime(), y: item.open })),
      },
      {
        type: 'area',
        name: 'Closed',
        data: data.map((item) => ({
          x: item.month.getTime(),
          y: parseFloat((item.closed * -0.2).toString()).toFixed(2),
        })),
      },
    ],
    []
  );
  const chartConfig = useMemo(
    () => ({
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top',
          },
        },
      },
      chart: {
        type: 'line',
        zoom: {
          type: 'x',
          autoScaleYaxis: false,
        },
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        type: 'datetime',
      },
    }),
    []
  );

  return (
    <div>
      Apex Chart
      <Chart chartConfig={chartConfig} series={series} height={400} />
    </div>
  );
}

export default App;
