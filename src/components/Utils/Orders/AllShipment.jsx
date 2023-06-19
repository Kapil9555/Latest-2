import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Checkbox, FormControl, Grid, IconButton, MenuItem, OutlinedInput, Select, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Search from './Search';
import OtherOrderPage from './OhterOrderPage'

const AllShipment = () => {

  const [activeBorder, setActiveBorder] = useState("SEARCH")
  const FinanceHead = ['SEARCH', 'NOT PICKED','QC FAILED','LIVE','DELIVERED','RETURNED','LOST/DAMAGED','CANCELLED','ERROR SHIPMENT']

  const borderChange = (ele) => {
    setActiveBorder(ele);
  }
  
  return (
    <>
     <Box sx={{ bgcolor: "rgb(237, 240, 249)", p: "15px" }}>
        <Grid container >
          <Grid item xs={12} sm={12} md={10} lg={10} sx={{p: "10px"}}>
            <Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      {
                        FinanceHead.map((ele) => {
                          return (
                            <TableCell sx={{ letterSpacing: ".04em", fontSize: "14px", color: "#263f97", fontWeight: "700", cursor: "pointer", opacity: "0.5", "&:hover": { opacity: "1.0" }, opacity: activeBorder == ele ? "1.0" : "0.5", borderBottom: activeBorder == ele ? "5px solid #f44336" : "5px solid #e8eaf6" }} onClick={() => { borderChange(ele) }}>
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
      </Box> 
      <Box>
      <Box sx={{display:activeBorder=="SEARCH"?"block":"none"}}>
        <Search/>
      </Box>

      <Box sx={{display:activeBorder=="NOT PICKED"?"block":"none"}}>
        <OtherOrderPage/>
      </Box>
      </Box>


    </>
  );
}

export default AllShipment;
