import React from 'react'
import { Box, Grid, IconButton, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useState } from 'react'
import Invoice from '../Finance/Invoice';
import CodeRemitance from '../Finance/CodeRemitance';
import RateCard from './RateCard';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PerformanceInvoice from './PerformanceInvoice';
import LostDamage from './LostDamage';
import AdjustmentNote from './AdjustmentNote';

const Finance = () => {

  const [activeBorder, setActiveBorder] = useState("INVOICE")
  const FinanceHead = ['INVOICE', 'COD REMITTANCE', 'RATE CARD', 'PROFORMA INVOICE', 'LOST/DAMAGED SETTLEMENT', 'ADJUSTMENT NOTE']

  const borderChange = (ele) => {
    setActiveBorder(ele);
  }


  return (
    <>
      <Box sx={{ bgcolor: "#e8eaf6", p: "15px" }}>
        <Grid container>
          <Grid item xs={12} sm={12} md={8} lg={8} sx={{ p: "10px" }}>
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


        <Grid container sx={{ borderRadius: "13px" }}>

          {/* Invoice */}

          <Box sx={{ display: activeBorder == "INVOICE" ? "block" : "none", width: "100%" }}>
            <Invoice />
          </Box>


          {/* COD REMITTANCE */}
          <Box sx={{ display: activeBorder == "COD REMITTANCE" ? "block" : "none", width: "100%" }}>
            <CodeRemitance />
          </Box>




          {/* rateCard */}
          <Box sx={{ display: activeBorder == "RATE CARD" ? "block" : "none", width: "100%" }}>
            <RateCard />
          </Box>

          <Box sx={{ display: activeBorder == "PROFORMA INVOICE" ? "block" : "none", width: "100%" }}>
            <PerformanceInvoice />
          </Box>

          <Box sx={{ display: activeBorder == "LOST/DAMAGED SETTLEMENT" ? "block" : "none", width: "100%" }}>
            <LostDamage />
          </Box>

          <Box sx={{ display: activeBorder == "ADJUSTMENT NOTE" ? "block" : "none", width: "100%" }}>
            <AdjustmentNote />
          </Box>

        </Grid>

      </Box>


      <Box mt="20px" p="30px">
        <Typography align='center'>Pickrr Technologies Pvt. Ltd. All Rights Reserved ©2022</Typography>
      </Box>

      <Box sx={{ position: "fixed", right: "20px", bottom: "40px", width: "fit-content", bgcolor: "#303f9f", borderRadius: "17px 5px 25px 17px" }}>
        <IconButton sx={{ color: "white", display: "flex", alignItems: "center" }}>
          <HelpOutlineIcon /><Typography>Need Help</Typography>
        </IconButton>
      </Box>

    </>
  )
}

export default Finance