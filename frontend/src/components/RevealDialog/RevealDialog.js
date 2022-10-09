import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

// TODO: add security even though none of the uniren would or know how to use frontend dev tools :) 
const RevealDialog = (props) => {
    const { year, secretSanta, isDialogOpen, setIsDialogOpen, setSecretSantee, setIsRevealed } = props;

    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState("");

    const handleClose = () => {
        setError(false);
        setErrorText("");
        setInput("");
        setIsDialogOpen(false);
    };

    const handleReveal = () => {
        // TODO: get reveal passcode from database
        const revealPassword = "abc";
        if (revealPassword === input) {
            // TODO: get person from database
            const secretSantee = "PLACEHOLDER";
            console.log(`matched ${revealPassword}`);
            setIsRevealed(true);
            setSecretSantee(secretSantee);
            handleClose();
        }
        else {
            setError(true);
            setErrorText("Sorry, this reveal password is incorrect.");
        }
    }

    return (
        <div>
            <Dialog open={isDialogOpen} onClose={handleClose}>
                <DialogTitle color='error'>{secretSanta}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To reveal {secretSanta}'s Secret Santa person for {year}, please enter the appropriate reveal password here.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin='dense'
                        id='name'
                        label='Password'
                        type='password'
                        fullWidth
                        variant='standard'
                        color='success'
                        error={error}
                        helperText={errorText}
                        onChange={(e) => { setInput(e.target.value); }}
                        onKeyPress={(e) => { if (e.key === 'Enter') { handleReveal(); e.preventDefault(); }}}
                        value={input}
                    />
                </DialogContent>
                <DialogActions>
                    <Button color='success' onClick={handleClose}>Cancel</Button>
                    <Button color='success' onClick={handleReveal}>Reveal</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default RevealDialog;
