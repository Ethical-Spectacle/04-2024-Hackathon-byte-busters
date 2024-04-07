import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

type Props = {
  width: number;
  height: number;
}

export default function ChartBar(props:Props) {
  return (
    <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['bar A', 'bar B', 'bar C', 'bar D', 'bar E', 'bar F'],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [2, 5, 3, 4, 5, 6],
        },
      ]}
      width={props.width}
      height={props.height}
    />
  );
}
