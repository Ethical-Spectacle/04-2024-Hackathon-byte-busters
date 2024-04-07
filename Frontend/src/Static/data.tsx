import { drawerProps, TemperatureColorProps } from "../types/dataProps";

const nCol = 10;
const nRow = 5;

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

type HeatmapData = { x: string; y: string; value: number }[];
let data: HeatmapData = [];

for (let x = 0; x < nCol; x++) {
  for (let y = 0; y < nRow; y++) {
    data.push({
      x: alphabet[x],
      y: alphabet[y],
      value: Math.random() * 40,
    });
  }
}



const drawerData:drawerProps[] = [
  {
    title: "cooling",
    icon:'',
  },
{
  title: "power",
  icon:'',
},
{
  title: "result",
  icon:'',
}
]

const temperatureColors:TemperatureColorProps[] = [
  { threshold: 0, color: "#FFF" },  // Green 
  { threshold: 25, color: "#ADFF2F" }, // Lighter 
  { threshold: 27, color: "#FFFF00" }, // Yellow 
  { threshold: 35, color: "#FFA500" }, // Orange 
  { threshold: 50, color: "#FF0000" }  // Red 
];

export { data, drawerData, temperatureColors };
