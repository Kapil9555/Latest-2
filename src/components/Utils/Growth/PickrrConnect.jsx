import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import CircleIcon from "@mui/icons-material/Circle";

const PickrrConnect = () => {

  return (
    <>
      <Grid container p="20px" bgcolor="#f5f5f5">
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography sx={{ color: "#303f9f", fontWeight: "700" }}>
            PICKRR CONNECT
          </Typography>
          <Typography sx={{ color: "#303f9f", fontWeight: "700" }}>
            PICKRR PLUS
          </Typography>
          <Typography sx={{ color: "#303f9f", fontWeight: "700" }}>
            BRANDED TRACKING PAGE
          </Typography>
          <Typography sx={{ color: "#303f9f", fontWeight: "700" }}>
            ROCKETBOX
          </Typography>
          <Typography sx={{ color: "#303f9f", fontWeight: "700" }}>
            RUSH
          </Typography>
        </Grid>
        <Grid item xs={12} mt="15px">
          <Box
            sx={{
              bgcolor: "rgb(25, 139, 251)",
              borderRadius: "7px",
              p: "10px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: "600",
                color: "white",
              }}
            >
              <InfoIcon sx={{ mr: "7px", color: "white" }} /> Your coin balance
              is low. Please recharge your Pickrr Connect Wallet to continue
              sending notifications to your customers.
            </Typography>
            <Typography variant="body2" sx={{ ml: "30px", color: "white" }}>
              We will continue sending notifications for your activated free
              events. Low coin balance only stops notifications on non-free
              events.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          xs={12}
          p="15px"
          bgcolor="white"
          sx={{ borderRadius: "10px", mt: "15px" }}
        >
          <Grid item xs={3}>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#9fa8da",
                fontWeight: "600",
                fontSize: "17px",
              }}
            >
              <CircleIcon sx={{ color: "#ffab00", mr: "7px" }} /> AVAILABLE
              COINS
            </Typography>
            <Typography
              sx={{
                color: "#303f9f",
                fontWeight: "900",
                fontSize: "20px",
                ml: "27px",
              }}
            >
              0
            </Typography>
          </Grid>
          <Grid item container xs={12} md={9} sx={{ justifyContent: "right" }}>
            <Grid item xs={12} md={3}>
              <Button
                sx={{
                  bgcolor: "#e8eaf6",
                  color: "rgb(38, 63, 151)",
                  fontWeight: "700",
                  p: "12px",
                }}
                disableRipple
              >
                Notification history
              </Button>
            </Grid>
            <Grid item xs={12} md={3}>
              <Button
                sx={{
                  bgcolor: "rgb(255, 117, 108) ",
                  color: "white",
                  p: "12px",
                }}
              >
                recharge connect wallet
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12} spacing={2} mt="10px">
          <Grid item xs={4}>
            <Box sx={{ bgcolor: "white", p: "15px", borderRadius: "10px" }}>
              <Typography variant="body2" color="#9e9e9e" fontWeight="600">
                Coins Consumed This Month
              </Typography>
              <Typography
                sx={{ color: "#303f9f", fontWeight: "900", fontSize: "20px" }}
              >
                0.00
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ bgcolor: "white", p: "15px", borderRadius: "10px" }}>
              <Typography variant="body2" color="#9e9e9e" fontWeight="600">
                SMS This Month
              </Typography>
              <Typography
                sx={{ color: "#303f9f", fontWeight: "900", fontSize: "20px" }}
              >
                0
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ bgcolor: "white", p: "15px", borderRadius: "10px" }}>
              <Typography variant="body2" color="#9e9e9e" fontWeight="600">
                Whatsapp This Month
              </Typography>
              <Typography
                sx={{ color: "#303f9f", fontWeight: "900", fontSize: "20px" }}
              >
                0
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container xs={12}>
          <Grid item container xs={12} lg={8} sx={{ bgcolor: "white" }}>
            <Grid
              item
              xs={12}
              sx={{
                bgcolor: "#303f9f",
                display: "flex",
                justifyContent: "space-between",
                p: "15px",
                borderRadius: "10px 10px 0px 0px",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: "600", color: "White" }}
              >
                Please enter your brand name which will be displayed to your
                customers
              </Typography>
              <Typography>
                <a href="#" style={{ fontWeight: "600", color: "White" }}>
                  Enter Brand name
                </a>
              </Typography>
            </Grid>
            <Grid item container xs={12}>
              {/* table headerSection */}
              <Grid item container xs={12} p="20px">
                <Grid item xs={4}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#9fa8da",
                      fontWeight: "600",
                      fontSize: "17px",
                    }}
                  >
                    COMMUNICATION EVENT
                  </Typography>
                </Grid>

                <Grid item xs={4}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#9fa8da",
                      fontWeight: "600",
                      fontSize: "17px",
                    }}
                  >
                    NOTIFICATION CHANNEL
                  </Typography>
                </Grid>

                <Grid item xs={4}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#9fa8da",
                      fontWeight: "600",
                      fontSize: "17px",
                    }}
                  >
                    TEMPLATE PREVIEW
                  </Typography>
                </Grid>
              </Grid>

              {/* Table body */}
              <Grid item container xs={12} p="20px" sx={{}}>
                <Grid item xs={3}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#5c6bc0",
                      fontSize: "17px",
                    }}
                  >
                    order placed
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="SMS"
                        labelPlacement="end"
                      />

                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="WhatsApp"
                        labelPlacement="end"
                      />

                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="Email"
                        labelPlacement="end"
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "17px",
                      fontWeight: "700",
                      fontSize: "15px",
                      color: "rgb(38, 63, 151)",
                      bgcolor: "#e8eaf6",
                    }}
                  >
                    VIEW TEMPLATE
                  </Button>
                </Grid>
              </Grid>


              <Grid item container xs={12} p="20px" sx={{}}>
                <Grid item xs={3}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#5c6bc0",
                      fontSize: "17px",
                    }}
                  >
                    order placed
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="SMS"
                        labelPlacement="end"
                      />

                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="WhatsApp"
                        labelPlacement="end"
                      />

                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="Email"
                        labelPlacement="end"
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "17px",
                      fontWeight: "700",
                      fontSize: "15px",
                      color: "rgb(38, 63, 151)",
                      bgcolor: "#e8eaf6",
                    }}
                  >
                    VIEW TEMPLATE
                  </Button>
                </Grid>
              </Grid>


              <Grid item container xs={12} p="20px" sx={{}}>
                <Grid item xs={3}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#5c6bc0",
                      fontSize: "17px",
                    }}
                  >
                    order placed
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="SMS"
                        labelPlacement="end"
                      />

                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="WhatsApp"
                        labelPlacement="end"
                      />

                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="Email"
                        labelPlacement="end"
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "17px",
                      fontWeight: "700",
                      fontSize: "15px",
                      color: "rgb(38, 63, 151)",
                      bgcolor: "#e8eaf6",
                    }}
                  >
                    VIEW TEMPLATE
                  </Button>
                </Grid>
              </Grid>


              <Grid item container xs={12} p="20px" sx={{}}>
                <Grid item xs={3}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#5c6bc0",
                      fontSize: "17px",
                    }}
                  >
                    order placed
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="SMS"
                        labelPlacement="end"
                      />

                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="WhatsApp"
                        labelPlacement="end"
                      />

                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="Email"
                        labelPlacement="end"
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "17px",
                      fontWeight: "700",
                      fontSize: "15px",
                      color: "rgb(38, 63, 151)",
                      bgcolor: "#e8eaf6",
                    }}
                  >
                    VIEW TEMPLATE
                  </Button>
                </Grid>
              </Grid>


              <Grid item container xs={12} p="20px" sx={{}}>
                <Grid item xs={3}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#5c6bc0",
                      fontSize: "17px",
                    }}
                  >
                    order placed
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="SMS"
                        labelPlacement="end"
                      />

                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="WhatsApp"
                        labelPlacement="end"
                      />

                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="Email"
                        labelPlacement="end"
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "17px",
                      fontWeight: "700",
                      fontSize: "15px",
                      color: "rgb(38, 63, 151)",
                      bgcolor: "#e8eaf6",
                    }}
                  >
                    VIEW TEMPLATE
                  </Button>
                </Grid>
              </Grid>


              <Grid item container xs={12} p="20px" sx={{}}>
                <Grid item xs={3}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#5c6bc0",
                      fontSize: "17px",
                    }}
                  >
                    order placed
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="SMS"
                        labelPlacement="end"
                      />

                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="WhatsApp"
                        labelPlacement="end"
                      />

                      <FormControlLabel
                        sx={{ color: "#303f9f", fontSize: "15px" }}
                        value="end"
                        control={<Checkbox />}
                        label="Email"
                        labelPlacement="end"
                      />
                    </FormGroup>
                  </FormControl>
                </Grid>

                <Grid item xs={3}>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "17px",
                      fontWeight: "700",
                      fontSize: "15px",
                      color: "rgb(38, 63, 151)",
                      bgcolor: "#e8eaf6",
                    }}
                  >
                    VIEW TEMPLATE
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container xs={12} lg={4} sx={{bgcolor:"white",borderRadius:"10px",border:"1px solid black",overflow:"hidden"}}>
            <Grid item xs={12} sx={{display:"flex",height:"fit-content"}}>
            <Typography
                    sx={{
                      display:"flex",alignItems:"center",
                     border:"1px solid red",
                     width:"50%",
                      fontWeight: "800",
                      fontSize: "15px",
                      color: "rgb(38, 63, 151)",
                      p:"10px"
                    }}
                  >
                  Estimated coins consumed per order
                  </Typography>

                  <Typography
                  
                    sx={{
                      display:"flex",alignItems:"center",justifyContent:"flex-end",
                        border:"1px solid red",
                        width:"50%",
                      fontWeight: "700",
                      fontSize: "23px",
                      color: "rgb(255, 117, 108)",
                      p:"10px"
                    }}
                  >
                 0
                  </Typography>
            </Grid>

            <Divider  sx={{border:"1px solid #bdbdbd",width:"100%"}}/>
            <Grid item xs={12} sx={{border:"1px solid red",height:"fit-content"}}>
            <Typography
                sx={{ color: "#303f9f", fontWeight: "900", fontSize: "15px" }}
              >
                How it's charged
              </Typography>
            </Grid>
            <Grid item container sx={{height:"fit-content",border:"1px solid red"}}>
              <Grid item xs={6}>
                <Typography sx={{color:"#9fa8da",fontSize:"15px"}}>Coins per Sms</Typography>
                <Typography sx={{color:"#9fa8da",fontSize:"15px"}}>Coins per Whatsapp</Typography>
                <Typography sx={{color:"#9fa8da",fontSize:"15px"}}>Coins per Email</Typography>

              </Grid>
              <Grid item xs={6}>
                <Typography sx={{ color: "#5c6bc0",fontSize:"15px"}}>0.18  Coins</Typography>
                <Typography sx={{ color: "#5c6bc0",fontSize:"15px"}}>0.95  Coins</Typography>
                <Typography sx={{ color: "#5c6bc0",fontSize:"15px"}}>0  Coins</Typography>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PickrrConnect;
