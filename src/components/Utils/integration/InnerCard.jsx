import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, Button,IconButton, Grid, OutlinedInput, Step, StepContent, StepLabel, Stepper, Switch, Typography } from '@mui/material';
import shopify from '../../../images/shop.svg'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


const InnerCard = ({setNewIntegrate}) => {
    const [ activeStep, setActiveStep]=useState()

    const  GoBack=()=>{
      setNewIntegrate("newInte")
    }
  return (
    <>
      <Grid container p="15px">
      <Grid item container  xs={12} sx={{bgcolor:"#fafafa",p:"10px",borderRadius:"10px"}}>
        <Grid item xs={11}>
                <Button sx={{fontSize: "16px",
                  paddingBottom: "12px",
                  color: "rgb(38, 63, 151)",
                  opacity: "0.6",
                 cursor:" pointer"

              }} onClick={GoBack}> <ArrowBackIosNewIcon sx={{fontSize:"17px"}}/>back</Button>
              <Typography variant='h4' sx={{color:"rgb(38, 63, 151)",fontWeight:"800"}}>General Information</Typography>
              </Grid>
              <Grid item xs={1} >
                <img src={shopify} height="100%" width="100%"/>
              </Grid>
            </Grid>

            <Grid item container xs={12}>
                <Grid item container xs={12} md={6}>
                   <Stepper sx={{width:"100%"}} orientation="vertical" activeStep={activeStep}>
                    <Step sx={{width:"100%"}}> 
                        <StepLabel>
                          <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600"}}><span style={{color:"red"}}>*</span>Website Admin URL</Typography>
                        </StepLabel>
                        <StepContent>
                                <Box sx={{display:"flex",alignItems:"center"}}>
                                <OutlinedInput sx={{height:"40px",width:"50%",mr:"10px"}} placeholder='eg: https://fredefy.myshopify.com/admin'/>
                                <Button variant='contained' sx={{bgcolor:"rgb(38, 63, 151)",color:"white",width:"40%",height:"40px",fontSize:"12px"}}><FileDownloadIcon sx={{p:"0px",m:"0px"}}/>Download pickrr app</Button>
                                </Box>
                                <Typography sx={{color:"rgba(0,0,0,.45)",fontSize:"12px"}}>Enter the website admin url and click on Download Pickrr App</Typography>
                                
                        </StepContent>
                    </Step>


                    <Step sx={{width:"100%"}}> 
                        <StepLabel>
                          <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600",display:"flex",alignItems:"center"}}>Pickrr Auth Token :33106b8803cc4b73c07d8c759e26f29d857678<FileCopyIcon/></Typography>
                        </StepLabel>
                        <StepContent>
                                <Box>
                                <Typography sx={{color:"rgba(0,0,0,.45)",fontSize:"12px"}}>Update this auth token on Pickrr App installed on Shopify</Typography>
                                </Box>
                        </StepContent>
                    </Step>

                    <Step sx={{width:"100%"}}> 
                        <StepLabel>
                          <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600",display:"flex",alignItems:"center"}}>Once Pickrr App is configured on Shopify account,click on connect with shopify button below.<FileCopyIcon/></Typography>
                        </StepLabel>
                        <StepContent>
                                <Box>
                                <Button variant='contained' sx={{bgcolor:"rgb(38, 63, 151)",color:"white",width:"35%",height:"40px",fontSize:"15px",width:"50%"}}>connect with shopify</Button>
                                </Box>
                        </StepContent>
                    </Step>
                   </Stepper>
                </Grid>


                <Grid item container xs={12}  md={12} lg={6} sx={{bgcolor:"#e8eaf6",borderRadius:"10px",p:"10px"}}>
                    <Grid item container xs={12} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                 <Grid item xs={12}>
                    <Typography sx={{display:"flex",alignItem:"center",color:"rgb(38, 63, 151)",fontWeight:"600"}}><AdsClickIcon sx={{mr:"15px"}}/>Steps to Integrate Shopify</Typography>
                 </Grid>
                 <Grid item xs={12} sx={{display:"flex",alignItems:"center",mt:"15px"}}>
                    <Typography sx={{width:"30px",height:"30px",borderRadius:"50px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"white",mr:"15px",color:"rgb(38, 63, 151)",fontWeight:"800"}}>1</Typography>
                    <Typography color="#3f51b5" >Enter website admin url of shopify store and click on Download Pickrr App.</Typography>
                 </Grid>
                 <Grid item xs={12} sx={{display:"flex",alignItems:"center",mt:"15px"}}>
                    <Typography sx={{width:"30px",height:"30px",borderRadius:"50px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"white",mr:"15px",color:"rgb(38, 63, 151)",fontWeight:"800"}}>2</Typography>
                    <Typography color="#3f51b5" >You’ll be re-directed to Login Shopify admin panel. On successful login, you’ll need to install Pickrr app and update Pickrr auth token for necessary approval.</Typography>
                 </Grid>
                 <Grid item xs={12} sx={{display:"flex",alignItems:"center",mt:"15px"}}>
                    <Typography sx={{width:"30px",height:"30px",borderRadius:"50px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"white",mr:"15px",color:"rgb(38, 63, 151)",fontWeight:"800"}}>3</Typography>
                    <Typography color="#3f51b5" sx={{wordWrap:"break-word"}}>Once Pickrr app is configured on Shopify, come back to Pickrr and click on Connect with Shopify button. System will automatically fetch authentication token from Shopify.</Typography>
                 </Grid>
                 <Grid item xs={12} sx={{display:"flex",alignItems:"center",mt:"15px"}}>
                    <Typography sx={{width:"30px",height:"30px",borderRadius:"50px",display:"flex",justifyContent:"center",alignItems:"center",bgcolor:"white",mr:"15px",color:"rgb(38, 63, 151)",fontWeight:"800"}}>4</Typography>
                    <Typography color="#3f51b5">Move further and configure the order status (s) below that you want to pull in Pickrr.</Typography>
                 </Grid>
                 </Grid>
                </Grid>


                <Grid item xs={12} borderBottom="1px solid #eeeeee" mt="30px">
                </Grid>
            </Grid>
      </Grid>

      <Grid container>
        <Grid item container xs={12} lg={6}>
            <Grid item xs={12} p="15px">
            <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600"}}>Order Pull Status</Typography>
            <OutlinedInput sx={{height:"40px",mt:"10px"}} fullWidth/>
            <Typography sx={{color:"rgba(0,0,0,.45)",fontSize:"12px"}}>Enter the website admin url and click on Download Pickrr App</Typography>
            </Grid>

            <Grid item xs={12} p="15px">
            <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600"}}>Tracking Status Mapping</Typography>
            <Typography color="#3f51b5" sx={{fontSize:"14px"}} >Update shopify status codes against provided Pickrr Tracking Statuses</Typography>
            </Grid>

            <Grid item xs={12} p="15px">
            <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600"}}>Order Placed</Typography>
            <OutlinedInput sx={{height:"40px",mt:"10px"}} fullWidth/>
            <Typography sx={{color:"rgba(0,0,0,.45)",fontSize:"12px"}}>Enter the exact status on shopify when order is placed in Pickrr</Typography>
            </Grid>

            <Grid item xs={12} p="15px">
            <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600"}}>In-Transit</Typography>
            <OutlinedInput sx={{height:"40px",mt:"10px"}} fullWidth/>
            <Typography sx={{color:"rgba(0,0,0,.45)",fontSize:"12px"}}>Enter the exact status on shopify when order is in transit to customers</Typography>
            </Grid>

            <Grid item xs={12} p="15px">
            <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600"}}>RTD</Typography>
            <OutlinedInput sx={{height:"40px",mt:"10px"}} fullWidth/>
            <Typography sx={{color:"rgba(0,0,0,.45)",fontSize:"12px"}}>Enter the exact status on shopify when order is RTD to end customer</Typography>
            </Grid>

            <Grid item xs={12} p="15px">
            <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600"}}>RTO</Typography>
            <OutlinedInput sx={{height:"40px",mt:"10px"}} fullWidth/>
            <Typography sx={{color:"rgba(0,0,0,.45)",fontSize:"12px"}}>Enter the exact status on shopify when order is RTO to end customer</Typography>
            </Grid>
        </Grid>

 
        <Grid item container xs={12} lg={6}>
            <Grid item container p="15px">
                <Grid item xs={4}>
                <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600"}}>Update Tracking</Typography>
                 <Switch/>
                <Typography sx={{color:"rgba(0,0,0,.45)",fontSize:"12px"}}>Select to push Tracking status update on shopify</Typography>
                </Grid>

                <Grid item xs={4}>
                <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600"}}>Update Tracking Status</Typography>
                 <Switch/>
                <Typography sx={{color:"rgba(0,0,0,.45)",fontSize:"12px"}}>Select to push Tracking status update on shopify</Typography>
                </Grid>

                <Grid item xs={4}>
                <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600"}}>Multiple Location</Typography>
                 <Switch/>
                <Typography sx={{color:"rgba(0,0,0,.45)",fontSize:"12px"}}>Select if you have multiple inventory locations configured with shopify</Typography>
                </Grid>
                <Grid item xs={12} sx={{height:"25px"}}>

                </Grid>

                <Grid item xs={12} >
            <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600"}}>Picked Up</Typography>
            <OutlinedInput sx={{height:"40px",mt:"10px"}} fullWidth/>
            <Typography sx={{color:"rgba(0,0,0,.45)",fontSize:"12px"}}>Enter the exact status on shopify when order is picked to end customer</Typography>
            </Grid>

            <Grid item xs={12} >
            <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600"}}>Delivered</Typography>
            <OutlinedInput sx={{height:"40px",mt:"10px"}} fullWidth/>
            <Typography sx={{color:"rgba(0,0,0,.45)",fontSize:"12px"}}>Enter the exact status on shopify when order is delivered to end customer</Typography>
            </Grid>

            <Grid item xs={12} >
            <Typography sx={{color:"rgb(38, 63, 151)",fontWeight:"600"}}>Cancelled</Typography>
            <OutlinedInput sx={{height:"40px",mt:"10px"}} fullWidth/>
            <Typography sx={{color:"rgba(0,0,0,.45)",fontSize:"12px"}}>Enter the exact status on shopify when order is RTO to end customer</Typography>
            </Grid>

            <Grid item xs={12}>
                <Box sx={{display:"flex",justifyContent:"flex-end"}}>
                    <Button variant='contained' disableRipple sx={{color:"#c5cae9",bgcolor:"#e8eaf6","&:hover":{bgcolor:"#e8eaf6"}}}>cancel</Button>
                    <Button variant='contained' sx={{bgcolor:"rgb(38, 63, 151)",ml:"10px"}}>save</Button>
                </Box>
            </Grid>
            </Grid>
        </Grid>
      </Grid>
      <Box mt="20px" p="30px" sx={{bgcolor:"#e8eaf6"}} >
            <Typography align='center'>Pickrr Technologies Pvt. Ltd. All Rights Reserved ©2022</Typography>
          </Box>

          <Box sx={{position:"fixed", right:"20px",bottom:"40px",width:"fit-content",bgcolor:"#303f9f",borderRadius:"17px 5px 25px 17px"}}>
            <IconButton sx={{color:"white",display:"flex",alignItems:"center"}}>
                <HelpOutlineIcon/><Typography>Need Help</Typography>
            </IconButton>
          </Box>
    </>
  )
}

export default InnerCard