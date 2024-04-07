import React from 'react'
import ChartComparison from '../Charts/ChartComparison'
import ChartBar from '../Charts/ChartBar'


type Props = {}

const Power = (props: Props) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col">
          <p className="text-xl font-bold">Latest Temperature</p>
          <ChartBar width={1200}
      height={300}/>
        </div>
        <div className="flex flex-col w-full">
          <p className="text-xl font-bold">Heat Comparison</p>
          <ChartComparison width={1200}
      height={300}/>
        </div>
      </div>
    </>
    )
}

export default Power