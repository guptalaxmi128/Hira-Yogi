import React, { useState } from 'react';
// import { Box, TextField, Button } from '@mui/material';
// material-ui
import {
    Typography,
    Box,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    OutlinedInput,
    Checkbox,
    ListItemText,
    Button,
    Stack
} from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from 'actions/employee/employee';

const NewEmployee = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [profile, setProfile] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = () => {
        try {
            const employee = {
                name: name,
                phoneNumber: phoneNumber,
                email: email,
                address: address,
                profile_position: profile
            };
            console.log(employee);
            dispatch(addEmployee(employee));
            setName('');
            setEmail('');
            setPhoneNumber('');
            setAddress('');
            setProfile('');
            alert('employee added successfully');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            {/* <form onSubmit={handleSubmit}> */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    sx={{ mr: { sm: 1 } }}
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    sx={{ mt: { xs: 2, sm: 0 } }}
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                    label="Mobile Number"
                    variant="outlined"
                    fullWidth
                    sx={{ mr: { sm: 1 } }}
                    type="number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <TextField
                    label="Address"
                    variant="outlined"
                    fullWidth
                    sx={{ mt: { xs: 2, sm: 0 } }}
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                    label="Profile / Position"
                    variant="outlined"
                    fullWidth
                    sx={{ mr: { sm: 1 } }}
                    type="text"
                    name="profile"
                    value={profile}
                    onChange={(e) => setProfile(e.target.value)}
                />
                <Box sx={{ width: '100%', ml: { sm: 1 } }} />
            </Box>
            <Box>
                <Button variant="contained" type="submit" sx={{ background: '#EC6E46 !important' }} onClick={()=>handleSubmit()}>
                    Submit
                </Button>
            </Box>
            {/* </form> */}
        </>
    );
};

export default NewEmployee;
