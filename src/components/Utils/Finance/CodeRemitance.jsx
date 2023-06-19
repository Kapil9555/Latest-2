import React from 'react'

import { Box, Button, Checkbox, Grid, OutlinedInput, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import  { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';


const CodeRemitance = () => {
    const [activeColor, setActiveColor]=useState('All');
    
    const tableCod=['COD REF. ID','	DATE','ORDER COUNT', 'COD AVAILABLE(₹)','REVERSAL AMOUNT(₹)','FREIGHT CHARGES FROM COD (₹)','ADJUSTMENT FROM PREVIOUS COD(₹)','PENDING BILLS(₹)','NET PAYABLE AMOUNT(₹)','REMITTED AMOUNT(₹)','ACTIONS']
    const CodData=['All','On Hold','Live','Past','Future']

    const colorChange=(ele)=>{
        setActiveColor(ele);
     }
  return (
    <>
     <Grid container sx={{bgcolor:"white"}} spacing={2} p="10px">
     <Grid item xs={12} md={4} >
            <Box sx={{display:"flex",border:"1px solid #b0bec5",overflow:"hidden",borderRadius:"10px"}}>
                {
                    CodData.map((ele)=>{
                        return(
                            <Typography align='center' sx={{color:"rgb(38, 63, 151)",bgcolor:activeColor==ele?'rgb(38, 63, 151)':'',color:activeColor==ele?'white':"",cursor:"pointer",p:"10px",width:"20%"}} onClick={()=>{colorChange(ele)}} >{ele}</Typography>
                        )
                    })
                }
            </Box>
        
        </Grid>
        
        <Grid item container spacing={1} >

           <Grid item xs={12} md={3.7} display="flex" alignItems="center">
            
            <Button size='small'  sx={{width:"25%",bgcolor:"rgb(237, 240, 249)",fontSize:"10px",borderRadius:"8px 0px 0px 8px",border:"1px solid #b0bec5","&:hover":{border:"1px solid black"},height:"40px",color:"rgb(38, 63, 151)",fontWeight:"600"}}>Reference No.
          </Button>
           <OutlinedInput  placeholder='Type to search' sx={{height:"40px",border:"#d9d9d9",borderRadius:"0px","&:hover":{border:"1px solid #d9d9d9"},outline:"none",width:"75%"}}/><SearchIcon fontSize='5px' sx={{height:"38px",width:"40px",border:"1px solid #b0bec5",borderRadius:"0px 8px 8px 0px"}}/>
           </Grid>
           

           <Grid item xs={6} sx={{display:{sm:"none",sm:"none",md:"block",lg:"block"}}} >
  
           </Grid>
           <Grid item xs={12} md={2} sx={{display:"flex",justifyContent:"right"}}>
            <Button sx={{color:"white",bgcolor:"rgb(38, 63, 151)",mr:"10px"}}>EARLY GET COD </Button>
        
           </Grid>
        </Grid>
        <Grid item xs={12}>
          <TableContainer sx={{border:"1px solid rgb(204, 211, 222)"}}>
            <Table>
              <TableHead>
                <TableRow>
                    <TableCell><Checkbox disabled/></TableCell>
                  {
                    tableCod.map((ele)=>{
                      return (
                        <TableCell sx={{fontWeight:"800",color:"rgba(0, 38, 89, 0.7)"}}>
                        {ele}
                        </TableCell>
                      )
                    })
                  }
                 
                </TableRow>
              </TableHead>
              <TableBody>
                <TableBody>
                  <TableRow>
                    <TableCell>

                    </TableCell>
                  </TableRow>
                </TableBody>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
    
     </Grid>
    </>
  )
}

export default CodeRemitance