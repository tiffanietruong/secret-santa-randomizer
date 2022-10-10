import React, { useState } from 'react';
import axios from 'axios';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

// TODO: add security even though none of the uniren would or know how to use frontend dev tools :) 
const ResetDialog = () => {
    const [uniRenegade, setUniRenegade] = useState('Clover');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);

    const handleClickOpen = () => {
        setUniRenegade('Clover');
        setOldPassword('');
        setNewPassword('');
        setError(false);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleReset = () => {
        // Get reveal password from database and check for match
        axios({
            method: 'get',
            url: `http://localhost:5000/api/user/${uniRenegade}`
        })
            .then((res) => {
                if (res.status === 200) {
                    // Reveal passsword matches -- patc hnew password
                    if (oldPassword === res.data.password) {
                        axios({
                            method: 'patch',
                            url: `http://localhost:5000/api/user`,
                            data: { "name": uniRenegade, "oldPassword": oldPassword, "newPassword": newPassword },
                        })
                            .then((res) => {
                                if (res.status === 200) {
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
            <Button
                variant='outlined'
                color='inherit'
                onClick={() => { handleClickOpen(); }}
                sx={{ mt: 3 }}
            >
                RESET YOUR REVEAL PASSWORD
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle color='error'>Reset</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter the following information.
                    </DialogContentText>
                    <FormControl>
                        <FormLabel color='success' id='uni-renegade-radio-buttons-group-label' sx={{ mt: 2 }}>Uni Renegade</FormLabel>
                        <RadioGroup
                            row
                            name='row-radio-buttons-group'
                            defaultValue='Clover'
                        >
                            <FormControlLabel value='Clover' control={<Radio onChange={() => { setUniRenegade('Clover') }} />} label='Clover' />
                            <FormControlLabel value='Isaac' control={<Radio onChange={() => { setUniRenegade('Isaac') }} />} label='Isaac' />
                            <FormControlLabel value='Joey' control={<Radio onChange={() => { setUniRenegade('Joey') }} />} label='Joey' />
                            <FormControlLabel value='Julia' control={<Radio onChange={() => { setUniRenegade('Julia') }} />} label='Julia' />
                            <FormControlLabel value='Natalie' control={<Radio onChange={() => { setUniRenegade('Natalie') }} />} label='Natalie' />
                            <FormControlLabel value='Tiffanie' control={<Radio onChange={() => { setUniRenegade('Tiffanie') }} />} label='Tiffanie' />
                            <FormControlLabel value='Tiffany' control={<Radio onChange={() => { setUniRenegade('Tiffany') }} />} label='Tiffany' />
                            <FormControlLabel value='Vanessa' control={<Radio onChange={() => { setUniRenegade('Vanessa') }} />} label='Vanessa' />
                        </RadioGroup>
                    </FormControl>
                    <TextField
                        autoFocus
                        margin='dense'
                        label='Old Password'
                        type='password'
                        fullWidth
                        variant='standard'
                        color='success'
                        onChange={(e) => { setOldPassword(e.target.value); }}
                        value={oldPassword}
                        error={error}
                        helperText={error && "Sorry, this old password is incorrect."}
                    />
                    <TextField
                        autoFocus
                        margin='dense'
                        label='New Password'
                        type='password'
                        fullWidth
                        variant='standard'
                        color='success'
                        onChange={(e) => { setNewPassword(e.target.value); }}
                        value={newPassword}
                    />
                </DialogContent>
                <DialogActions>
                    <Button color='success' onClick={handleClose}>Cancel</Button>
                    <Button color='success' onClick={handleReset}>Reset</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ResetDialog;
