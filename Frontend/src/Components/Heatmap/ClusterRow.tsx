import React from 'react'
import ClusterColumn from './ClusterColumn'
import { clusterRowProps, Status } from '../../types/dataProps';

type Props = {
    type: number;
    data: clusterRowProps;
}

const ClusterRow = (props: Props) => {
    return (
        <>
            <p>Floor: {props.data.row_id} </p>

            <div className="flex flex-row gap-7 p-2">

                {
                    props.data.clusters_status.map((data:Status, index) => {
                        return (
                            <div key={index} className='flex flex-row gap-1'>
                                {
                                    data.col_status.map((CData, i) => {
                                        return (
                                            <ClusterColumn CData={CData} key={i} height={props.type === 0 ? 60 : 40} />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default ClusterRow