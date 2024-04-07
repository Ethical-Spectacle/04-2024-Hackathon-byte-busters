// import * as React from 'react';
// import {
//   GaugeContainer,
//   GaugeValueArc,
//   GaugeReferenceArc,
//   useGaugeState,
// } from '@mui/x-charts/Gauge';

import GaugeChart from 'react-gauge-chart'


type Props = {
  width: number;
  height: number;
}


// function GaugePointer() {
//   const { valueAngle, outerRadius, cx, cy } = useGaugeState();

//   if (valueAngle === null) {
//     // No value to display
//     return null;
//   }

//   const target = {
//     x: cx + outerRadius * Math.sin(valueAngle),
//     y: cy - outerRadius * Math.cos(valueAngle),
//   };
//   return (
//     <g>
//       <circle cx={cx} cy={cy} r={5} fill="red" />
//       <path
//         d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
//         stroke="red"
//         strokeWidth={3}
//       />
//     </g>
//   );
// }

export default function ChartGauge({ width, height }: Props) {
  return (
    // <GaugeContainer
    //   width={200}
    //   height={200}
    //   startAngle={-110}
    //   endAngle={110}
    //   value={70}
    // >
    //   <GaugeReferenceArc />
    //   <GaugeValueArc />

    //   <GaugePointer />
    // </GaugeContainer>

    <>
    {/* <div style={{ width: width, height: height }}> */}
    <div style={{ width: width, height: height }}>
    <GaugeChart id="gauge-chart5"
      nrOfLevels={420}
      arcsLength={[0.3, 0.5, 0.2, 0.4]}
      colors={['#5BE12C','#0000FA', '#F5CD19', '#EA4228']}
      percent={0.50}
      arcPadding={0.02}
      textColor='#ffff'
      formatTextValue={(value) => value + ' kw'}
/>



</div>
    </>
  );
}
