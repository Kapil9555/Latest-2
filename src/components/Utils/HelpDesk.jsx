import { Button, Grid, MenuItem, OutlinedInput, Select, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';


const HelpDesk = () => {
  const tableHead=['Created Date	','Ticket ID','AWB', 'Issue','Issue Description','Status','Details']
  return (
    <>
      <Grid container>
        <Grid container spacing={2} p="13px">
        <Grid item xs={12} md={3.7} display="flex" alignItems="center">
           <OutlinedInput  placeholder='Type to search' sx={{height:"35px",border:"#d9d9d9",borderRadius:"0px","&:hover":{border:"1px solid #d9d9d9"},outline:"none"}} fullWidth/><SearchIcon fontSize='5px' sx={{height:"33.7px",width:"40px",border:"1px solid #b0bec5",borderRadius:"0px 8px 8px 0px"}}/>
           </Grid>
      
           <Grid item xs={12} md={3} display="flex" alignItems="center">
            <Button variant='contained'  sx={{height:"35px",width:"30%",borderRadius:"7px 0px 0px 7px",bgcolor:"rgb(38, 63, 151)"}}>Status</Button>
              <Select fullWidth sx={{height:"35px",borderRadius:"0px 7px 7px 0px"}}>
                <MenuItem></MenuItem>
              </Select>
           </Grid>

           <Grid item xs={12} md={3} display="flex" alignItems="center">
            <Button variant='contained'  sx={{height:"35px",width:"30%",borderRadius:"7px 0px 0px 7px",bgcolor:"rgb(38, 63, 151)"}}>Status</Button>
              <Select fullWidth sx={{height:"35px",borderRadius:"0px 7px 7px 0px"}}>
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
         
      </Grid>
    </>
  )
}

export default HelpDesk