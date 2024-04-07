import React, { useState, useEffect } from 'react';
import ClusterRow from './Heatmap/ClusterRow';
import { clusterRowProps } from '../types/dataProps';
import io from 'socket.io-client';

type Props = {
    data: clusterRowProps[];
}

const Heatmap2 = ({ data }: Props) => {
    const [socketData, setSocketData] = useState<clusterRowProps[]>([]);

    useEffect(() => {
        const socket = io('ws://localhost:5001');

        socket.on('data/heatmap', newData => {
            console.log(newData);
            let DD = JSON.parse(newData.data)
            if (Array.isArray(DD)) {
                // let DD = JSON.parse(newData.data)
                setSocketData(DD);
            } else {
                console.error('Received data is not an array:', DD);
            }
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div className='flex flex-col gap-6 p-3'>
            {socketData.map((item: clusterRowProps, index: number) => (
                <ClusterRow key={index} data={item} />
            ))}
        </div>
    );
};

export default Heatmap2;

