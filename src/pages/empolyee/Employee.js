import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useSelector } from 'react-redux';
import NewEmployee from './newemployee/NewEmployee';
import List from './list/List';
import RestoreEmployee from './restoreemployee/RestoreEmployee';

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

const Employee = () => {
    const employee=useSelector((state)=>state.employee.employee || []);
    const deletedEmployee=useSelector((state)=>state.employee.deletedEmployee || []);
    // console.log(employee)
    // console.log(deletedEmployee)
    const [value, setValue] = useState(0);

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
                            bgcolor: value === 0 ? '#EC6E46' : value === 1 ? '#EC6E46'  : value === 2 ? '#EC6E46'  : '#000'
                        }
                    }}
                >
                    <Tab
                        label="Add New Employee"
                        style={{
                            color: value === 0 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(0)}
                    />
                    <Tab
                        label="List"
                        style={{
                            color: value === 1 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(1)}
                    />
                       <Tab
                        label="Restore Employee"
                        style={{
                            color: value === 2 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(1)}
                    />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
               <NewEmployee />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <List employee={employee} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <RestoreEmployee deletedEmployee={deletedEmployee} />
            </TabPanel>
        </Box>
    );
};

export default Employee;
