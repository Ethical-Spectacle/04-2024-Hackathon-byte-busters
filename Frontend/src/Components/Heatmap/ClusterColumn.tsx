import React from 'react'
import { Status2, TemperatureColorProps } from '../../types/dataProps';
import { temperatureColors } from '../../Static/data';

type Props = {
  height: number;
  CData: Status2;
}

const findTemperatureColor = (temperature: number) => {
  let selectedColor = temperatureColors[0]; // Default to the first color

  for (let i = 1; i < temperatureColors.length; i++) {
    const prevThreshold = temperatureColors[i - 1].threshold;
    const currentThreshold = temperatureColors[i].threshold;
    if (temperature > prevThreshold && temperature <= currentThreshold) {
      selectedColor = temperatureColors[i];
      break;
    }
  }

  // If the temperature is higher than all thresholds, select the last color
  if (temperature > temperatureColors[temperatureColors.length - 1].threshold) {
    selectedColor = temperatureColors[temperatureColors.length - 1];
  }

  return selectedColor;
}


const ClusterColumn = (props: Props) => {
  let color = findTemperatureColor(props.CData.temperature)
  return (
    <div>
      <div style={{ height: props.height, backgroundColor: `${color.color}`, width: 50 }}>

      </div>
      <p>F: {props.CData.fan_speed}</p>
    </div>
  )
}

export default ClusterColumn