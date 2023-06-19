import React from 'react'
import { Box, Table, TableCell, IconButton,TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';


const RtoTable = () => {
    
    const rtoTable = [{
        courierName: "Kerry Indev 250",
        c1: "27 | 27",
        c2: "30 | 30",
        c3: "35 | 35",
        c4: "38 | 38",
        c5: "48 | 48",
        c6: "0",
        c7: "5000"

    }]

  return (
    <>
    <Box sx={{ p: "10px", bgcolor: "white" }}>
                            
        <Box sx={{bgcolor:"white"}}> 
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                           <TableCell sx={{borderRight:"1px solid #f0f0f0",borderBottom:"1px solid #f0f0f0"}}>
                                            <Typography sx={{fontWeight:"600",color:"rgb(38, 63, 151)"}}>Courier Name</Typography>
                                           </TableCell>

                                           <TableCell sx={{borderRight:"1px solid #f0f0f0",borderBottom:"1px solid #f0f0f0"}}>
                                            <Typography sx={{fontWeight:"800",color:"rgb(38, 63, 151)"}}>Intra City (Zone A)<br/><span style={{color:"rgb(126, 143, 204)",fontSize:"13px"}}>
                                            (Base | Additional)</span></Typography>
                                           </TableCell>

                                           <TableCell sx={{borderRight:"1px solid #f0f0f0",borderBottom:"1px solid #f0f0f0"}}>
                                            <Typography sx={{fontWeight:"800",color:"rgb(38, 63, 151)"}}>Within Zone (Zone B)<br/><span style={{color:"rgb(126, 143, 204)",fontSize:"13px"}}>
                                            (Base | Additional)</span></Typography>
                                           </TableCell>

                                           <TableCell sx={{borderRight:"1px solid #f0f0f0",borderBottom:"1px solid #f0f0f0"}}>
                                            <Typography sx={{fontWeight:"800",color:"rgb(38, 63, 151)"}}>Metros (Zone C)<br/><span style={{color:"rgb(126, 143, 204)",fontSize:"13px"}}>
                                            (Base | Additional)</span></Typography>
                                           </TableCell>

                                           <TableCell sx={{borderRight:"1px solid #f0f0f0",borderBottom:"1px solid #f0f0f0"}}>
                                            <Typography sx={{fontWeight:"800",color:"rgb(38, 63, 151)"}}>ROI (Zone D)<br/><span style={{color:"rgb(126, 143, 204)",fontSize:"13px"}}>
                                            (Base | Additional)</span></Typography>
                                           </TableCell>

                                           <TableCell sx={{borderRight:"1px solid #f0f0f0",borderBottom:"1px solid #f0f0f0"}}>
                                            <Typography sx={{fontWeight:"800",color:"rgb(38, 63, 151)"}}>Upcountry (Zone E)<br/><span style={{color:"rgb(126, 143, 204)",fontSize:"13px"}}>
                                            (Base | Additional)</span></Typography>
                                           </TableCell>

                                           <TableCell sx={{borderRight:"1px solid #f0f0f0",borderBottom:"1px solid #f0f0f0"}}>
                                            <Typography sx={{fontWeight:"800",color:"rgb(38, 63, 151)"}}>Surcharge</Typography>
                                           </TableCell>

                                           <TableCell sx={{borderRight:"1px solid #f0f0f0",borderBottom:"1px solid #f0f0f0"}}>
                                            <Typography sx={{fontWeight:"800",color:"rgb(38, 63, 151)"}}>Divisor</Typography>
                                           </TableCell>
                                        </TableRow>
                                        {
                                          rtoTable.map((ele)=>{
                                            return( <TableRow >
                                                    <TableCell sx={{fontWeight:"800",color:"rgb(38, 63, 151)",borderRight:"1px solid #f0f0f0"}}>
                                                       {ele.courierName}
                                                    </TableCell>
                                                    <TableCell sx={{fontWeight:"800",color:"rgb(38, 63, 151)",borderRight:"1px solid #f0f0f0"}}>{ele.c1}</TableCell>

                                                    <TableCell sx={{fontWeight:"800",color:"rgb(38, 63, 151)",borderRight:"1px solid #f0f0f0"}}>{ele.c2}</TableCell>

                                                    <TableCell sx={{fontWeight:"800",color:"rgb(38, 63, 151)",borderRight:"1px solid #f0f0f0"}}>{ele.c3}</TableCell>

                                                    <TableCell sx={{fontWeight:"800",color:"rgb(38, 63, 151)",borderRight:"1px solid #f0f0f0"}}>{ele.c4}</TableCell>

                                                    <TableCell sx={{fontWeight:"800",color:"rgb(38, 63, 151)",borderRight:"1px solid #f0f0f0"}}>{ele.c5}</TableCell>

                                                    <TableCell sx={{fontWeight:"800",color:"rgb(38, 63, 151)",borderRight:"1px solid #f0f0f0"}}>{ele.c6}</TableCell>

                                                    <TableCell sx={{fontWeight:"800",color:"rgb(38, 63, 151)",borderRight:"1px solid #f0f0f0"}}>{ele.c7}</TableCell>

                                                    
                                        </TableRow>
                                         )
                                        }) 
                                        }
                                    </TableHead>
                                </Table>
                            </TableContainer>
                        </Box>
                        </Box>
                        
    </>
  )
}

export default RtoTable