import React from 'react'

import ChartGauge from '../Charts/ChartGauge'
import ChartGaugeAfter from '../Charts/ChartGaugeAfter'

import { data } from '../../Static/data'
import ChartComparison from '../Charts/ChartComparison'

type Props = {}

const Result = (props: Props) => {
  return (
   
<div className='grid grid-cols-1 lg:grid-cols-2'>


    <div className="flex flex-col">
    <p className="text-xl font-bold">Before Cooling</p>
    <ChartGauge width={600}
    height={200} />
    </div>
    <div className="flex flex-col">

<p className="text-xl font-bold">After Cooling</p>
    <ChartGaugeAfter width={600}
    height={200} />
  </div>
  </div>

  )

}



export default Result
