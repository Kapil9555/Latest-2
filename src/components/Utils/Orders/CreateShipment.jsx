import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormLabel, Grid, IconButton, OutlinedInput, Radio, RadioGroup, TextareaAutosize, Typography } from '@mui/material';
import React, { useState } from 'react';
import ArticleIcon from '@mui/icons-material/Article';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import DoneIcon from '@mui/icons-material/Done';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


const CreateShipment = () => {
  const [radioShow, setRadioShow]=useState({
    radio1:false,
    radio2:false
  })
  console.log(radioShow)

  return (
    <>
      <Box sx={{bgcolor:"#f4f6f9}",p:"10px"}} >


         <Grid  container >
            <Grid item  xs={1.5} sx={{height:"100%",p:"10px",bgcolor:"white",borderRadius:"13px",display:{xs:"none",sm:"none",md:"block",lg:"block"}}} >
              <Typography sx={{display:"flex",alignItems:"center"}}><ArticleIcon sx={{color:"#ff9800",bgcolor:"#ffcc80",height:"40px",width:"33px",fontsize:"24px",borderRadius:"10px",mr:"5px"}}/>Shipment Details</Typography>
            </Grid>


            <Grid item xs={4} sx={{display:{xs:"block",sm:"block",md:"none",lg:"none"},border:"1pxm solid black"}}>
             <IconButton  sx={{p:"10px",width:"100%",display:"flex",justifyContent:"center"}} >
              <ArticleIcon sx={{color:"#ff9800",bgcolor:"#ffcc80",height:"40px",width:"33px",fontsize:"24px",borderRadius:"10px",mr:"5px"}}/>
            </IconButton>
            </Grid>



              <Grid item xs={3.75} sx={{height:"35px",borderBottom:"1px solid  #eceff1",display:{xs:"none",sm:"none",md:"block",lg:"block"}}} ></Grid>
            <Grid item  xs={1.5}  sx={{p:"10px",bgcolor:"white",borderRadius:"13px",display:{xs:"none",sm:"none",md:"block",lg:"block"}}}>
              <Typography sx={{display:"flex",alignItems:"center"}}><ViewInArIcon sx={{color:"#90a4ae",bgcolor:"#cfd8dc",height:"40px",width:"33px",fontsize:"24px",borderRadius:"10px",mr:"5px"}}/>Add Items & Quality Check</Typography>
            </Grid>


            <Grid item xs={4} sx={{display:{xs:"block",sm:"block",md:"none",lg:"none"},border:"1pxm solid black"}}>
               <IconButton   sx={{p:"10px",width:"100%",display:"flex",justifyContent:"center"}}  >
               <ViewInArIcon sx={{color:"#90a4ae",bgcolor:"#cfd8dc",height:"40px",width:"33px",fontsize:"24px",borderRadius:"10px",mr:"5px"}}/>
               </IconButton>
            </Grid>



            <Grid item xs={3.75} sx={{height:"35px", borderBottom:"1px solid  #eceff1",display:{xs:"none",sm:"none",md:"block",lg:"block"}}}></Grid>
            <Grid item  xs={1.5}  sx={{p:"10px",bgcolor:"white",borderRadius:"13px",display:{xs:"none",sm:"none",md:"block",lg:"block"}}}>
              <Typography sx={{display:"flex",alignItems:"center"}}><DoneIcon sx={{color:"#90a4ae",bgcolor:"#cfd8dc",height:"40px",width:"33px",fontsize:"24px",borderRadius:"10px",mr:"5px"}}/>Review & Submit</Typography>
            </Grid>


             <Grid item  xs={4} sx={{display:{xs:"block",sm:"block",md:"none",lg:"none"},border:"1pxm solid black"}} >
             <IconButton  sx={{p:"10px",width:"100%",display:"flex",justifyContent:"center"}}  >
             <DoneIcon sx={{color:"#90a4ae",bgcolor:"#cfd8dc",height:"40px",width:"33px",fontsize:"24px",borderRadius:"10px",mr:"5px"}}/>
             </IconButton>
            </Grid>
         </Grid>

            
        
           

    
        <Grid   container sx={{borderRadius:"13px"}} justifyContent="space-between" >
         <Grid item container xs={12} sm={12} md={8} lg={8} sx={{bgcolor:"white",borderRadius:"13px",mt:"15px",p:"15px"}}>

            {/* 1sr part */}
            <Grid item container xs={12} sx={{bgcolor:"white",borderRadius:"13px",mt:"15px",alignItems:"center"}}>
              <Grid item xs={6}>
                <Typography sx={{fontWeight:"800",color:"#303f9f"}} >Single Shipment</Typography>
              </Grid>
              <Grid item xs={6} sx={{display:"flex",justifyContent:"flex-end"}}>
                <Button  sx={{color:"#303f9f",bgcolor:"#9fa8da",fontWeight:"600","&:hover": { backgroundColor: "#9fa8da" } }}>+ &nbsp;Create Bulk Shipment</Button>
              </Grid>
            </Grid>

            {/* 2nd part */}
            <Grid item  container xs={12} p="15px" sx={{justifyContent:"center"}}>
              <Grid item xs={12}>
              <FormControl >
             <RadioGroup
               
               row
               aria-labelledby="demo-form-control-label-placement"
               name="position"
               defaultValue="top"
                >
              <Grid component={'label'} id='radio' container xs={12} sm={12} md={5} sx={{border:radioShow.radio1==true?"2px solid #f44336":"2px solid gray",borderRadius:"10px",m:"7px",p:"7px",cursor:"pointer"}}  onClick={()=>{setRadioShow({radio1:true,radio2:false})}}>
              <Grid item xs={12} >
                <FormControlLabel
                sx={{color:"#303f9f"}}
                  value="radio1"
                  id='radio'
                  control={<Radio value={radioShow.radio1} color='error'/>}
                  label={<b>Forward Shipment</b>}
                  labelPlacement="right"
                  />
                </Grid>
                <Grid item xs={12} >
                 <Typography ml="32px" color="#5c6bc0">Shipping from your warehouse to end customers</Typography>
                 </Grid>              
              </Grid>
               
              <Grid container component={'label'} id='radio2' xs={12} sm={12} md={5} sx={{border:radioShow.radio2==true?"2px solid #f44336":"2px solid gray",borderRadius:"10px",m:"7px",p:"7px",cursor:"pointer"}} onClick={()=>{setRadioShow({radio1:false,radio2:true})}}>
              <Grid item xs={12}  >
                <FormControlLabel
                sx={{color:"#303f9f"}}
                id='radio2'
                  value="radio2"
                  control={<Radio value={radioShow.radio2} color='error'/>}
                  label={<b>Reverse Shipment</b>}
                  labelPlacement="right"
                  
                  />
                   </Grid>
                   <Grid item xs={12}>
                 <Typography  color="#5c6bc0" ml="32px">Shipping from Cutomer location back to warehouse</Typography>
                 </Grid>
              </Grid>

              </RadioGroup>
              </FormControl>

              </Grid>

               <Grid item container sx={{display:radioShow.radio2==true?"block":"none"}}>
                 <Grid item xs={12} md={6}>
                 <Typography sx={{fontWeight:"800",color:"#303f9f",mt:"10px"}}><span style={{color:"red"}}>*</span>Do you want to do quality check for the item?</Typography>
                 </Grid>
                 <Grid item xs={12} md={4} >
                 <FormControl>
                   <RadioGroup
                      row
                      aria-labelledby="demo-form-control-label-placement"
                      name="position"
                      defaultValue="top"
                      
                      >
                    <FormControlLabel value="radio1" control={<Radio color='error'/>} label="Yes" sx={{color:"#303f9f",fontWeight:"700"}}/>
                    <FormControlLabel value="radio2" control={<Radio color='error'/>} label="No" sx={{color:"#303f9f",fontWeight:"700"}}/>
                    </RadioGroup>
                  </FormControl>
                 </Grid>
                 <Grid item xs={12}>
                  <Typography  sx={{color:"#303f9f",mt:"10px",ml:"5px"}}>Note: Additional charges will be applicable for reverse QC service.</Typography>
                 </Grid>
               </Grid>

             
               <Grid item xs={12} sx={{borderBottom:"1px solid #e0e0e0"}} mt="20px"></Grid>
            </Grid>

            <Grid item container xs={12} mt="20px">
                  <Grid item xs={12} mb="20px">
                    <Typography sx={{fontWeight:"800",color:"#303f9f"}}>Customer Details:</Typography>
                  </Grid>
                  <Grid xs={12} sm={12} md={5.5} m="10px" >
                    <Typography sx={{fontWeight:"600",color:"#303f9f"}}><span style={{color:"red"}}>*</span>Name</Typography>
                    <OutlinedInput sx={{height:"40px"}} placeholder='Enter Cutomer name' fullWidth/>
                  </Grid>
                  <Grid xs={12} sm={12} md={5.5} m="10px" >
                    <Typography sx={{fontWeight:"600",color:"#303f9f"}}><span style={{color:"red"}}>*</span>Phone Number</Typography>
                    <OutlinedInput sx={{height:"40px"}} placeholder='Enter Cutomer Phone Number' fullWidth/>
                  </Grid>
                  <Grid xs={12} sm={12} md={5.5} m="10px" >
                    <Typography sx={{fontWeight:"600",color:"#303f9f"}}><span style={{color:"red"}}>*</span>Cutomer Email ID</Typography>
                    <OutlinedInput sx={{height:"40px"}} placeholder='Enter Cutomer Email ID' fullWidth/>
                  </Grid>
                  <Grid xs={12} sm={12} md={5.5} m="10px" >
                    <Typography sx={{fontWeight:"600",color:"#303f9f"}}><span style={{color:"red"}}>*</span>Cutomer Pincode</Typography>
                    <OutlinedInput sx={{height:"40px"}} placeholder='Enter Cutomer  Pincode' fullWidth/>
                  </Grid>

                  <Grid xs={11.25} m="10px" >
                    <Typography sx={{fontWeight:"600",color:"#303f9f"}}><span style={{color:"red"}}>*</span>Cutomer Cutomer</Typography>
                    <TextareaAutosize minRows={4} minLength="50" placeholder='Enter complete address' />
                  </Grid>

                  <Grid item xs={12} mt="20px">
                    <Button  sx={{color:"#303f9f",bgcolor:"#9fa8da",fontWeight:"600","&:hover": { backgroundColor: "#9fa8da" } }}>+ &nbsp;Add Additional details</Button>
                  </Grid>
                  <Grid item xs={12} sx={{borderBottom:"1px solid #e0e0e0"}} mt="20px"></Grid>

                  <Grid item xs={12} mt="20px">
                  <Typography sx={{fontWeight:"600",color:"#303f9f"}}>Shipment Type</Typography>

                  <FormControl>
                   <RadioGroup
                      row
                      aria-labelledby="demo-form-control-label-placement"
                      name="position"
                      defaultValue="top"
                      >
                    <FormControlLabel value="1" control={<Radio color='error'/>} label="Express" sx={{color:"#303f9f",fontWeight:"700"}}/>
                    <FormControlLabel value="2" control={<Radio color='error'/>} label="Heavy" sx={{color:"#303f9f",fontWeight:"700"}}/>
                    <FormControlLabel value="3" control={<Radio color='error'/>} label="Dangerous Goods" sx={{color:"#303f9f",fontWeight:"700"}}/>
                    <FormControlLabel value="4" control={<Radio color='error'/>} label="Document" sx={{color:"#303f9f",fontWeight:"700"}}/>

                    </RadioGroup>
                  </FormControl>
                  </Grid>


                    {
                      radioShow==true? <Grid item xs={12}>
                      <Box sx={{display:"flex",alignItems:"center"}}>
                      <Typography sx={{fontWeight:"600",color:"#303f9f",mr:"20px"}}>Shipment Type</Typography>
                      <FormControl>
                     <RadioGroup
                        row
                        aria-labelledby="demo-form-control-label-placement"
                        name="position"
                        defaultValue="top"
                        >
                      <FormControlLabel value="radio1" control={<Radio />} label="Yes" sx={{color:"#303f9f",fontWeight:"700"}}/>
                      <FormControlLabel value="radio2" control={<Radio />} label="No" sx={{color:"#303f9f",fontWeight:"700"}}/>
                      </RadioGroup>
                    </FormControl>
                      </Box>
                      <Box sx={{display:"flex",alignItems:"center"}}>
                          <Checkbox sx={{p:"0px"}}/>
                          <Typography sx={{fontWeight:"600",color:"#303f9f"}}>Shipment placement in local language</Typography>
                      </Box>
                    </Grid>:""
                    }
                 
            </Grid>
         </Grid>



         <Grid item container xs={12} sm={12} md={3.7} lg={3.7} sx={{bgcolor:"white",borderRadius:"13px",mt:"15px"}}>
         
         <Grid item container xs={12} sx={{bgcolor:"white",borderRadius:"13px",mt:"15px",height:"fit-content",p:"15px"}}>
              <Grid item xs={6}>
                <Typography sx={{fontWeight:"800",color:"#303f9f"}} >Single Shipment</Typography>
              </Grid>
              <Grid item xs={6} sx={{display:"flex",justifyContent:"flex-end"}}>
                <Button  sx={{color:"white",bgcolor:"#303f9f",fontWeight:"600","&:hover": { backgroundColor: "#9fa8da" } }}>+ &nbsp;ADD</Button>
              </Grid>
              <Grid item xs={12} mt="20px">
                <Box>
                  <OutlinedInput fullWidth/>
                </Box>
            </Grid>

            <Grid item xs={12} mt="20px">
            <Typography sx={{fontWeight:"800",color:"#303f9f",mr:"20px"}}>Default and recent locations</Typography>
            </Grid>
            </Grid>
            

         </Grid>

        </Grid>


         <Grid item xs={12} container sx={{bgcolor:"white",borderRadius:"13px",display:"flex",justifyContent:"space-between",mt:"20px",p:"8px"}}>

            <Grid item   sx={{p:"10px"}}>
               <Button sx={{border:"1px solid #303f9f"}}>Reset</Button>
            </Grid>

            
            <Grid item  sx={{p:"10px"}}>
             <Button sx={{border:"1px solid #e0e0e0",color:"#303f9f"}} disabled>Next<NavigateNextIcon/></Button>
            </Grid>
         </Grid>
          

          <Grid item xs={12} mt="20px" >
            <Typography align='center'>Pickrr Technologies Pvt. Ltd. All Rights Reserved ©2022</Typography>
          </Grid>

          <Box sx={{position:"fixed", right:"20px",bottom:"40px",width:"fit-content",bgcolor:"#303f9f",borderRadius:"17px 5px 25px 17px"}}>
            <IconButton sx={{color:"white",display:"flex",alignItems:"center"}}>
                <HelpOutlineIcon/><Typography>Need Help</Typography>
            </IconButton>
          </Box>
      </Box>
    </>
  );
}

export default CreateShipment;
