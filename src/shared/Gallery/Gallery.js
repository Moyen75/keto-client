import React from 'react';
import useGallery from '../../hooks/useGallery';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import '../../Style/Style.css'

const Gallery = () => {
    const gallery = useGallery()
    return (
        <Box sx={{ marginTop: '10px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography sx={{ textAlign: 'center' }} className='about-header' variant='h3'>
                    Gallery
                </Typography>
            </Box>
            <Container>
                <Grid container spacing={2} sx={{ marginTop: '20px' }}>
                    {gallery?.map(room => <Grid xs={12} md={3} item>
                        <Box sx={{ marginTop: '5px' }}>
                            <Box className='card-img'>
                                <img style={{ width: '100%' }} src={room.img} alt="" />
                            </Box>
                        </Box>
                    </Grid>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default Gallery;