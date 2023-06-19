import { Box, Button, Grid, IconButton, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchIcon from '@mui/icons-material/Search';
import shopify from '../../../images/shop.svg'
import woo from '../../../images/woo.svg'
import magento1 from '../../../images/megento1.svg'
import magento2 from '../../../images/megento2.svg'
import shoptimize from '../../../images/shoptimize.svg'
import amazon1 from '../../../images/amazon.svg'
import amazon2 from '../../../images/amazon2.svg'
import instamojo from '../../../images/instamojo.svg'
import opencart from '../../../images/opencart.svg'
import ecwid from '../../../images/ecywid.svg'
import prestashop from '../../../images/presto.svg'
import hippo from '../../../images/hippo.svg'
import wix from '../../../images/wix.svg'
import zoho1 from '../../../images/zoho-svg.svg'
import zoho2 from '../../../images/zoho2.svg'
import bikayi from '../../../images/bikayi.svg'
import unicom from '../../../images/unicom.svg'
import browntape from '../../../images/browntape.svg'
import clickpost from '../../../images/clickpost.svg'
import OMSguru from '../../../images/OMS.svg'
import Easyops from '../../../images/easyops.svg'
import Ezy from '../../../images/esy.svg'
import sumtrack from '../../../images/sumtracker.svg'
import Easycom from '../../../images/easyecom.svg'
import vinculum from '../../../images/vinculum.svg'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';








const InteCards = ({setNewIntegrate}) => {
  // Website/Marketplace
  const api=[
    {
      img:shopify,
      btnName:"Shopify"
    },
    {
      img:woo,
      btnName:"Woocommerce"
    },
    {
      img:magento1,
      btnName:"Magento 1.x"
    },
    {
      img:magento2,
      btnName:"Magento 2.x"
    },
    {
      img:shoptimize,
      btnName:"shoptimize"
    },
    {
      img:amazon1,
      btnName:"Amazon"
    },
    {
      img:amazon2,
      btnName:"Amazon Easycom"
    },
    {
      img:instamojo,
      btnName:"Instamojo"
    },
    {
      img:opencart,
      btnName:"opencart"
    },
    {
      img:ecwid,
      btnName:"ecwid"
    },
    {
      img:hippo,
      btnName:"Storehippo"
    },
    {
      img:wix,
      btnName:"wix"
    },
    {
      img:zoho1,
      btnName:"Zoho Inventory"
    },
    {
      img:zoho2,
      btnName:"Zoho "
    },
    {
      img:bikayi,
      btnName:"Bikayi"
    },
    {
      img:prestashop,
      btnName:"Prestashop"
    }
  ]

  // Order Management Platform
  const api2=[
    {
      img:unicom,
      btnName:"Unicommerce"
    },
    {
      img:browntape,
      btnName:"Browntape"
    },
    {
      img:clickpost,
      btnName:"Clickpost"
    },
    {
      img:OMSguru,
      btnName:"OMSguru"
    },
    {
      img:Easycom ,
      btnName:" Easyecom"
    },
    {
      img:vinculum,
      btnName:"Vinculum"
    },
    {
      img:Easyops,
      btnName:"Easyops"
    },
    {
      img:Ezy ,
      btnName:"Ezyslips"
    },
    {
      img:sumtrack,
      btnName:"Sumtracker"
    },
    
  ]

const GoBack =()=>{
  setNewIntegrate("AddNewIntegrate")
}

  
  return (
    <>
     <Box>
        <Grid container p="15px" spacing={2}>
            <Grid item xs={12} sx={{bgcolor:"#fafafa",p:"10px",borderRadius:"10px"}}>
                <Button sx={{fontSize: "16px",
                  paddingBottom: "11px",
                  color: "rgb(38, 63, 151)",
                  opacity: "0.6",
                 cursor:" pointer"
              }} onClick={()=>{{GoBack()}}}><ArrowBackIosNewIcon sx={{fontSize:"17px"}}/>back</Button>
              <Typography variant='h4' sx={{color:"rgb(38, 63, 151)",fontWeight:"800"}}>Add/Integrate New Channel</Typography>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{display:"flex",alignItems:"center"}}> 
                    <Typography  sx={{bgcolor:"#E9ECF5",color:"#263F97",fontWeight:"800",height:"35px",border:"1px solid #bdbdbd",display:"flex",alignItems:"center",borderRadius:"10px 0px 0px 10px",p:"5px",cursor:"pointer"}}>search Channel name</Typography>
                     <OutlinedInput placeholder='input search text' sx={{height:"46px",border:"1px solid #bdbdbd","&hover":{border:"#bdbdbd"},borderRadius:"0px",width:"30%"}} />
                     <IconButton sx={{border:"1px solid #bdbdbd",height:"46px",width:"45px",borderRadius:"0px 10px 10px 0px",cursor:"pointer"}}>
                      <SearchIcon/>
                     </IconButton>
                </Box>
                   
            </Grid>
            <Grid item xs={12}>
            <Typography variant='h6' sx={{color:"rgb(38, 63, 151)",fontWeight:"800",textAlign:{xs:"center",sm:"center",md:"left",lg:"left"}}}>Website/Marketplace</Typography>
            </Grid>
            <Grid item container xs={12} spacing={2} justifyContent="space-evenly">
              {
                api.map((ele)=>{
                  return (

               <Grid item sx={{display:"flex",flexWrap:"wrap",cursor:"pointer"}} onClick={()=>{setNewIntegrate("innerCard")}}>
                <Box sx={{border:"2px solid #e8eaf6",borderRadius:"14px "}}>
                <Box sx={{display:"flex",justifyContent:"center",p:"20px 90px 20px 90px"}}>
                  <img src={ele.img} height="100px" width="100px"/>
                </Box>
                <Button fullWidth sx={{borderRadius:"18px 18px 14px 14px",bgcolor:"#e8eaf6",color:"rgb(38, 63, 151)"}}>
                 {ele.btnName}
                </Button>
                </Box>
               </Grid>
                  )
                })
              }
               
            </Grid>


            <Grid item xs={12} mt="20px">
            <Typography variant='h6' sx={{color:"rgb(38, 63, 151)",fontWeight:"800",textAlign:{xs:"center",sm:"center",md:"left",lg:"left"}}}>Order Management Platform</Typography>
            </Grid>
            <Grid item container xs={12} spacing={2} justifyContent="space-evenly">
              {
                api2.map((ele)=>{
                  return (

               <Grid item sx={{display:"flex",flexWrap:"wrap",cursor:"pointer"}}>
                <Box sx={{border:"2px solid #e8eaf6",borderRadius:"14px "}}>
                <Box sx={{display:"flex",justifyContent:"center",p:"20px 90px 20px 90px"}}>
                  <img src={ele.img} height="100px" width="100px"/>
                </Box>
                <Button fullWidth sx={{borderRadius:"18px 18px 14px 14px",bgcolor:"#e8eaf6",color:"rgb(38, 63, 151)"}}>
                 {ele.btnName}
                </Button>
                </Box>
               </Grid>
                  )
                })
              }
               
            </Grid>
        </Grid>
        <Box>
        <Grid item xs={12} mt="20px" p="30px" sx={{bgcolor:"#e8eaf6"}} >
            <Typography align='center'>Pickrr Technologies Pvt. Ltd. All Rights Reserved ©2022</Typography>
          </Grid>

          <Box sx={{position:"fixed", right:"20px",bottom:"40px",width:"fit-content",bgcolor:"#303f9f",borderRadius:"17px 5px 25px 17px"}}>
            <IconButton sx={{color:"white",display:"flex",alignItems:"center"}}>
                <HelpOutlineIcon/><Typography>Need Help</Typography>
            </IconButton>
          </Box>
        </Box>
     </Box>
    </>
  )
}

export default InteCards