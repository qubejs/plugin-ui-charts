import ApexCharts from 'react-apexcharts';
const SQChart = ({ className, chartConfig, series, ...reset }) => {

  return (
    <div className={`sq-ap-chart ${className}`}>
      <ApexCharts options={chartConfig} series={series} {...reset} />
    </div>
  );
};
export default SQChart;
