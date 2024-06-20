import {
    PieChart,
  } from '@mui/x-charts/PieChart';
  
  const SqPieChart = ({
    styles = {},
    series,
    width,
    height = 400,
    ...rest
  }) => {
    return (
      <PieChart
        series={series}
        {...rest}
        width={width}
        height={400}
      />
    );
  };
  export default SqPieChart;
  