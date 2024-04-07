import React from 'react'
import ChartBar from '../Charts/ChartBar'
import ChartGauge from '../Charts/ChartGauge'
import { Heatmap } from '../Heatmap'
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

  const [value, setValue] = React.useState('1');

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
                <Heatmap2 data={clusterData}/>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="flex flex-col w-full">
                <ChartBar width={500}
                  height={300} />
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className="flex flex-col">
                <ChartGauge />
              </div>
            </TabPanel>
            <TabPanel value="4">
              <div className="flex flex-col">
                <ChartComparison width={500}
                  height={300} />
              </div>
            </TabPanel>
          </TabContext>
        </Box>

      </div>
    </>
  )
}

export default Cooling