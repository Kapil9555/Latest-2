import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, IconButton, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';



const RateCardReverse = () => {
    const [express, setExpress] = useState(true)

    const expressTable1 = [{
        courierName: "Kerry Indev 250",
        c1: "27 | 27",
        c2: "30 | 30",
        c3: "35 | 35",
        c4: "38 | 38",
        c5: "48 | 48",
        c6: "38 | 38",
        c7: "2%",
        c8: "0",
        c9: "5000"

    }]
    return (
        <>

            <Box sx={{ p: "10px", bgcolor: "white"}}>
                <Box sx={{ display: express ? "block" : "none", borderRadius: "7px" }}>
                    <Accordion sx={{ bgcolor: "#e8eaf6" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography sx={{ color: "rgb(38, 63, 151)", fontWeight: "800", fontSize: "18px" }}>Base upto 0.5 KG + Every Additional 0.5 KG - 1 Courier Options</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ p: "10px", bgcolor: "white" }}>

                                <Box sx={{ bgcolor: "white" }}>
                                    <TableContainer>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell sx={{ borderRight: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
                                                        <Typography sx={{ fontWeight: "600", color: "rgb(38, 63, 151)" }}>Courier Name</Typography>
                                                    </TableCell>

                                                    <TableCell sx={{ borderRight: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
                                                        <Typography sx={{ fontWeight: "800", color: "rgb(38, 63, 151)" }}>Intra City (Zone A)<br /><span style={{ color: "rgb(126, 143, 204)", fontSize: "13px" }}>
                                                            (Base | Additional)</span></Typography>
                                                    </TableCell>

                                                    <TableCell sx={{ borderRight: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
                                                        <Typography sx={{ fontWeight: "800", color: "rgb(38, 63, 151)" }}>Within Zone (Zone B)<br /><span style={{ color: "rgb(126, 143, 204)", fontSize: "13px" }}>
                                                            (Base | Additional)</span></Typography>
                                                    </TableCell>

                                                    <TableCell sx={{ borderRight: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
                                                        <Typography sx={{ fontWeight: "800", color: "rgb(38, 63, 151)" }}>Metros (Zone C)<br /><span style={{ color: "rgb(126, 143, 204)", fontSize: "13px" }}>
                                                            (Base | Additional)</span></Typography>
                                                    </TableCell>

                                                    <TableCell sx={{ borderRight: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
                                                        <Typography sx={{ fontWeight: "800", color: "rgb(38, 63, 151)" }}>ROI (Zone D)<br /><span style={{ color: "rgb(126, 143, 204)", fontSize: "13px" }}>
                                                            (Base | Additional)</span></Typography>
                                                    </TableCell>

                                                    <TableCell sx={{ borderRight: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
                                                        <Typography sx={{ fontWeight: "800", color: "rgb(38, 63, 151)" }}>Upcountry (Zone E)<br /><span style={{ color: "rgb(126, 143, 204)", fontSize: "13px" }}>
                                                            (Base | Additional)</span></Typography>
                                                    </TableCell>

                                                    <TableCell sx={{ borderRight: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
                                                        <Typography sx={{ fontWeight: "800", color: "rgb(38, 63, 151)" }}>Surcharge</Typography>
                                                    </TableCell>

                                                    <TableCell sx={{ borderRight: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
                                                        <Typography sx={{ fontWeight: "800", color: "rgb(38, 63, 151)" }}>Divisor</Typography>
                                                    </TableCell>

                                                    <TableCell sx={{ borderRight: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
                                                        <Typography sx={{ fontWeight: "800", color: "rgb(38, 63, 151)" }}>QC Charges</Typography>
                                                    </TableCell>
                                                </TableRow>
                                                {
                                                    expressTable1.map((ele) => {
                                                        return (<TableRow >
                                                            <TableCell sx={{ fontWeight: "800", color: "rgb(38, 63, 151)", borderRight: "1px solid #f0f0f0" }}>
                                                                {ele.courierName}
                                                            </TableCell>
                                                            <TableCell sx={{ fontWeight: "800", color: "rgb(38, 63, 151)", borderRight: "1px solid #f0f0f0" }}>{ele.c1}</TableCell>

                                                            <TableCell sx={{ fontWeight: "800", color: "rgb(38, 63, 151)", borderRight: "1px solid #f0f0f0" }}>{ele.c2}</TableCell>

                                                            <TableCell sx={{ fontWeight: "800", color: "rgb(38, 63, 151)", borderRight: "1px solid #f0f0f0" }}>{ele.c3}</TableCell>

                                                            <TableCell sx={{ fontWeight: "800", color: "rgb(38, 63, 151)", borderRight: "1px solid #f0f0f0" }}>{ele.c4}</TableCell>

                                                            <TableCell sx={{ fontWeight: "800", color: "rgb(38, 63, 151)", borderRight: "1px solid #f0f0f0" }}>{ele.c5}</TableCell>

                                                            <TableCell sx={{ fontWeight: "800", color: "rgb(38, 63, 151)", borderRight: "1px solid #f0f0f0" }}>{ele.c6}</TableCell>

                                                            <TableCell sx={{ fontWeight: "800", color: "rgb(38, 63, 151)", borderRight: "1px solid #f0f0f0" }}>{ele.c7}</TableCell>

                                                            <TableCell sx={{ fontWeight: "800", color: "rgb(38, 63, 151)", borderRight: "1px solid #f0f0f0" }}>-</TableCell>



                                                        </TableRow>
                                                        )
                                                    })
                                                }
                                            </TableHead>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Box>
                        </AccordionDetails>

                        <Box sx={{ p: "10px", ml: "7px" }}>
                            <Typography sx={{ color: "red", fontSize: "10px" }}>* QC failure charges will also be applicable.</Typography>
                        </Box>
                    </Accordion>
                </Box>
                <Box sx={{ borderBottom: "1px solid #e8eaf6", height: "10px", mt: "15px" }}></Box>
            </Box>

            <Box>
                <Typography sx={{ color: "rgb(38, 63, 151)", fontSize: "12px", mt: "10px", p: "10px" }}>* Incase of RTO shipment the Rate will be same as Forward shipment</Typography>
            </Box>
        </>
    )
}

export default RateCardReverse