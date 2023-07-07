import React, { useState } from 'react';

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
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { addLead } from 'actions/lead/lead';


const industries = [
    { value: 'option1', label: 'Accounting' },
    { value: 'option2', label: 'Advertising' },
    { value: 'option3', label: 'Aerospace' },
    { value: 'option4', label: 'Agriculture' },
    { value: 'option5', label: 'Airline' },
    { value: 'option6', label: 'Automotive' },
    { value: 'option7', label: 'Apparel & Accessories' },
    { value: 'option8', label: 'Banking' },
    { value: 'option9', label: 'Biotechnology' },
    { value: 'option10', label: 'Broadcasting' },
    { value: 'option11', label: 'Brokerage' },
    { value: 'option12', label: 'Chemical' },
    { value: 'option13', label: 'Computer' },
    { value: 'option14', label: 'Consulting' },
    { value: 'option15', label: 'Consumer Products' },
    { value: 'option16', label: 'Cosmetics' },
    { value: 'option17', label: 'Defense' },
    { value: 'option18', label: 'Department Stores' },
    { value: 'option19', label: 'Education' },
    { value: 'option20', label: 'Electronics' },
    { value: 'option21', label: 'Energy' },
    { value: 'option22', label: 'Entertainment & Leisure' },
    { value: 'option23', label: 'Executive Search' },
    { value: 'option24', label: 'Financial Services' },
    { value: 'option25', label: 'Food, Beverage & Tobacco' },
    { value: 'option26', label: 'Grocery' },
    { value: 'option27', label: 'Health Care' },
    { value: 'option28', label: 'Internet Publishing' }
];

