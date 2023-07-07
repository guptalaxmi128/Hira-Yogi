import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSelector} from 'react-redux';
import AddNew from './AddNew';
import List from './list/List';
import RestoreUser from './restoreUser/RestoreUser';

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

const Business = () => {
    const user = useSelector((state) => state.user.user || []);
    const deletedUser=useSelector((state)=>state.user.deletedUser || []);
    console.log(deletedUser)
  

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
                            bgcolor: value === 0 ? '#EC6E46' : value === 1 ? '#EC6E46' : value === 2 ? '#EC6E46': '#000'
                        }
                    }}
                >
                    <Tab
                        label="Add New User"
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
                        label="Restore User"
                        style={{
                            color: value === 2 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(1)}
                    />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <AddNew 
                //  user ={user}
                  />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <List user ={user} />
            </TabPanel>
            <TabPanel value={value} index={2}>
               <RestoreUser deletedUser={deletedUser} />
            </TabPanel>
        </Box>
    );
};

export default Business;
