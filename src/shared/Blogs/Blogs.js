import React from 'react';
import useBlogs from '../../hooks/useBlogs';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import '../../Style/Style.css'

const Blogs = () => {
    const blogs = useBlogs()
    return (
        <Box className="blogs">
            <Box sx={{ display: 'flex', justifyContent: 'center', color: 'white' }}>

                <Typography sx={{ textAlign: 'center' }} className='about-header' variant='h3'>
                    BLOG
                </Typography>
            </Box>
            <Typography sx={{ color: 'white' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Container>
                <Grid container spacing={2} className='card-container'>
                    {blogs?.map(room => <Grid xs={12} md={4} item>
                        <Box className=' card ' sx={{ padding: '0' }}>
                            <Box className='card-img'>
                                <img style={{ width: '100%' }} src={room.img} alt="" />
                            </Box>
                            <Box sx={{ textAlign: 'left' }} className='blog-card card'>
                                <Typography variant='h5'>
                                    Bed Room
                                </Typography>
                                <Typography sx={{ color: "tomato" }}>
                                    The standard chunk
                                </Typography>
                                <Typography>
                                    {room.description}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default Blogs;