const Form = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [leadOwner, setLeadOwner] = useState('');
    const [salutation, setSalutation] = useState('');
    const [gender, setGender] = useState('');
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [source, setSource] = useState('');
    const [leadType, setLeadType] = useState('');
    const [requestType, setRequestType] = useState('');

    const [email,setEmail]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [whatsAppNumber,setWhatsAppNumber]=useState('');
    const [website,setWebsite]=useState('');


    const [city,setCity]=useState('');
    const [state,setState]=useState('');
    const [country,setCountry]=useState('');


    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleChange = (event) => {
        setSalutation(event.target.value);
    };

    const handleSourceChange = (event) => {
        setSource(event.target.value);
    };

    const handleLeadChange = (event) => {
        setLeadType(event.target.value);
    };

    const handleRequestChange = (event) => {
        setRequestType(event.target.value);
    };

    const dispatch = useDispatch();

    const handleSubmit = () => {
        try {
            const user = {
                name: name,
                salutation: salutation,
                requestType: requestType,
                leadOwner: leadOwner,
                leadType: leadType,
                source: source,
                status: status,
                jobTitle: jobTitle,
                gender:gender,
                email:email,
                phoneNumber:phoneNumber,
                website:website,
                whatsAppNumber:whatsAppNumber,
                city:city,
                state:state,
                country:country
            };
            console.log(user);
            dispatch(addLead(user));
            setName('');
            setSalutation('');
            setJobTitle('');
            setLeadOwner('');
            setSource('');
            setRequestType('');
            setLeadType('');
            setStatus('');
            setGender('');
            setEmail('');
            setPhoneNumber('');
            setWebsite('');
            setWhatsAppNumber('');
            setCity('');
            setState('');
            setCountry('');
              alert("Information added successfully!")
        } catch (error) {
            console.log(error);
        }
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
            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 4, ml: 4, mr: 4 }}>
                <FormControl fullWidth sx={{ mr: 1, mt: 2 }}>
                    <InputLabel id="demo-simple-select-label">Series</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Topic">
                        <MenuItem value="option">CRM-LEAD-YYYY</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    label="Job Title"
                    variant="outlined"
                    fullWidth
                    // sx={{ ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}
                    sx={{ ml: 1, mt: 2, mr: 1 }}
                    type="text"
                    name="jobTitle"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                />
                <TextField
                    label="Lead Owner"
                    variant="outlined"
                    fullWidth
                    // sx={{ ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}
                    sx={{ ml: 1, mt: 2 }}
                    type="text"
                    name="leadOwner" //emailId show
                    value={leadOwner}
                    onChange={(e) => setLeadOwner(e.target.value)}
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', ml: 4, mr: 4 }}>
                <FormControl fullWidth sx={{ mr: 1, mt: 2 }}>
                    <InputLabel id="demo-simple-select-label">Salutation</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Topic"
                        value={salutation}
                        onChange={handleChange}
                    >
                        <MenuItem value="Dr">Dr</MenuItem>
                        <MenuItem value="Madam">Madam</MenuItem>
                        <MenuItem value="Master">Master</MenuItem>
                        <MenuItem value="Miss">Miss</MenuItem>
                        <MenuItem value="Mr">Mr</MenuItem>
                        <MenuItem value="Mrs">Mrs</MenuItem>
                        <MenuItem value="Ms">Ms</MenuItem>
                        <MenuItem value="Mx">Mx</MenuItem>
                        <MenuItem value="Prof">Prof</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mr: 1, mt: 2, ml: 1 }}>
                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Topic1"
                        value={gender}
                        onChange={handleGenderChange}
                    >
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Genderqueer">Genderqueer</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="NonConforming">Non-Conforming</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                        <MenuItem value="PreferNotToSay">Prefer not to say</MenuItem>
                        <MenuItem value="Transgender">Transgender</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ ml: 1, mt: 2 }}>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Topic1"
                        value={status}
                        onChange={handleStatusChange}
                    >
                        <MenuItem value="lead">Lead</MenuItem>
                        <MenuItem value="open">Open</MenuItem>
                        <MenuItem value="replied">Replied</MenuItem>
                        <MenuItem value="quotation">Quotation</MenuItem>
                        <MenuItem value="opportunity">Opportunity</MenuItem>
                        <MenuItem value="lostquotation">Lost Quotation</MenuItem>
                        <MenuItem value="interested">Interested</MenuItem>
                        <MenuItem value="converted">Converted</MenuItem>
                        <MenuItem value="donotcontact">Do Not Contact</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, ml: 4, mr: 4 }}>
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    // sx={{ ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}
                    sx={{ mr: 1 }}
                    type="text"
                    name="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <FormControl fullWidth sx={{ mr: 1,ml:1 }}>
                    <InputLabel id="demo-simple-select-label">Source</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Topic"
                        value={source}
                        onChange={handleSourceChange}
                    >
                        <MenuItem value="advertisment">Advertisment</MenuItem>
                        <MenuItem value="campaign">Campaign</MenuItem>
                        <MenuItem value="coldCalling">Cold Calling</MenuItem>
                        <MenuItem value="customerVendor">Customer's Vendor</MenuItem>
                        <MenuItem value="exhibition">Exhibition</MenuItem>
                        <MenuItem value="existingCustomer">Existing Customer</MenuItem>
                        <MenuItem value="massMailing">Mass Mailing</MenuItem>
                        <MenuItem value="reference">Reference</MenuItem>
                        <MenuItem value="supplierReference">Supplier Reference</MenuItem>
                        <MenuItem value="walkIn">Walk In</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth sx={{ ml: 1}}>
                    <InputLabel id="demo-simple-select-label">Lead Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Topic"
                        value={leadType}
                        onChange={handleLeadChange}
                    >
                        <MenuItem value="client">Client</MenuItem>
                        <MenuItem value="channelpartner">Channel Partner</MenuItem>
                        <MenuItem value="consultant">Consultant</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, ml: 4, mr: 4, mb: 4 }}>
              
                <FormControl fullWidth sx={{ mr: 2,width:'50%' }}>
                    <InputLabel id="demo-simple-select-label">Request Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Topic"
                        value={requestType}
                        onChange={handleRequestChange}
                    >
                        <MenuItem value="productenquiry">Product Enquiry</MenuItem>
                        <MenuItem value="requestforinformation">Request for Information</MenuItem>
                        <MenuItem value="suggestion">Suggestion</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{ width: '100%', ml: { sm: 1 } }} />
            </Box>
           
          
            {/* <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ width: '250px' }}> */}
                    <Typography variant="h5" ml={4}>
                        Contact & Info
                    </Typography>
                {/* </AccordionSummary>
                <AccordionDetails> */}
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, ml: 4, mr: 4 }}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            sx={{ mr: 1 }}
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                        <TextField
                            label="Mobile No"
                            variant="outlined"
                            fullWidth
                            sx={{ ml: 1, mr: 1 }}
                            type="number"
                            name="mobileNo"
                            value={phoneNumber}
                            onChange={(e)=>setPhoneNumber(e.target.value)}
                        />
                        {/* <TextField
                            label="Phone"
                            variant="outlined"
                            fullWidth
                            sx={{ ml: 1 }}
                            type="number"
                            name="phone"
                        /> */}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, ml: 4, mr: 4, mb: 4 }}>
                        <TextField
                            label="Website"
                            variant="outlined"
                            fullWidth
                            sx={{ mr: 1 }}
                            type="text"
                            name="website"
                            value={website}
                            onChange={(e)=>setWebsite(e.target.value)}
                        />
                        <TextField
                            label="WhatsApp"
                            variant="outlined"
                            fullWidth
                            sx={{ ml: 1, mr: 1 }}
                            type="number"
                            name="whatsApp"
                            value={whatsAppNumber}
                            onChange={(e)=>setWhatsAppNumber(e.target.value)}
                        />
                        {/* <TextField
                            label="Phone Ext."
                            variant="outlined"
                            fullWidth
                            // sx={{ ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}
                            sx={{ ml: 1 }}
                            type="number"
                            name="phoneExt"
                        /> */}
                    </Box>
                {/* </AccordionDetails>
            </Accordion> */}
            {/* <hr style={{ color: '#f4f5f6', backgroundColor: '#f4f5f6' }} />
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ width: '250px' }}>
                    <Typography variant="h5" ml={4}>
                        Organization
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, ml: 4, mr: 4 }}>
                        <TextField
                            label="Organization Name"
                            variant="outlined"
                            fullWidth
                            // sx={{ ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}
                            sx={{ mr: 1 }}
                            type="text"
                            name="organizationName"
                        />
                        <TextField
                            label="Annual Revenue"
                            variant="outlined"
                            fullWidth
                            // sx={{ ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}
                            sx={{ ml: 1, mr: 1 }}
                            type="text"
                            name="annualRevenue"
                        />
                        <TextField
                            label="Territory"
                            variant="outlined"
                            fullWidth
                            // sx={{ ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}
                            sx={{ ml: 1 }}
                            type="text"
                            name="territory"
                        />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', ml: 4, mr: 4 }}>
                        <FormControl fullWidth sx={{ mr: 1, mt: 2 }}>
                            <InputLabel id="demo-simple-select-label">No of Employees</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Topic">
                                <MenuItem value="option1">1-10</MenuItem>
                                <MenuItem value="option2">11-50</MenuItem>
                                <MenuItem value="option3">51-200</MenuItem>
                                <MenuItem value="option4">201-500</MenuItem>
                                <MenuItem value="option5">501-1000</MenuItem>
                                <MenuItem value="option6">1000+</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth sx={{ mr: 1, mt: 2, ml: 1 }}>
                            <InputLabel id="demo-simple-select-label">Industry</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Topic1">
                                {industries.map((industry) => (
                                    <MenuItem key={industry.value} value={industry.value}>
                                        {industry.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            label="Fax"
                            variant="outlined"
                            fullWidth
                            // sx={{ ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}
                            sx={{ ml: 1, mt: 2 }}
                            type="text"
                            name="fax"
                        />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, ml: 4, mr: 4, mb: 4 }}>
                        <FormControl fullWidth sx={{ mr: 1 }}>
                            <InputLabel id="demo-simple-select-label">Market Segment</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Topic">
                                <MenuItem value="option1">Lower Income</MenuItem>
                                <MenuItem value="option2">Middle Income</MenuItem>
                                <MenuItem value="option3">Upper Income</MenuItem>
                            </Select>
                        </FormControl>
                        <Box sx={{ width: '100%', ml: { sm: 1 } }} />
                        <Box sx={{ width: '100%', ml: { sm: 1 } }} />
                    </Box>
                </AccordionDetails>
            </Accordion> */}
            {/* <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ width: '300px' }}> */}
                    <Typography variant="h5" ml={4}>
                        Address & Contacts
                    </Typography>
                {/* </AccordionSummary>
                <AccordionDetails> */}
                    <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2, ml: 4, mr: 4, mb: 4 }}>
                        <TextField
                            label="City"
                            variant="outlined"
                            fullWidth
                            sx={{ mr: 1 }}
                            type="text"
                            name="city"
                            value={city}
                            onChange={(e)=>setCity(e.target.value)}
                        />
                        <TextField
                            label="State"
                            variant="outlined"
                            fullWidth
                            sx={{ ml: 1, mr: 1 }}
                            type="text"
                            name="state"
                            value={state}
                            onChange={(e)=>setState(e.target.value)}
                        />
                        <TextField
                            label="Country"
                            variant="outlined"
                            fullWidth
                            sx={{ ml: 1 }}
                            type="text"
                            name="country"
                            value={country}
                            onChange={(e)=>setCountry(e.target.value)}
                        />
                    </Box>
                    <Box sx={{ml:4,mt:2,mb:4}}>
                <Button variant="contained" type="submit" sx={{ backgroundColor: '#EC6E46 !important' }} onClick={()=>handleSubmit()}>
                    Submit
                </Button>
            </Box>
                {/* </AccordionDetails>
            </Accordion> */}
        </Box>
    );
};

export default Form;
