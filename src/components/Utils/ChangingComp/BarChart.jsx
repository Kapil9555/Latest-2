import { Box,  Paper} from '@mui/material';
import { useState } from 'react';
import {Bar} from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

const BarChart = () => {
  const [data, _]=useState({
    labels:[2017,2018,2019,2020,2021,2022,2023],
    datasets:[{
      label:"My first data set",
      data:[90,20,50,60,88,40,25],
      backgroundColor:["blue"],
      borderColor:["black"],
      borderWidth:2
    },
    {
      label: 'My second dataset',
      backgroundColor: 'green',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      data: [45, 79, 10, 41, 16, 85, 20]
    }
  ],
  })

  return (
      <Paper>
      <Box height="100%" width="100%" border="1px solid yellow"> 
          <Bar data={data}/>
      </Box>
      </Paper>
  );
}

export default BarChart;
