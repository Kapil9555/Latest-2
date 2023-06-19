import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import earlycod from '../../../images/earlycod.svg'
import coins from '../../../images/vaadin_coins.png'
import goldCoin from '../../../images/goldCoin.svg'

const EarlyCod = () => {
  return (
    <>
    <Grid container sx={{mt:"20px",bgcolor:"white"}}>
        <Grid item xs={12} >
            <Box sx={{p:"80px 0px 80px 0px",display:"flex",alignItems:"center",justifyContent:"center",backgroundImage:`url(${earlycod})`,backgroundSize:"cover",height:"fit-content",width:"100%",borderRadius:"15px"}}>
               <Box sx={{width:"40%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <Box sx={{display:"flex",alignItems:"center"}}>
                    <img src={coins} height="30px" width="30px"/>
                     <Typography variant='h4'align='center' sx={{fontWeight:"700",color:"white",ml:"15px"}}>Early COD Remittance Plans</Typography>
                </Box>
               
                <Typography align='center' sx={{color:"white",mt:"10px"}}>Receive fastest payments with Pickrr's Early COD services. We have introduced this
                    service in an attempt to enable easy cash flow to meet your working capital requirement.</Typography>
                    <Box sx={{mt:"15px"}}>
                        <Button variant='contained' sx={{bgcolor:"white",color:"rgb(38, 63, 151)","&:hover":{bgcolor:"white"}}}>More details</Button>
                    </Box>
               </Box>
            </Box>
        </Grid>
        <Grid item xs={12} p="20px">
            <Typography sx={{color:"rgb(38, 63, 151)"}}>Select a payment plan that suits best for your business needs</Typography>
        </Grid>
        <Grid item container spacing={2} p="20px">
            <Grid item xs={12} md={6} lg={4}>
                <Box sx={{border:"2px solid rgb(237, 240, 249)",borderRadius:"12px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",p:"15px"}}>
                    <Box sx={{width:"fit-content",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",lineHeight:"30px"}}>
                    <Typography sx={{color:"rgb(38, 63, 151)",fontSize:"24px",fontWeight:"700",letterSpacing:"0.2px"}}>2 Days Plan</Typography>
                    <Box>
                    <img src={goldCoin}/>
                    </Box>
                    <Button sx={{color:"rgb(25, 139, 251)",fontSize:"14px",fontWeight:"bold",bgcolor:"rgba(25, 139, 251, 0.05)","&:hover":{bgcolor:"rgba(25, 139, 251, 0.05)"}}}>Daily COD Payouts</Button>
                    <Typography sx={{color:"rgb(38, 63, 151)",fontSize:"18px",fontWeight:"bold",letterSpacing:"0.2px",mt:"10px"}}>Delivered + 2days</Typography>
                     <Typography sx={{fontSize:"16px",color:"rgb(56, 68, 109)",mt:"10px"}}>At Minimal Transaction Charge</Typography>
                     <Typography align='center' sx={{fontSize:"16px",color:"rgb(56, 68, 109)",mt:"10px"}}>1% Of COD amount</Typography>
                     <Typography align='center' sx={{fontSize:"12px",color:"rgb(56, 68, 109)"}}>(Inclusive GST)</Typography>
                     <Button sx={{bgcolor:"rgb(38, 63, 151)",color:"white","&:hover":{bgcolor:"rgb(38, 63, 151)"},mt:"10px"}}>Send Request</Button>

                 </Box>


                </Box>
            </Grid>


            <Grid item xs={12} md={6} lg={4}>
                <Box sx={{border:"2px solid rgb(237, 240, 249)",borderRadius:"12px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",p:"15px"}}>
                    <Box sx={{width:"fit-content",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",lineHeight:"30px"}}>
                    <Typography sx={{color:"rgb(38, 63, 151)",fontSize:"24px",fontWeight:"700",letterSpacing:"0.2px"}}>3 Days Plan</Typography>
                    <Box>
                    <img src={goldCoin}/>
                    </Box>
                    <Button sx={{color:"rgb(25, 139, 251)",fontSize:"14px",fontWeight:"bold",bgcolor:"rgba(25, 139, 251, 0.05)","&:hover":{bgcolor:"rgba(25, 139, 251, 0.05)"}}}>12 COD Payouts/month</Button>
                    <Typography sx={{color:"rgb(38, 63, 151)",fontSize:"18px",fontWeight:"bold",letterSpacing:"0.2px",mt:"10px"}}>Delivered + 3days</Typography>
                     <Typography sx={{fontSize:"16px",color:"rgb(56, 68, 109)",mt:"10px"}}>At Minimal Transaction Charge</Typography>
                     <Typography align='center' sx={{fontSize:"16px",color:"rgb(56, 68, 109)",mt:"10px"}}>1% Of COD amount</Typography>
                     <Typography align='center' sx={{fontSize:"12px",color:"rgb(56, 68, 109)"}}>(Inclusive GST)</Typography>
                     <Button sx={{bgcolor:"rgb(38, 63, 151)",color:"white","&:hover":{bgcolor:"rgb(38, 63, 151)"},mt:"10px"}}>Send Request</Button>

                 </Box>


                </Box>
            </Grid>


            <Grid item xs={12} md={6} lg={4}>
                <Box sx={{border:"2px solid rgb(237, 240, 249)",borderRadius:"12px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",p:"15px"}}>
                    <Box sx={{width:"fit-content",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",lineHeight:"30px"}}>
                    <Typography sx={{color:"rgb(38, 63, 151)",fontSize:"24px",fontWeight:"700",letterSpacing:"0.2px"}}>4 Days Plan</Typography>
                    <Box>
                    <img src={goldCoin}/>
                    </Box>
                    <Button sx={{color:"rgb(25, 139, 251)",fontSize:"14px",fontWeight:"bold",bgcolor:"rgba(25, 139, 251, 0.05)","&:hover":{bgcolor:"rgba(25, 139, 251, 0.05)"}}}>8 COD Payouts/month</Button>
                    <Typography sx={{color:"rgb(38, 63, 151)",fontSize:"18px",fontWeight:"bold",letterSpacing:"0.2px",mt:"10px"}}>Delivered + 4days</Typography>
                     <Typography sx={{fontSize:"16px",color:"rgb(56, 68, 109)",mt:"10px"}}>At Minimal Transaction Charge</Typography>
                     <Typography align='center' sx={{fontSize:"16px",color:"rgb(56, 68, 109)",mt:"10px"}}>1% Of COD amount</Typography>
                     <Typography align='center' sx={{fontSize:"12px",color:"rgb(56, 68, 109)"}}>(Inclusive GST)</Typography>
                     <Button sx={{bgcolor:"rgb(38, 63, 151)",color:"white","&:hover":{bgcolor:"rgb(38, 63, 151)"},mt:"10px"}}>Send Request</Button>

                 </Box>


                </Box>
            </Grid>

            <Grid item xs={12}>
                <Box sx={{display:"flex",justifyContent:"space-between",mt:"15px"}}>
                    <Box>
                        <Typography sx={{}}><a href='#' style={{color:"rgb(25, 139, 251)",fontWeight:"bold"}}>More About Early COD</a></Typography>
                    </Box>

                    <Box>
                      <Typography sx={{fontSize:"14px",color:"rgb(38, 63, 151)"}}>*Plan updates will be notified to you on email.</Typography>
                      <Typography sx={{fontSize:"14px",color:"rgb(38, 63, 151)"}}>*Services will be applicable on newly placed orders post plan activation</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Grid>
    </>
  )
}

export default EarlyCod