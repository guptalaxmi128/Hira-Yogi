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
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useDispatch, useSelector } from 'react-redux';
// import { addStudent } from 'actions/student/student';

const NewStudent = (props) => {
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    // const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (newValue) => {
        setValue(newValue);
    };

    const [student, setStudent] = useState({
        name: '',
        email: '',
        contactNumber: ''
    });

    const handleChange = (event) => {
        setStudent({ ...student, [event.target.name]: event.target.value });
    };

    const dispatch = useDispatch();

    const handleSubmit = () => {
        try {
            console.log(student);
            const formData = new FormData();
            formData.append('name', student.name);
            formData.append('email', student.email);
            formData.append('contactNumber', student.contactNumber);
            formData.append('date', value);
            // console.log(formData);
            dispatch(addStudent(formData));
            setStudentsTable([...studentsTable, formData]);
            setStudent({
                name: '',
                email: '',
                contactNumber: ''
            });
            setValue();
            alert('student submitted successfully');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        sx={{ mr: { sm: 1 } }}
                        type="text"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: { xs: 2, sm: 0 } }}
                        type="email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                    />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                        <DesktopDatePicker
                            fullWidth
                            label="Calendar"
                            inputFormat="MM/DD/YYYY"
                            value={value}
                            onChange={handleDateChange}
                            renderInput={(params) => <TextField {...params} sx={{ width: '100%', mr: 1 }} />}
                        />
                    </LocalizationProvider>
                    <TextField
                        label="Contact Number"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: { xs: 2, sm: 0 }, width: '100%' }}
                        type="number"
                        name="contactNumber"
                        value={student.contactNumber}
                        onChange={handleChange}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                    <TextField
                        label="Course Name"
                        variant="outlined"
                        fullWidth
                        sx={{ mr: { sm: 1 } }}
                        type="text"
                        name="coursename"
                        // value={student.name}
                        // onChange={handleChange}
                    />
                    <Box sx={{ width: '100%', ml: { sm: 1 } }} />
                </Box>
                <Box>
                    <Button variant="contained" type="submit" sx={{ background: '#EC6E46' }}>
                        Submit
                    </Button>
                </Box>
            </form>
        </>
    );
};

export default NewStudent;
