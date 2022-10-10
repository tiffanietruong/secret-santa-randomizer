import React from 'react';
import { Box, Card, CardActionArea, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

import './CustomCard.css';

const CustomCard = (props) => {
    const { cardContent } = props;

    let cardImage;
    try {
        cardImage = require(`./photos/${cardContent}.jpg`)
    }
    catch (e) {
        console.log(`Failed to find image for card with content ${cardContent}.`);
    }

    // TODO: make stats page with to={cardContent.toLowerCase()}
    return (
        <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Card sx={{ width: 300, height: 300 }}>
                <Box sx={{ position: 'relative' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            width="300"
                            image={cardImage}
                            alt={"image for " + cardContent}
                        />
                        <div className='container'>
                            <p className='container-content'>{cardContent}</p>
                        </div>
                    </CardActionArea>
                </Box>
            </Card>
        </Link>
    );
}

export default CustomCard;