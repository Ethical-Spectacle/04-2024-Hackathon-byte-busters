import React from 'react'
import ChartBar from '../Charts/ChartBar'
import ChartGauge from '../Charts/ChartGauge'
import { Heatmap } from '../Heatmap'
import { data } from '../../Static/data'
import ChartComparison from '../Charts/ChartComparison'

type Props = {}

const Cooling = (props: Props) => {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2'>

        <div className="flex flex-col">
          <p className="text-xl font-bold">Latest Temperature</p>
          <ChartBar/>
        </div>

        <div className="flex flex-col">
          <p className="text-xl font-bold">Heat Map</p>
          <Heatmap data={data} width={600} height={400}/>
        </div>

        <div className="flex flex-col">
          <p className="text-xl font-bold">Cooling Capacity</p>
          <ChartGauge/>
        </div>

        <div className="flex flex-col">
          <p className="text-xl font-bold">Heat Comparison</p>
          <ChartComparison/>
        </div>

      </div>
    </>
  )
}

export default Cooling