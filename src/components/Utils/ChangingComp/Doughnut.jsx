import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {UserData} from '../Utils/ChangingComp/BarData'
import { Chart } from 'chart.js/auto';
import { useState } from 'react';

const Doughnut = () => {
    const [ dauData, setDauData]=useState({
        lables:UserData.map((ele)=>ele.year),
        datasets:[{
          label:"Daughnut Graph",
          data:[20,30,10,40],
          backgroundColor:["#1b5e20","#1a237e","#ff9800","#dd2c00"],
          borderColor:["black"],
          borderWidth:2
        },],
       })
    
  return (
    <>
      <Doughnut/>
    </>
  );
}

export default Doughnut;
