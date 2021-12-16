import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useData from '../../../hooks/useData';

const Rooms = () => {
    const rooms = useData()
    return (
        <Box className="rooms">
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                <Typography sx={{ textAlign: 'center' }} className='about-header' variant='h3'>
                    Our Rooms
                </Typography>
            </Box>
            <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Container>
                <Grid container spacing={2} className='card-container'>
                    {rooms?.map(room => <Grid xs={12} md={4} item>
                        <Box className='card'>
                            <Box className='card-img'>
                                <img style={{ width: '100%' }} src={room.img} alt="" />
                            </Box>
                            <Typography variant='h3'>
                                {room.title}
                            </Typography>
                            <Typography sx={{ textAlign: 'justify' }}>
                                {room.description}
                            </Typography>
                        </Box>
                    </Grid>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default Rooms;