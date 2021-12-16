import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Contact = () => {
    return (
        <Box sx={{ marginTop: '50px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                <Typography sx={{ textAlign: 'center' }} className='about-header' variant='h3'>
                    CONTACT
                </Typography>
            </Box>
            <Grid container spacing={2} sx={{ marginTop: '10px' }}>
                <Grid item xs={12} md={6}>
                    {/* <form id="contactform" action="https://formsubmit.io/send/moyenislam75@gmail.com" method="POST">
                        <TextField variant='outlined' id="outlined-basic" style={{ width: '75%', padding: '5px', margin: '2px' }} type="text" label='Name' name="name" required />
                        <TextField variant='outlined' id="outlined-basic" style={{ width: '75%', padding: '5px', margin: '2px' }} type="email" label='E-mail' name="email" required />
                        <TextField variant='outlined' id="outlined-basic" style={{ width: '75%', padding: '5px', margin: '2px' }} type="text" name="call" label='Phone Number' required />
                        <TextField  style={{ width: '75%', padding: '5px', margin: '2px' }} name="message" id="" label='Message' cols="30" rows="10"></TextField >
                        <TextField variant='outlined' id="outlined-basic" name="_formsubmit_id" type="text" style={{ display: 'none' }} />

                        <TextField variant='outlined' id="outlined-basic" style={{ width: '50%', padding: '5px', margin: '2px' }} value="Submit" type="submit" />
                    </form> */}
                    <form id="contactform" action="https://formsubmit.io/send/moyenislam75@gmail.com" method="POST">
                        <TextField variant='outlined' id="outlined-basic" style={{ width: '75%', padding: '5px', margin: '2px' }} type="text" label='Name' name="name" required />
                        <TextField variant='outlined' id="outlined-basic" style={{ width: '75%', padding: '5px', margin: '2px' }} type="email" label='E-mail' name="email" required />
                        <TextField variant='outlined' id="outlined-basic" style={{ width: '75%', padding: '5px', margin: '2px' }} type="text" name="call" label='Phone Number' required />
                        <TextField multiline
                            rows={4} id="outlined-basic" variant="outlined"  style={{ width: '75%', padding: '5px', margin: '2px' }} name="message" id="" placeholder='Message' cols="30" rows="10"></TextField >
                        <TextField variant='outlined' id="outlined-basic" name="_formsubmit_id" type="text" style={{ display: 'none' }} />

                        <input className='contact-button' style={{ width: '35%', margin: '2px' }} value="SEND" type="submit" />
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116190.95249594288!2d89.43575581393495!3d24.486591031311846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdc84a3efb0379%3A0x770ae346cc8b4ae!2sRaiganj%20Upazila!5e0!3m2!1sen!2sbd!4v1639143829050!5m2!1sen!2sbd" width="600" height="450" style={{ border: 0 }} allowfullscreen="" title='moyen' loading="lazy"></iframe>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;