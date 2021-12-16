import React from 'react';
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3.jpg'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        imgPath: banner1
    },
    {
        imgPath: banner2
    },
    {
        imgPath: banner3
    }
]
const Banner = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 3;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <Box className='banner-cover'>
            <Box sx={{ flexGrow: 1 }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        pl: 2,
                        objectFit: 'cover',
                        bgcolor: 'background.default',
                    }}
                >
                    <Typography>{images[activeStep].label}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="img"
                                    sx={{
                                        display: 'block',
                                        overflow: 'hidden',
                                        width: '100%',
                                        minHeight: '500px'
                                    }}
                                    src={step.imgPath}
                                />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </Box>
            <Box className='book-box'>
                <h1>Book A Room Online</h1>
                <Box sx={{ margin: '5px' }}>
                    <Typography sx={{ textAlign: 'left', marginLeft: '15px' }}>
                        Arrival
                    </Typography>
                    <label>
                        <input type="text" placeholder='mm/date/year' sx={{ width: '' }} name="date" id="date" />
                    </label>
                </Box>
                <Box sx={{ margin: '5px' }}>
                    <Typography sx={{ textAlign: 'left', marginLeft: '15px' }}>
                        Departure
                    </Typography>
                    <label>
                        <input placeholder='mm/date/year' type="text" sx={{ width: '' }} name="date" id="date" />
                    </label>
                </Box>
                <button className='book-button'>Book Now</button>
            </Box>
        </Box>
    );
};

export default Banner;