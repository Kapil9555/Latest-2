import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


import MainTable from './MainTable';
import RtoTable from './RtoTable';

const Rto = () => {
    const [express, setExpress]=useState(true)
    const [surface , setSurface]=useState(true)


    return (
        <>
            <Grid container >
                
                    <Grid item xs={12} sx={{ bgcolor: "white" }}>
                        <Box sx={{p:"15px"}}>
                             <Box sx={{display:express?"block":"none"}}>
                             <Accordion sx={{ bgcolor: "#e8eaf6"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                   <Typography sx={{ color: "rgb(38, 63, 151)", fontWeight: "800", fontSize: "18px" }}>Base upto 0.5 KG + Every Additional 0.5 KG - 1 Courier Options</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                               <RtoTable/>
                            </AccordionDetails>
                        </Accordion>
                                
                             </Box>
                             


                             <Box sx={{display:express?"block":"none",mt:"5px"}}>
                             <Accordion sx={{ bgcolor: "#e8eaf6"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                   <Typography sx={{ color: "rgb(38, 63, 151)", fontWeight: "800", fontSize: "18px" }}>Base upto 0.5 KG + Every Additional 0.5 KG - 1 Courier Options</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <RtoTable />
                            </AccordionDetails>
                        </Accordion>
                                
                             </Box>
                             </Box>
                               
                    </Grid>
                


                
                    <Grid item xs={12} sx={{ bgcolor: "white",mt:"30px" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "white", bgcolor: "rgb(38, 63, 151)", p: "8px", borderRadius: "12px 12px 0px 0px" }}>
                            <Typography>Surface Shipping</Typography>
                            <IconButton onClick={()=>{setSurface(false)}} sx={{display:surface==true?"block":"none" }}>
                                <KeyboardArrowUpIcon sx={{ fontSize: "40px", color: "white",}} />
                            </IconButton>

                            <IconButton onClick={()=>{setSurface(true)}} sx={{display:surface==true?"none":"true" }}>
                                <ExpandMoreIcon sx={{ fontSize: "40px", color: "white" }} />
                            </IconButton>
                        </Box>
                        <Box sx={{p:"15px"}}>
                        <Box sx={{display:surface==true?"block":"none",mt:"5px"}}>
                        <Accordion sx={{ bgcolor: "#e8eaf6"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                   <Typography sx={{ color: "rgb(38, 63, 151)", fontWeight: "800", fontSize: "18px" }}>Base upto 0.5 KG + Every Additional 0.5 KG - 1 Courier Options</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <RtoTable/>
                            </AccordionDetails>
                        </Accordion>
                        </Box>

                        <Box sx={{display:surface==true?"block":"none",mt:"5px"}}>
                        <Accordion sx={{ bgcolor: "#e8eaf6"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                   <Typography sx={{ color: "rgb(38, 63, 151)", fontWeight: "800", fontSize: "18px" }}>Base upto 0.5 KG + Every Additional 0.5 KG - 1 Courier Options</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <RtoTable />
                            </AccordionDetails>
                        </Accordion>
                        </Box>

                        <Box sx={{display:surface==true?"block":"none",mt:"5px"}}>
                        <Accordion sx={{ bgcolor: "#e8eaf6"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                   <Typography sx={{ color: "rgb(38, 63, 151)", fontWeight: "800", fontSize: "18px" }}>Base upto 0.5 KG + Every Additional 0.5 KG - 1 Courier Options</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <RtoTable />
                            </AccordionDetails>
                        </Accordion>
                        </Box>
                        

                        <Box sx={{display:surface==true?"block":"none",mt:"5px"}}>
                        <Accordion sx={{ bgcolor: "#e8eaf6"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                   <Typography sx={{ color: "rgb(38, 63, 151)", fontWeight: "800", fontSize: "18px" }}>Base upto 0.5 KG + Every Additional 0.5 KG - 1 Courier Options</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <RtoTable />
                            </AccordionDetails>
                        </Accordion>
                        </Box>
                        <Box sx={{display:surface==true?"block":"none",mt:"5px"}}>
                        <Accordion sx={{ bgcolor: "#e8eaf6"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                   <Typography sx={{ color: "rgb(38, 63, 151)", fontWeight: "800", fontSize: "18px" }}>Base upto 0.5 KG + Every Additional 0.5 KG - 1 Courier Options</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <RtoTable />
                            </AccordionDetails>
                        </Accordion>
                        </Box>

                        <Box sx={{display:surface==true?"block":"none",mt:"5px"}}>
                        <Accordion sx={{ bgcolor: "#e8eaf6"}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                   <Typography sx={{ color: "rgb(38, 63, 151)", fontWeight: "800", fontSize: "18px" }}>Base upto 0.5 KG + Every Additional 0.5 KG - 1 Courier Options</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <RtoTable />
                            </AccordionDetails>
                        </Accordion>
                        </Box>
                        </Box>

                      

                               
                    </Grid>
                </Grid>
        </>
    )
}

export default Rto