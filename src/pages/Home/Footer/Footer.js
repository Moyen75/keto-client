import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box className='main-footer'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Typography variant='h4' className="footer-heading">
                            Contact us
                        </Typography>
                        <Typography sx={{ marginY: "4px" }}>
                            <i class="fas fa-map-marker-alt icon"></i> Address
                        </Typography>
                        <Typography sx={{ marginY: "4px" }}>
                            <i class="fas fa-mobile-alt icon"></i> +01 1234569540
                        </Typography>
                        <Typography sx={{ marginY: "4px" }}>
                            <i class="fas fa-envelope icon"></i> moyenulislam333@gmail.com
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant='h4' className="footer-heading">
                            Menu link
                        </Typography>
                        <Typography sx={{ marginY: "4px" }} >
                            <a className='footer-link' href="/">Home</a>
                        </Typography>
                        <Typography sx={{ marginY: "4px" }} >
                            <a className='footer-link' href="/">About</a>
                        </Typography>
                        <Typography sx={{ marginY: "4px" }} >
                            <a className='footer-link' href="/">Our Room</a>
                        </Typography>
                        <Typography sx={{ marginY: "4px" }} >
                            <a className='footer-link' href="/">Gallery</a>
                        </Typography>
                        <Typography sx={{ marginY: "4px" }} >
                            <a className='footer-link' href="/">Blog</a>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant='h4' className="footer-heading">
                            News letter
                        </Typography>
                        <Box sx={{ marginY: '6px' }}>
                            <form>
                                <input placeholder='Enter your Email here' type="text" style={{ width: "75%", padding: "20px", }} />
                                <button style={{ width: "35%", margin: '15px 0', padding: "20px", fontSize: "20px", color: 'tomato' }}>subscribe</button>
                            </form>
                        </Box>
                        
                        <Box>
                            <a href="/"><i class="fab fa-facebook-f icon-two"></i></a>
                            <a href="/"><i class="fab fa-twitter icon-two"></i></a>
                            <a href="/"><i class="fab fa-linkedin-in icon-two"></i></a>
                            <a href="/"><i class="fab fa-youtube icon-two"></i></a>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;