import { Divider, Grid, Typography } from '@mui/material'
import React from 'react'

const Faqmain = () => {

    const mainApi = [
        {
            maintitle: "Knowledge base",
            innerBox1: [
                {
                    subtitle: "General Enquiry1",
                    innersecond: [
                        {
                            title: "Pickrr Customer Support 1",
                            questions: [
                                "How to raise an issue?",
                                "How to raise an issue?",
                                "How to raise an issue?",
                                "How to raise an issue?",
                                "How to raise an issue?"
                            ]
                        },

                        {
                            title: "Packaging ",
                            questions: [
                                "How to raise an issue?",
                                "How to raise an issue?",
                                "How to raise an issue?",
                                "How to raise an issue?",
                                "How to raise an issue?"
                            ]
                        },

                        {
                            title: "Shipping Zones ",
                            questions: [
                                "How to raise an issue?",
                                "How to raise an issue?",
                                "How to raise an issue?",
                                "How to raise an issue?",
                                "How to raise an issue?"
                            ]
                        },
                        {
                            title: "Other Questions",
                            questions: [
                                "How to raise an issue?",
                                "How to raise an issue?",
                                "How to raise an issue?",
                                "How to raise an issue?",
                                "How to raise an issue?"
                            ]
                        },

                    ]

                },
                {
                    subtitle: "RTO",
                    innersecond: [
                        

                       

                        
                       

                    ]

                },
                {
                    subtitle: "Order",
                    innersecond: [
                        {
                            title: "Create Order ",
                            questions: [
                                "How to raise an issue?1",
                                "How to raise an issue?2",
                                "How to raise an issue?3",
                                "How to raise an issue?4",
                                "How to raise an issue?5"
                            ]
                        },
                        {
                            title: "Cancel Order",
                            questions: [
                                "How to raise an issue?1",
                                "How to raise an issue?2",
                                "How to raise an issue?3",
                                "How to raise an issue?4",
                                "How to raise an issue?5"
                            ]
                        },
                        {
                            title: "Order Tracking ",
                            questions: [
                                "How to raise an issue?1",
                                "How to raise an issue?2",
                                "How to raise an issue?3",
                                "How to raise an issue?4",
                                "How to raise an issue?5"
                            ]
                        },

                    ]

                },
            ]
        }
    ]
    console.log()

    return (
        <>
            <Grid container>
                {
                    mainApi.map((ele, index) => {
                        return (

                            <Grid item container>

                                <Grid item xs={12}>
                                    <Typography variant='h3'>{ele.maintitle}</Typography>
                                </Grid>

                                {
                                    ele.innerBox1.map((ele, i) => {
                                        return (
                                            <Grid item container sx={{ mt: "15px" }}>
                                                <Typography variant='h4' sx={{ color: "green" }}>{ele.subtitle}</Typography>
                                                <Divider sx={{ border: "1px solid green", width: "100%" }} />

                                                {
                                                    ele.innersecond.map((ele) => {
                                                        return (
                                                            <Grid item xs={4} sx={{ border: "1px solid gray" }}>
                                                                <Typography variant='h5'>{ele.title}</Typography>

                                                                {
                                                                    ele.questions.map((ele) => {
                                                                        return (
                                                                            <Typography>{ele}</Typography>
                                                                        )
                                                                    })
                                                                }



                                                            </Grid>
                                                        )
                                                    })
                                                }


                                            </Grid>
                                        )
                                    })
                                }

                            </Grid>

                        )
                    })
                }





            </Grid>
        </>
    )
}

export default Faqmain