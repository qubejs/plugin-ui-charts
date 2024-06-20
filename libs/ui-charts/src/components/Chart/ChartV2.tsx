import { useMemo } from 'react';
import PropTypes from 'prop-types';
import LineChart from './chartTypes/LineChart';
import PieChart from './chartTypes/PieChart';
import BarChart from './chartTypes/BarChart';
// import { charts } from '../../utils/storage';
const types = {
  Pie: PieChart,
  Line: LineChart,
  Bar: BarChart,
};

const dataTypes = {
  date: (val) => (val instanceof Date ? val : new Date(val)),
  any: (val) => val,
  string: (val) => val?.toString(),
  number: (val) => val * 1,
};
const CustomChartV2 = ({
  className = '',
  data = [],
  type = 'Line',
  chartConfig,
  noDataMessage = 'No data found',
  height = 300,
  width,
}) => {
  const finalData = useMemo(() => {
    return data.map((itemD) => {
      const objNe = { ...itemD };
      chartConfig?.xAxis?.forEach((it) => {
        if (it.dataType) {
          objNe[it.dataKey] = dataTypes[it.dataType](objNe[it.dataKey]);
        }
      });
      chartConfig?.yAxis?.forEach((it) => {
        if (it.dataType) {
          objNe[it.dataKey] = dataTypes[it.dataType](objNe[it.dataKey]);
        }
      });
      chartConfig?.series?.forEach((it) => {
        if (it.dataType) {
          objNe[it.dataKey] = dataTypes[it.dataType](objNe[it.dataKey]);
        }
      });
      return objNe;
    });
  }, [data, chartConfig]);
  const ChartToRender = types[type] || LineChart;
  return (
    <div className={`sq-mui-chart ${className}`}>
      {finalData && (
        <ChartToRender
          dataset={finalData}
          {...chartConfig}
          height={height}
          width={width}
        />
      )}
    </div>
  );
};

CustomChartV2.propTypes = {
  type: PropTypes.string,
  colorsSet: PropTypes.string,
  chartConfig: PropTypes.object,
  data: PropTypes.array,
};
export default CustomChartV2;
