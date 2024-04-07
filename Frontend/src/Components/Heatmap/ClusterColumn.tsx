import React from 'react'
import { Status2, TemperatureColorProps } from '../../types/dataProps';
import { temperatureColors } from '../../Static/data';

type Props = {
    height:number;
    CData: Status2;
}

// const findTemperatureColor = (temperature: number) => {
//     // Sort the array based on threshold to ensure correct order
//     const sortedColors = temperatureColors.sort((a, b) => a.threshold - b.threshold);
  
//     // Find the color where the temperature is equal to or less than the threshold
//     const matchingColor = sortedColors.find(color => temperature <= color.threshold) || sortedColors[sortedColors.length - 1];
  
//     return matchingColor;
//   }

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
    <div style={{ height: props.height, backgroundColor:`${color.color}`, width:50 }}>

    </div>
  )
}

export default ClusterColumn