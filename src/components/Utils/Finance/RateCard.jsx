import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, IconButton, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



import MainTable from './MainTable';
import RateCardReverse from './RateCardReverse';
import Rto from './Rto';
import EarlyCod from './EarlyCod';

const RateCard = () => {
    const [express, setExpress] = useState(true)
    const [surface, setSurface] = useState(true)
    const [bgChange, setBgChange] = useState("Forward Shipping")





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

    const changeColor = (ele) => {
        setBgChange(ele)
    }

    return (
        <>

            <Grid container sx={{ bgcolor: "white", p: "15px" }}>
                <Grid item xs={12} md={6} >
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{  borderRadius: "10px",fontSize:"14px", fontWeight: "800", bgcolor: bgChange == "Forward Shipping" ? "rgb(38, 63, 151)" : "white", color: bgChange == "Forward Shipping" ? "white" : "rgb(38, 63, 151)", cursor: "pointer" }} onClick={() => { changeColor("Forward Shipping") }}>
                                        
                                            Forward Shipping
                                        
                                    </TableCell>
                                    <TableCell sx={{ borderRadius: "10px",fontSize:"14px", fontWeight: "800", bgcolor: bgChange == "Reverse Logistics Shipment" ? "rgb(38, 63, 151)" : "white", color: bgChange == "Reverse Logistics Shipment" ? "white" : "rgb(38, 63, 151)", cursor: "pointer" }} onClick={() => { changeColor("Reverse Logistics Shipment") }}>
                                        
                                            Reverse Logistics Shipment
                                       
                                    </TableCell>
                                    <TableCell sx={{ borderRadius: "10px",fontSize:"14px", fontWeight: "800", bgcolor: bgChange == "RTO" ? "rgb(38, 63, 151)" : "white", color: bgChange == "RTO" ? "white" : "rgb(38, 63, 151)", cursor: "pointer" }} onClick={() => { changeColor("RTO") }}>
                                        
                                            RTO
                                   
                                    </TableCell>
                                    <TableCell sx={{borderRadius: "10px",fontSize:"14px",  fontWeight: "800", bgcolor: bgChange == "Early COD Remittance Plans" ? "rgb(38, 63, 151)" : "white", color: bgChange == "Early COD Remittance Plans" ? "white" : "rgb(38, 63, 151)", cursor: "pointer" }} onClick={() => { changeColor("Early COD Remittance Plans") }}>
                                            Early COD Remittance Plans
                                    </TableCell>

                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>







                </Grid>



                {/* Early Cod */}

                {
                    bgChange === "Early COD Remittance Plans" ? <EarlyCod /> : <Grid item container sx={{ mt: "20px" }}>
                        <Grid item xs={12} sx={{ bgcolor: "white" }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "white", bgcolor: "rgb(38, 63, 151)", p: "8px", borderRadius: "12px 12px 0px 0px" }}>
                                <Typography>Express Shipping</Typography>
                                <IconButton onClick={() => { setExpress(false) }} sx={{ display: express == true ? "block" : "none" }}>
                                    <KeyboardArrowUpIcon sx={{ fontSize: "40px", color: "white", }} />
                                </IconButton>

                                <IconButton onClick={() => { setExpress(true) }} sx={{ display: express == true ? "none" : "true" }}>
                                    <ExpandMoreIcon sx={{ fontSize: "40px", color: "white" }} />
                                </IconButton>
                            </Box>


                            <Box sx={{ display: express ? "block" : "none" }}>

                                {/* Forward Shipping */}

                                <Box sx={{ display: bgChange == "Forward Shipping" ? "block" : "none" }}>
                                    <Box sx={{ p: "10px" }}>
                                        <Box >
                                            <Accordion sx={{ bgcolor: "#e8eaf6" }}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <Typography sx={{ color: "rgb(38, 63, 151)", fontWeight: "800", fontSize: "18px" }}>Base upto 0.5 KG + Every Additional 0.5 KG - 1 Courier Options</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <MainTable expressTable={expressTable1} />
                                                </AccordionDetails>
                                            </Accordion>

                                        </Box>
                                        <Box sx={{ mt: "5px" }}>
                                            <Accordion sx={{ bgcolor: "#e8eaf6" }}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <Typography sx={{ color: "rgb(38, 63, 151)", fontWeight: "800", fontSize: "18px" }}>Base upto 0.5 KG + Every Additional 0.5 KG - 1 Courier Options</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <MainTable expressTable={expressTable1} />
                                                </AccordionDetails>
                                            </Accordion>

                                        </Box>
                                    </Box>


                                    <Grid item container sx={{ mt: "30px", border: "1px solid green" }}>
                                        <Grid item xs={12} sx={{ bgcolor: "white" }}>
                                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "white", bgcolor: "rgb(38, 63, 151)", p: "8px", borderRadius: "12px 12px 0px 0px" }}>
                                                <Typography>Surface Shipping</Typography>
                                                <IconButton onClick={() => { setSurface(false) }} sx={{ display: surface == true ? "block" : "none" }}>
                                                    <KeyboardArrowUpIcon sx={{ fontSize: "40px", color: "white", }} />
                                                </IconButton>

                                                <IconButton onClick={() => { setSurface(true) }} sx={{ display: surface == true ? "none" : "true" }}>
                                                    <ExpandMoreIcon sx={{ fontSize: "40px", color: "white" }} />
                                                </IconButton>
                                            </Box>

                                            <Box sx={{ p: "10px" }}>
                                                <Box sx={{ display: surface == true ? "block" : "none" }}>
                                                    <Accordion sx={{ bgcolor: "#e8eaf6" }}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography sx={{ color: "rgb(38, 63, 151)", fontWeight: "800", fontSize: "18px" }}>Base upto 0.5 KG + Every Additional 0.5 KG - 1 Courier Options</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <MainTable expressTable={expressTable1} />
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </Box>

                                                <Box sx={{ display: surface == true ? "block" : "none", mt: "5px" }}>
                                                    <Accordion sx={{ bgcolor: "#e8eaf6" }}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography sx={{ color: "rgb(38, 63, 151)", fontWeight: "800", fontSize: "18px" }}>Base upto 0.5 KG + Every Additional 0.5 KG - 1 Courier Options</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <MainTable expressTable={expressTable1} />
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </Box>

                                                <Box sx={{ display: surface == true ? "block" : "none", mt: "5px" }}>
                                                    <Accordion sx={{ bgcolor: "#e8eaf6" }}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography sx={{ color: "rgb(38, 63, 151)", fontWeight: "800", fontSize: "18px" }}>Base upto 0.5 KG + Every Additional 0.5 KG - 1 Courier Options</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <MainTable expressTable={expressTable1} />
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </Box>


                                                <Box sx={{ display: surface == true ? "block" : "none", mt: "5px" }}>
                                                    <Accordion sx={{ bgcolor: "#e8eaf6" }}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography sx={{ color: "rgb(38, 63, 151)", fontWeight: "800", fontSize: "18px" }}>Base upto 0.5 KG + Every Additional 0.5 KG - 1 Courier Options</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <MainTable expressTable={expressTable1} />
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </Box>
                                                <Box sx={{ display: surface == true ? "block" : "none", mt: "5px" }}>
                                                    <Accordion sx={{ bgcolor: "#e8eaf6" }}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography sx={{ color: "rgb(38, 63, 151)", fontWeight: "800", fontSize: "18px" }}>Base upto 0.5 KG + Every Additional 0.5 KG - 1 Courier Options</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <MainTable expressTable={expressTable1} />
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </Box>

                                                <Box sx={{ display: surface == true ? "block" : "none", mt: "5px" }}>
                                                    <Accordion sx={{ bgcolor: "#e8eaf6" }}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                        >
                                                            <Typography sx={{ color: "rgb(38, 63, 151)", fontWeight: "800", fontSize: "18px" }}>Base upto 0.5 KG + Every Additional 0.5 KG - 1 Courier Options</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <MainTable expressTable={expressTable1} />
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </Box>
                                            </Box>




                                        </Grid>
                                    </Grid>

                                </Box>



                                {/* Reverse Logistics Shipment */}
                                <Box sx={{ display: bgChange == "Reverse Logistics Shipment" ? "block" : "none" }}>
                                    <RateCardReverse />
                                </Box>


                                {/* Rto Cards */}

                                <Box sx={{ display: bgChange == "RTO" ? "block" : "none" }}>
                                    <Rto />
                                </Box>




                            </Box>

                        </Grid>
                    </Grid>
                }






                <Grid item xs={12}>
                    <Box sx={{ mt: "20px", p: "10px" }}>
                        <Typography sx={{ color: "rgb(126, 143, 204)", fontSize: "16px", fontWeight: "700" }}>TERMS & CONDITIONS</Typography>
                        <Typography sx={{ color: "rgb(38, 63, 151)", fontSize: "12px", mt: "10px" }}>1.Above Prices calculated will be Exclusive of GST.</Typography>
                        <Typography sx={{ color: "rgb(38, 63, 151)", fontSize: "12px", mt: "10px" }}>2.Your Max liability amount assured by Pickrr is 2000. In case of damaged/lost shipment you will be assured the Invoice value or Max liability amount of 2000 whichever is lesser.</Typography>
                        <Typography sx={{ color: "rgb(38, 63, 151)", fontSize: "12px", mt: "10px" }}>3.Every seller by default has a bi-monthly COD Remittance cycle and a D+7 gap with payouts on the 1st and 14th of every month. The seller can customize these payouts through our Early COD plans.</Typography>
                        <Typography sx={{ color: "rgb(38, 63, 151)", fontSize: "12px", mt: "10px" }}>4.Rates will be charged basis on the weight calculated as per Dead/Dry weight or volumetric weight whichever is higher will be taken while calculating the freight rates.</Typography>
                        <Typography sx={{ color: "rgb(38, 63, 151)", fontSize: "12px", mt: "10px" }}>5.Pickrr will not assist in shipping goods that come under the category of prohibited, Dangerous Goods or Restricted Goods.</Typography>
                        <Typography sx={{ color: "rgb(38, 63, 151)", fontSize: "12px", mt: "10px" }}>6.Default dimensions for volumetric weight will be calculated on the basis of L*B*H/Divison Factor. (All L,B,H are in cm)</Typography>
                        <Typography sx={{ color: "rgb(38, 63, 151)", fontSize: "12px", mt: "10px" }}>7.If a Shipment cannot be delivered, cleared through customs or returned, the Shipment may be transferred.</Typography>
                        <Typography sx={{ color: "rgb(38, 63, 151)", fontSize: "12px", mt: "10px" }}>8.The Sender will be liable for any and all costs, Charges and fees incurred in returning, storing or disposing of an undelivered Shipment.</Typography>
                        <Typography sx={{ color: "rgb(38, 63, 151)", fontSize: "12px", mt: "10px" }}>9.Fixed COD charge or COD % of the order value whichever is higher will be taken while calculating the COD fee.</Typography>
                        <Typography sx={{ color: "rgb(38, 63, 151)", fontSize: "12px", mt: "10px" }}>10.For any queries a ticket has to be raised on support@pickrr.com</Typography>
                        <Typography sx={{ color: "rgb(38, 63, 151)", fontSize: "12px", mt: "10px" }}>10.Rate cards are exclusive of secure shipment charges.</Typography>
                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default RateCard