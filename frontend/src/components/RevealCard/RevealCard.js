import React, { useState } from 'react';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import './RevealCard.css';

import RevealDialog from '../RevealDialog/RevealDialog';

const RevealCard = (props) => {
    const { year, secretSanta } = props;

    const [secretSantee, setSecretSantee] = useState("");
    const [isRevealed, setIsRevealed] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <div>
            <Card sx={{ minWidth: 275, maxWidth: 275, minHeight: 200, maxHeight: 200 }}>
                <CardContent>
                    <p className="red">{year}</p>
                    <h1>{secretSanta}</h1>
                    {isRevealed && <p className="reveal-card-reveal-text">Your Secret Santa person for {year} is <span className="green">{secretSantee}</span>! &#128154;</p>}
                </CardContent>
                <CardActions>
                    {!isRevealed &&
                        <Button
                            className="reveal-card-reveal-button"
                            size="small"
                            onClick={() => { setIsDialogOpen(true); }}
                            sx={{ color: 'success.main', mt: 4.5, ml: 1 }}
                        >
                            Reveal
                        </Button>}
                </CardActions>
            </Card>
            <RevealDialog
                year={year}
                secretSanta={secretSanta}
                isDialogOpen={isDialogOpen}
                setIsDialogOpen={setIsDialogOpen}
                setSecretSantee={setSecretSantee}
                setIsRevealed={setIsRevealed}
            >
            </RevealDialog>
        </div>
    );
}

export default RevealCard;