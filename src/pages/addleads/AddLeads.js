import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import Lead from './lead/Lead';
import Converted from './converted/Converted';
import Open from './open/Open';
import Replied from './replied/Replied';
import Opportunity from './opportunity/Opportunity';
import Quotation from './quotation/Quotation';
import LostQuotation from './lostquotation/LostQuotaion';
import Interested from './interested/Interested';
import DoNotContact from './donotcontact/DoNotContact';
import Form from './form/Form';
import NewLead from './newlead/NewLead';

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

const AddLeads = () => {
    const lead = useSelector((state) => state.lead.lead);
    // console.log(lead.data)
   
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
                            bgcolor:
                                value === 0
                                    ? '#EC6E46'
                                    : value === 1
                                    ? '#EC6E46'
                                    : value === 2
                                    ? '#EC6E46'
                                    : value === 3
                                    ? '#EC6E46'
                                    : value === 4
                                    ? '#EC6E46'
                                    : value === 5
                                    ? '#EC6E46'
                                    : value === 6
                                    ? '#EC6E46'
                                    : value === 7
                                    ? '#EC6E46'
                                    : value === 8
                                    ? '#EC6E46'
                                    : value === 9
                                    ? '#EC6E46'
                                    : value === 10
                                    ? '#EC6E46'
                                    : '#000'
                        }
                    }}
                >
                    <Tab
                        label="Add New Lead"
                        style={{
                            color: value === 0 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(0)}
                    />
                    <Tab
                        label="New Lead"
                        style={{
                            color: value === 1 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(0)}
                    />
                    <Tab
                        label="Lead"
                        style={{
                            color: value === 2 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(1)}
                    />
                    <Tab
                        label="Open"
                        style={{
                            color: value === 3 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(2)}
                    />
                    <Tab
                        label="Replied"
                        style={{
                            color: value === 4 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(3)}
                    />
                    <Tab
                        label="Opportunity"
                        style={{
                            color: value === 5 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(4)}
                    />
                    <Tab
                        label="Quotation"
                        style={{
                            color: value === 6 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(5)}
                    />
                    <Tab
                        label="Lost Quotation"
                        style={{
                            color: value === 7 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(6)}
                    />
                    <Tab
                        label="Interested"
                        style={{
                            color: value === 8 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(7)}
                    />
                    <Tab
                        label="Converted"
                        style={{
                            color: value === 9 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(8)}
                    />
                    <Tab
                        label="Do Not Contact"
                        style={{
                            color: value === 10 ? '#EC6E46' : '#000'
                        }}
                        {...a11yProps(9)}
                    />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Form />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <NewLead />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Lead lead={lead} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Open lead={lead} />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <Replied lead ={lead} />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <Opportunity lead={lead} />
            </TabPanel>
            <TabPanel value={value} index={6}>
                <Quotation lead={lead} />
            </TabPanel>
            <TabPanel value={value} index={7}>
                <LostQuotation lead ={lead}/>
            </TabPanel>
            <TabPanel value={value} index={8}>
                <Interested lead={lead}/>
            </TabPanel>
            <TabPanel value={value} index={9}>
                <Converted lead={lead} />
            </TabPanel>
            <TabPanel value={value} index={10}>
                <DoNotContact lead={lead} />
            </TabPanel>
        </Box>
    );
};

export default AddLeads;
