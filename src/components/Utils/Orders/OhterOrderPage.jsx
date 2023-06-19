import { Label } from '@mui/icons-material';
import { Box, Button, Grid, MenuItem, OutlinedInput, Select, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';


const OhterOrderPage = () => {
    
    const tableHead=['TRACKING DETAILS','SHIPMENT DETAILS','STATUS', 'DIMENSIONAL WEIGHT(CM/KG)','SHIPMENT AMOUNT (₹)','ADDRESS DETAILS','ACTIONS']

  return (
    <>
      <Grid container>
      <Grid xs={12} md={6} lg={5} sx={{p:"20px"}}  >
            <Box sx={{ display:"flex",alignItems:"center"}}>
            <Select   sx={{bgcolor:"#EDF0F9",width:"30%",borderRadius:"8px 0px 0px 8px",border:"1px solid #b0bec5","&:hover":{border:"1px solid black"},height:"33px",color:"rgb(38, 63, 151)",fontWeight:"600"}}>
                <MenuItem>abc</MenuItem>
                <MenuItem>abc</MenuItem>

             </Select>
              <OutlinedInput  placeholder='Type to search' sx={{height:"33px",border:"#d9d9d9",borderRadius:"0px","&:hover":{border:"1px solid #d9d9d9"},outline:"none",width:"68%"}}/><SearchIcon fontSize='5px' sx={{height:"31px",width:"28px",border:"1px solid #b0bec5",borderRadius:"0px 8px 8px 0px"}}/>
              </Box>
         </Grid>

         <Grid item xs={12} md={7} sx={{p:"20px",display:"flex",justifyContent:"space-between"}}>
            <Box sx={{width:"30%"}}>
                <Select  sx={{width:"50%",borderRadius:"8px 0px 0px 8px",border:"1px solid #b0bec5","&:hover":{border:"1px solid black"},height:"33px",color:"rgb(38, 63, 151)",fontWeight:"600"}}>
                    <MenuItem>abc</MenuItem>
                    <MenuItem>abc</MenuItem>
                    <MenuItem>abc</MenuItem>
                    <MenuItem>abc</MenuItem>
                </Select>

                <Select  sx={{width:"50%",borderRadius:"0px 8px 8px 0px",border:"1px solid #b0bec5","&:hover":{border:"1px solid black"},height:"33px",color:"rgb(38, 63, 151)",fontWeight:"600"}}>
                    <MenuItem>abc</MenuItem>
                    <MenuItem>abc</MenuItem>
                    <MenuItem>abc</MenuItem>
                    <MenuItem>abc</MenuItem>
                </Select>
            </Box>
            <Box>
                <Button sx={{color:"rgb(38, 63, 151)",bgcolor:"rgb(237, 240, 249)"}}>Oldest first</Button>
            </Box>
         </Grid>

         <Grid item xs={12} md={4} sx={{p:"0px 0px 0px 20px"}}>
            <Select  sx={{borderRadius:"8px",width:"100%",border:"1px solid #b0bec5","&:hover":{border:"1px solid black"},height:"33px",color:"rgb(38, 63, 151)",fontWeight:"600"}}>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>
                <MenuItem></MenuItem>

            </Select>
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

export default OhterOrderPage