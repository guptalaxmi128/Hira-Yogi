import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AllStudent from './allstudent/AllStudent';
import NewStudent from './newstudent/NewStudent';
import Course from "./course/Course";

import { useSelector } from 'react-redux';
import User from './user/User';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

const Student = () => {
    // const students=useSelector(state=>state.student.students);
    const [value, setValue] = useState(0);
    // console.log("students",students)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: '100%',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderRadius: 2,
                borderColor: theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey.A800,
                boxShadow: 'inherit',
                ':hover': {
                    boxShadow: 'inherit'
                },
                '& pre': {
                    m: 0,
                    p: '16px !important',
                    fontFamily: theme.typography.fontFamily,
                    fontSize: '0.75rem'
                }
            }}
        >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    aria-label="scrollable auto tabs example"
                    sx={{
                        '& .MuiTabs-indicator': {
                            bgcolor: value === 0 ? '#EC6E46' : value === 1 ? '#EC6E46' : value === 2 ? '#EC6E46' : value === 3 ?'#EC6E46' : '#000'
                        }
                    }}
                >
                    <Tab
                        label="New Student"
                        style={{
                            color: value === 0 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(0)}
                    />
                    <Tab
                        label="All Student"
                        style={{
                            color: value === 1 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(1)}
                    />
                    <Tab
                        label="Course"
                        style={{
                            color: value === 2 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(2)}
                    />
                       <Tab
                        label="User"
                        style={{
                            color: value === 3 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(3)}
                    />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <NewStudent
                // students={students}
                />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AllStudent
                //  students={students}
                />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Course />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <User />
            </TabPanel>
        </Box>
    );
};

export default Student;
