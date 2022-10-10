import React, { useState } from 'react';
import axios from 'axios';
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
        // Get reveal password from database and check for match
        axios({
            method: 'get',
            url: `http://localhost:5000/api/user/${secretSanta}`
        })
            .then((res) => {
                if (res.status === 200) {
                    // Reveal passsword matches -- get secret santee 
                    if (input == res.data.password) {
                        axios({
                            method: 'get',
                            url: `http://localhost:5000/api/pairing`,
                            params: { "year": year, "santa": secretSanta },
                            responseType: 'json'
                        })
                            .then((res) => {
                                if (res.status === 200) {
                                    setIsRevealed(true);
                                    setSecretSantee(res.data.santee);
                                    handleClose();
                                }
                                else {
                                    console.log(res.error);
                                }
                            });
                    }
                    // Reveal password did not match -- show error
                    else {
                        setError(true);
                        setErrorText("Sorry, this reveal password is incorrect.");
                    }
                }
                // HTTP request returned with error
                else {
                    console.log(res.error);
                }
            });
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
                        onKeyPress={(e) => { if (e.key === 'Enter') { handleReveal(); e.preventDefault(); } }}
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
