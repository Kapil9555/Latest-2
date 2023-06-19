import { Box, Button, Grid, OutlinedInput, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import noData from '../../../images/noData.png'


const PerformanceInvoice = () => {

    const table=["PROFORMA NUMBER","DATE","ORDERS","TOTAL AMOUNT (₹)","ACTIONS"]
  return (
    <>
    <Grid container sx={{bgcolor:"white"}}>
        <Grid xs={12} md={6} lg={5} sx={{p:"20px"}}  >
            <Box sx={{ display:"flex",alignItems:"center"}}>
            <Button size='small'  sx={{bgcolor:"#EDF0F9",borderRadius:"8px 0px 0px 8px",border:"1px solid #b0bec5","&:hover":{border:"1px solid black"},height:"33px",color:"rgb(38, 63, 151)",fontWeight:"600"}}>Performance Number
             </Button>
              <OutlinedInput  placeholder='Type to search' sx={{height:"33px",border:"#d9d9d9",borderRadius:"0px","&:hover":{border:"1px solid #d9d9d9"},outline:"none",width:"73%"}}/><SearchIcon fontSize='5px' sx={{height:"31px",width:"28px",border:"1px solid #b0bec5",borderRadius:"0px 8px 8px 0px"}}/>
              </Box>
         </Grid>

         <Grid item xs={12}>
            <Box sx={{mt:"20px"}}>
                <TableContainer sx={{borderBottom:"1px solid #f0f0f0"}}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{p:"10px"}}>
                                {
                                    table.map((ele)=>{
                                        return(
                                            <TableCell sx={{color:"rgb(125, 140, 193)",borderRight:"1px solid #f0f0f0",fontWeight:"bold",fontSize:"14px",textAlign:"center",textTransform:"uppercase"}}>
                                               {ele}
                                            </TableCell>
                                        )
                                    })
                                }
                                
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
            
            </Box>

                           <Box sx={{height:"200px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                                <Box>
                                    <img src={noData} height="90px" width="90px"/>
                                </Box>
                            </Box>
         </Grid>
    </Grid>
    </>
  )
}

export default PerformanceInvoice