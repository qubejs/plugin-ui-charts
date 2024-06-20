import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';

const SqLineChart = ({
  styles = {},
  series,
  dataset,
  width,
  height = 400,
  ...rest
}: any) => {
  return (
    <LineChart
      sx={{
        [`& .${lineElementClasses.root}`]: {
          strokeWidth: 4,
          ...styles.line,
        },
        [`& .${markElementClasses.root}`]: {
          ...styles.mark,
        },
      }}
      dataset={dataset}
      series={series}
      grid={{ horizontal: true }}
      {...rest}
      width={width}
      height={400}
    />
  );
};
export default SqLineChart;
