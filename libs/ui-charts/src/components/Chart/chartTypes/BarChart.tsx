import {
    BarChart,
  } from '@mui/x-charts/BarChart';
  
  const SqBarChart = ({
    styles = {},
    series,
    xAxis,
    width,
    height = 400,
    ...rest
  }) => {
    return (
      <BarChart
      
        series={series}
        xAxis={xAxis}
        {...rest}
        width={width}
        height={400}
      />
    );
  };
  export default SqBarChart;
  