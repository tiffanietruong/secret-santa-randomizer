import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import './YearCard.css';

const YearCard = (props) => {
    const { year } = props;

    return (
        <Link to={`/year/${year}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ width: 300, height: 300 }}>
                <Box sx={{ position: 'relative' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            width="300"
                            image={require(`./photos/${year}.jpg`)}
                            alt="christmas gifts"
                        />
                        <div className='year-container'>
                            <p className='year'>{year}</p>
                        </div>
                    </CardActionArea>
                </Box>
            </Card>
        </Link>
    );
}

export default YearCard;