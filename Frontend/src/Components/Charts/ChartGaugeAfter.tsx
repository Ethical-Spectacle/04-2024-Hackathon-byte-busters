
import React from 'react';
import GaugeChart from 'react-gauge-chart';


type Props = {
  width: number;
  height: number;
}


export default function ChartGaugeAfter({ width, height }: Props) {
  // Assuming the value is 225 kW
  const valueInKilowatts = 220;
  const minKilowatts = 200;
  const maxKilowatts = 250;

  // Calculate the percentage based on the value between the min and max
  const percent = (valueInKilowatts - minKilowatts) / (maxKilowatts - minKilowatts);

  return (
    <div style={{ width: width, height: height }}>
      <GaugeChart
        id="gauge-chart5"
        nrOfLevels={420}
        arcsLength={[0.3, 0.5, 0.2, 0.4]}
        colors={['#5BE12C','#0000FA', '#F5CD19', '#EA4228']}
        percent={percent}
        arcPadding={0.02}
        textColor='#ffff'
        formatTextValue={() => `${valueInKilowatts} kW`}
      />
    </div>
  );
}
