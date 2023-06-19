import { Box, Button, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Ndr = () => {
    const tableHead=['Tracking ID|Client Order ID','  Order Placed Date','Latest NDR Date',' Order Amount',' NDR Substatus |NDR Reason','NDR Status','Attempt Count','Courier','Actions']
  return (
    <>
    <Box sx={{bgcolor:"#e8eaf6",p:"15px"}}>
    <Grid container sx={{borderRadius:"13px",bgcolor:"white"}}>
        <Grid item xs={12} sx={{p:"10px"}}>
            <Box sx={{display:"flex",}}>
            <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600",mr:"20px"}}>ALL</Typography>
            <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600",mr:"20px"}}>PENDING</Typography>
            <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600",mr:"20px"}}>INITIATED</Typography>
            <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600",mr:"20px"}}>CLOSED</Typography>
             
            </Box>
        </Grid>
        <Grid item container sx={{p:"10px",width:{xs:"500px",sm:"500px",md:"100vw",lg:"100vw"},overflowX:{xs:"scroll",sm:"scoll",md:"scroll",lg:"scroll"}}} >
           <Grid item xs={2} md={1}sx={{mr:"10px"}}>
           <Button variant='contained' disableRipple sx={{color:"rgb(38, 63, 151)",bgcolor:"#e8eaf6","&:hover":{bgcolor:"#e8eaf6"}}}><FilterAltIcon sx={{fontSize:"20px"}}/>All Filter</Button>
           </Grid>
           <Grid item xs={4} md={3} sx={{mr:"10px"}}>
            <Box>
            <FormControl fullWidth size='small'  sx={{width:"30%"}}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             label="Age"
             sx={{borderRadius:"10px 0px 0px 10px",bgcolor:"#f5f5f5"}}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
<OutlinedInput type="date" sx={{height:"40px",borderRadius:"0px 8px 8px 0px",width:"70%"}}/>
            </Box>
           </Grid>

           <Grid item xs={4} md={3} >
            <Box>
            <FormControl fullWidth size='small'  sx={{width:"30%"}}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             label="Age"
             sx={{borderRadius:"10px 0px 0px 10px",bgcolor:"#f5f5f5"}}>
        <MenuItem value={10}>Ten</MenuItem>
         <MenuItem value={20}>Twenty</MenuItem>
         <MenuItem value={30}>Thirty</MenuItem>
         </Select>
          </FormControl>
           <OutlinedInput type="date" sx={{height:"40px",borderRadius:"0px 8px 8px 0px",width:"70%"}}/>
            </Box>
           </Grid>
           

           <Grid item xs={2.8} sx={{display:{sm:"none",sm:"none",md:"block",lg:"block"}}} >
  
           </Grid>
           <Grid item xs={2} sx={{display:"flex",justifyContent:"right"}}>
            <Button variant='contained' disableRipple sx={{height:"40px",bgcolor:"#e8eaf6","&:hover":{bgcolor:"#e8eaf6"},color:"rgb(38, 63, 151)"}}>
            <FileDownloadIcon sx={{mr:"4px",fontSize:"19px"}}/>
            download
            </Button>
           </Grid>
        </Grid>
        <Grid item xs={12}>
          <TableContainer sx={{border:"1px solid rgb(204, 211, 222)"}}>
            <Table>
              <TableHead sx={{bgcolor:"rgb(237, 240, 249)"}}>
                <TableRow >
                  {
                    tableHead.map((ele)=>{
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
    </Box>
    </>
  )
}

export default Ndr