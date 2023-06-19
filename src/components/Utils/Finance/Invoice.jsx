import { Box, Button, Grid, OutlinedInput, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'



const Invoice = () => {
  const tableHead=['INVOICE NUMBER','DATE','ORDERS', 'BILL TYPE','INVOICE (₹)','CLEARED AMOUNT (₹)','ACTIONS']
  return (
    <>
      <Grid container sx={{bgcolor:"white",borderRadius:"12px"}}>
        <Grid item xs={12} sx={{p:"10px"}}>
        <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600"}}>Invoice Generation Date</Typography>

        </Grid>
        
        <Grid item container xs={12} sx={{p:"10px"}} spacing={2} >
           
           <Grid item xs={12} md={3} >
            <OutlinedInput type="date" sx={{height:"40px",borderRadius:"8px"}} fullWidth/>
           </Grid>

           <Grid item xs={12} md={4}  sx={{display:"flex",alignItems:"center"}}>
            
            <Button size='small'  sx={{width:"25%",bgcolor:"rgb(237, 240, 249)",borderRadius:"8px 0px 0px 8px",border:"1px solid #b0bec5","&:hover":{border:"1px solid black"},height:"40px",color:"rgb(38, 63, 151)",fontWeight:"600"}}>Invoice Number
          </Button>
           <OutlinedInput type="date" sx={{height:"40px",border:"#d9d9d9",borderRadius:"0px 8px 8px 0px","&:hover":{border:"1px solid #d9d9d9"}}} fullWidth/>
           </Grid>
           

           <Grid item xs={2.8} sx={{display:{xs:"none",sm:"none",md:"block",lg:"block"}}} >
  
           </Grid>
           <Grid item xs={12} sm={12} md={2} sx={{display:"flex",justifyContent:{xs:"center",sm:"center",md:"right",lg:"right"}}}>
            <Button sx={{color:"white",bgcolor:"rgb(38, 63, 151)",mr:"10px"}}>All</Button>
            <Button variant='contained' disableRipple sx={{height:"40px",bgcolor:"#e8eaf6",mr:"10px","&:hover":{bgcolor:"#e8eaf6"},color:"rgb(38, 63, 151)"}}>
            cleared
            </Button>
            <Button variant='contained' disableRipple sx={{height:"40px",bgcolor:"#e8eaf6","&:hover":{bgcolor:"#e8eaf6"},color:"rgb(38, 63, 151)"}}>
              PENDING
            </Button>
           </Grid>
        </Grid>
        <Grid item xs={12} sm={12} sx={{p:"10px"}}>
            <Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      {
                       tableHead .map((ele)=>{
                          return(
                            <TableCell sx={{letterSpacing:".04em",fontSize:"14px",color:"#263f97",fontWeight:"700",cursor:"pointer"}}>
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
        </Grid>
        </Grid>      
    </>
  )
}

export default Invoice