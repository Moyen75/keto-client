import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import aboutImg from '../../../images/about.png'
import '../../../Style/Style.css'

const About = () => {
    return (
        <Container sx={{ marginTop: '50px', marginBottom: '3px' }}>
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid xs={12} md={6} item>
                    <Typography className='about-header' variant='h3'>
                        About Us
                    </Typography>
                    <Typography className='text'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique delectus autem nam quod recusandae nihil error magnam laborum fugit nisi sit consequatur assumenda cum rerum impedit, quam, commodi eum earum. Dolorum doloribus impedit nisi velit at culpa neque fuga, quam cupiditate ex quod sit sint tempore. Nam, vel atque. Iure.
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', marginTop: '10px' }}>
                        <button className='read-more'>Read more</button>
                    </Box>
                </Grid>
                <Grid xs={12} md={6}>
                    <Box className='img'>
                        <img className='about-img' src={aboutImg} alt="" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;