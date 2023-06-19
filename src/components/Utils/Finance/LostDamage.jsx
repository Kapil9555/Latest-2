import { Label } from '@mui/icons-material';
import { Box, Button, Grid, MenuItem, OutlinedInput, Select, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react'

const LostDamage = () => {
    const [activeColor, setActiveColor]=useState('Live');
    const CodData=['Live','Past','Future']
    const tableHead=['REFERENCE	','DATE','ORDERS COUNT', 'CCN AMOUNT','CCN REMITTANCE (₹)','TRANSACTION ID','REMARKS','ACTIONS']


    const colorChange=(ele)=>{
        setActiveColor(ele);
     }
  return (
    <>
      <Grid container>
         <Grid item xs={12} md={3} sx={{p:"10px"}}>
            <Box sx={{display:"flex",border:"1px solid #b0bec5",borderRadius:"10px",bgcolor:"white",overflow:"hidden"}}>
                {
                    CodData.map((ele)=>{
                        return(
                            <Typography align='center' sx={{color:"rgb(38, 63, 151)",bgcolor:activeColor==ele?'rgb(38, 63, 151)':'',color:activeColor==ele?'white':"",cursor:"pointer",p:"6px",width:"33.33%"}} onClick={()=>{colorChange(ele)}} >{ele}</Typography>
                        )
                    })
                }
            </Box>
        
        </Grid>
        
        <Grid item container xs={12} sx={{bgcolor:"white",p:"15px",mt:"10px"}} spacing={2}>
        <Grid item xs={12} md={3}>
            <OutlinedInput type="date" sx={{height:"40px",borderRadius:"8px"}} fullWidth/>
           </Grid>

           <Grid item xs={12} md={4} display="flex" alignItems="center">
            
            <Select size='small'  sx={{width:"25%",bgcolor:"rgb(237, 240, 249)",borderRadius:"8px 0px 0px 8px",border:"1px solid #b0bec5","&:hover":{border:"1px solid black"},height:"40px",color:"rgb(38, 63, 151)",fontWeight:"600"}} >Invoice Number
             <MenuItem>Refrrence no.</MenuItem>
             <MenuItem>AWB no.</MenuItem>
          </Select>
           <OutlinedInput type="date" sx={{height:"40px",border:"1px solid #d9d9d9",borderRadius:"0px 8px 8px 0px","&:hover":{border:"1px solid #d9d9d9"},outline:"none",width:"75%"}}/>
           </Grid>
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
    </>
  )
}

export default LostDamage