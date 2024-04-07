import React from 'react'
import ClusterColumn from './Heatmap/ClusterColumn';
import ClusterRow from './Heatmap/ClusterRow';
import { clusterRowProps } from '../types/dataProps';

type Props = {
    data:clusterRowProps[];
}

const Heatmap2 = (props: Props) => {
  return (
    <div className='flex flex-col gap-6 p-3'>
        {
            props.data.map((item: clusterRowProps, index: number) => {
                return (
                    
                    <ClusterRow data={item}/>
                )
            })
        }
      
    </div>
  )
}

export default Heatmap2