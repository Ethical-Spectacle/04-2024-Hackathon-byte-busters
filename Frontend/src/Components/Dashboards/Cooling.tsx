import React, { useEffect, useState } from 'react';
// import { Socket, io } from 'socket.io-client';
import { Server, Socket } from 'socket.io';

import ChartBar from '../Charts/ChartBar'
import ChartGauge from '../Charts/ChartGauge'
import { data } from '../../Static/data'
import ChartComparison from '../Charts/ChartComparison'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Heatmap2 from '../Heatmap2'
import { clusterData } from '../../Static/ClusterData'



type Props = {}

const Cooling = (props: Props) => {

  const [value, setValue] = useState('1');
  const [socketIns, setSocketIns] = useState<Socket | null>(null);

  const [buttonStatus, setButtonStatus] = useState<boolean>(false);


 
  // const handleClick = () => {
  //   if(buttonStatus === false) {
  //     setButtonStatus(true);
  //   } else {
  //     setButtonStatus(false);
  //   }
  // }

  // useEffect(() => {
  //   if(buttonStatus === true) {
  //     const socket: Socket = io("localhost:5001", {
  //       transports: ['websocket'],
  //       // cors:{
  //       //   origin: 'http://localhost:3000'
  //       // }
  //     });
  
  //     setSocketIns(socket);
  
  //     socket.on('connect', () => {
  //       console.log("connected to server");
  //       // If your 'connect' event sends back data, type and use it here
  //     });
  
  //     socket.on('disconnect', (reason: string) => {
  //       console.log(reason);
  //     });
  
  //     return function cleanup() {
  //       socket.disconnect();
  //     };
  //   }
  // }, [buttonStatus]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2'>

        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Heat Map" value="1" />
                <Tab label="Latest Temperature" value="2" />
                <Tab label="Cooling Capacity" value="3" />
                <Tab label="Heat Comparison" value="4" />
              </TabList>
            </Box>

            <TabPanel value="1">
              <div className="flex flex-col">
                {/* <Heatmap data={data} width={700} height={400} /> */}
                {/* <button onClick={()=> handleClick()}>Get Data</button> */}
                <Heatmap2 data={clusterData}/>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="flex flex-col w-full">
                <ChartBar width={1200}
                  height={500} />
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className="flex flex-col">
                <ChartGauge  width={1000}
            height={400} />
              </div>
            </TabPanel>
            <TabPanel value="4">
              <div className="flex flex-col">
                <ChartComparison width={1200}
                  height={500} />
              </div>
            </TabPanel>
          </TabContext>
        </Box>

      </div>
    </>
  )
}

export default Cooling