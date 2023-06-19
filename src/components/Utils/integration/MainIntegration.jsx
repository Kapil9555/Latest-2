import { Box, Button, Container, Grid, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import emptyImg from '../../../images/empty-channel_qnfys9.svg'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InteCards from './InteCards';
import InnerCard from './InnerCard';



const MainIntegration = () => {
   const [newIntegrate,setNewIntegrate]=useState("AddNewIntegrate")

  const NewIntegrate=()=>{
           setNewIntegrate("newInte")
  }
   console.log(newIntegrate)
  if(newIntegrate==="newInte"){
    return(
      <>
         <InteCards setNewIntegrate={setNewIntegrate}/>     
      </>
    )
  }
  if(newIntegrate=="AddNewIntegrate"){
    return (
      <>
      <Box sx={{bgcolor:"#efebe9"}}>

        <Grid container bgcolor="white">
          <Grid item xs={12} sx={{bgcolor:"#fafafa",p:"12px",display:"flex",justifyContent:"flex-end"}}> 
            <Button variant='contained' disableRipple sx={{bgcolor:"rgb(254, 117, 108)",borderRadius:"25px",fontWeight:"700",fontSize:"15px",padding:"13px","&hover":{bgcolor:"rgb(254, 117, 108)",}}} onClick={()=>{NewIntegrate("AddNewIntegrate")}}><AddCircleOutlineIcon/>Add new channel</Button>
          </Grid>
          <Grid item xs={12}>
              <Typography variant='h5' align='center' sx={{fontWeight:"700",color:"rgb(38, 63, 151)",mt:"35px"}}>Integrate your channel to sync all orders</Typography>
          </Grid>
          <Grid item xs={12} display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgcolor="white">
              <Box sx={{height:"300px",width:"300px",mt:"20px"}}>
                  <img src={emptyImg} height="100%" width="100%"/>
              </Box>
              <Box>
                  <Button sx={{fontSize:"15px",fontWeight:"800",color:"rgb(38, 63, 151)",mt:"10px"}} onClick={()=>{NewIntegrate("AddNewIntegrate")}}> 
                      click here to add new channel
                  </Button>
              </Box>
          </Grid>
        </Grid> 
        </Box>
      </>
    )
  }

  if(newIntegrate=="innerCard"){
    return(
      <InnerCard setNewIntegrate={setNewIntegrate}/>
    )
  }
  
  
}

export default MainIntegration