
import { Box,Button,Grid, MenuItem, OutlinedInput, Select, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react'

const AdjustmentNote = () => {

    const tableHead=['ADJUSTMENT NOTE NO.','TYPE','DATE', 'INVOICE NO','ORDERS','TOTAL AMOUNT (₹)','ACTIONS']


   
  return (
    <>
      <Grid container>
        <Grid item container xs={12} sx={{bgcolor:"white",p:"15px"}}>
        <Grid item xs={12} md={3} sx={{mr:"10px"}}>
            <OutlinedInput type="date" sx={{height:"40px",borderRadius:"8px"}} fullWidth/>
           </Grid>

           <Grid item xs={12} md={3} display="flex" alignItems="center">
            
            <Select size='small'  sx={{width:"25%",bgcolor:"rgb(237, 240, 249)",borderRadius:"8px 0px 0px 8px",border:"1px solid #b0bec5","&:hover":{border:"1px solid black"},height:"40px",color:"rgb(38, 63, 151)",fontWeight:"600"}} >Invoice Number
             <MenuItem>Refrrence no.</MenuItem>
             <MenuItem>AWB no.</MenuItem>
          </Select>
           <OutlinedInput type="date" sx={{height:"40px",border:"1px solid #d9d9d9",borderRadius:"0px 8px 8px 0px","&:hover":{border:"1px solid #d9d9d9"},outline:"none",width:"75%"}}/>
           </Grid>
           <Grid item xs={2.8} sx={{display:{xs:"none",sm:"none",md:"block",lg:"block"}}}>

           </Grid>
          
          <Grid item xs={12} sx={{display:"flex",justifyContent:"right"}}>
            <Button sx={{color:"white",bgcolor:"rgb(38, 63, 151)",mr:"10px"}}>All</Button>
            <Button variant='contained' disableRipple sx={{height:"40px",bgcolor:"#e8eaf6",mr:"10px","&:hover":{bgcolor:"#e8eaf6"},color:"rgb(38, 63, 151)"}}>
            PENDING
            </Button>
            <Button variant='contained' disableRipple sx={{height:"40px",bgcolor:"#e8eaf6","&:hover":{bgcolor:"#e8eaf6"},color:"rgb(38, 63, 151)"}}>
            cleared
            </Button>
           </Grid>

        <Grid item xs={12}>
           <TableContainer sx={{mt:"30px"}}>
            <Table>
              <TableHead>
                <TableRow sx={{borderBottom:"1px solid #f0f0f0"}}>
                  {
                    tableHead.map((ele)=>{
                      return(
                        <TableCell sx={{color:"rgb(125, 140, 193)",borderRight:"1px solid #f0f0f0",fontWeight:"bold",fontSize:"14px",textAlign:"center",textTransform:"uppercase"}}>{ele}</TableCell>
                      )
                    })
                  }
                 
                </TableRow>
              </TableHead>
            </Table>
           </TableContainer>
        </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default AdjustmentNote