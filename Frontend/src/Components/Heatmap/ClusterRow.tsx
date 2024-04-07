import React from 'react'
import ClusterColumn from './ClusterColumn'
import { clusterRowProps, Status } from '../../types/dataProps';

type Props = {
    data: clusterRowProps;
}

const ClusterRow = (props: Props) => {

    return (
        <>
            <p>Row: {props.data.row_id} </p>

            <div className="flex flex-row gap-7 p-2">        

                {
                    props.data.clusters_status.map((data:Status, index) => {
                        let clusterLevel = props.data.cooling_type === 'cluster_level' && props.data.cluster_level_cooling.includes(index+1)
                        return (
                            <div key={index} className='flex flex-col gap-3 bg-slate-900 shadow-2xl p-5 transition hover:scale-110 delay-300 cursor-pointer'>
                                <div className='text-center' style={{ backgroundColor:'#FFF', color:'#000' }}>{clusterLevel ? `${props.data.cooling_type} cooling` : 'row_level cooling'}</div>
                                {/* Cluster Rendering */}
                                <div className='flex flex-row gap-1'>
                                    {
                                        data.col_status.map((CData, i) => {
                                            return (
                                                <ClusterColumn CData={CData} key={i} height={data.cluster_type === 'CPU' ? 40 : 30} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default ClusterRow