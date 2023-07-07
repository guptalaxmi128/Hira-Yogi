import { useState, useRef } from 'react';
import React from 'react';
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
    // FormControlLabel,
    Stack
} from '@mui/material';
import { Cancel } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { addAppointmment } from 'actions/appointment/appointment';
// import { TimePicker } from '@mui/lab';

// ==============================|| SAMPLE PAGE ||============================== //
const copyStringToClipboard = function (str) {
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

const facilityMergeFields = [
    'FacilityNumber',
    'FacilityName',
    'Address',
    'MapCategory',
    'Latitude',
    'Longitude',
    'ReceivingPlant',
    'TrunkLine',
    'SiteElevation'
];
const inspectionMergeFields = ['InspectionCompleteDate', 'InspectionEventType'];
const createOptionGroupElement = (mergeFields, optionGrouplabel) => {
    let optionGroupElement = document.createElement('optgroup');
    optionGroupElement.setAttribute('label', optionGrouplabel);
    for (let index = 0; index < mergeFields.length; index++) {
        let optionElement = document.createElement('option');
        optionElement.setAttribute('class', 'merge-field-select-option');
        optionElement.setAttribute('value', mergeFields[index]);
        optionElement.text = mergeFields[index];
        optionGroupElement.appendChild(optionElement);
    }
    return optionGroupElement;
};
const buttons = [
    'undo',
    'redo',
    '|',
    'bold',
    'strikethrough',
    'underline',
    'italic',
    '|',
    'superscript',
    'subscript',
    '|',
    'align',
    '|',
    'ul',
    'ol',
    'outdent',
    'indent',
    '|',
    'font',
    'fontsize',
    'brush',
    'paragraph',
    '|',
    'image',
    'link',
    'table',
    '|',
    'hr',
    'eraser',
    'copyformat',
    '|',
    'fullsize',
    'selectall',
    'print',
    '|',
    'source',
    '|',
    {
        name: 'insertMergeField',
        tooltip: 'Insert Merge Field',
        iconURL: 'images/merge.png',
        popup: (editor, current, self, close) => {
            function onSelected(e) {
                let mergeField = e.target.value;
                if (mergeField) {
                    console.log(mergeField);
                    editor.selection.insertNode(editor.create.inside.fromHTML('{{' + mergeField + '}}'));
                }
            }
            let divElement = editor.create.div('merge-field-popup');

            let labelElement = document.createElement('label');
            labelElement.setAttribute('class', 'merge-field-label');
            labelElement.text = 'Merge field: ';
            divElement.appendChild(labelElement);

            let selectElement = document.createElement('select');
            selectElement.setAttribute('class', 'merge-field-select');
            selectElement.appendChild(createOptionGroupElement(facilityMergeFields, 'Facility'));
            selectElement.appendChild(createOptionGroupElement(inspectionMergeFields, 'Inspection'));
            selectElement.onchange = onSelected;
            divElement.appendChild(selectElement);

            console.log(divElement);
            return divElement;
        }
    },
    {
        name: 'copyContent',
        tooltip: 'Copy HTML to Clipboard',
        iconURL: 'images/copy.png',
        exec: function (editor) {
            let html = editor.value;
            copyStringToClipboard(html);
        }
    }
];

const editorConfig = {
    readonly: false,
    toolbar: true,
    spellcheck: true,
    language: 'en',
    toolbarButtonSize: 'medium',
    toolbarAdaptive: false,
    showCharsCounter: true,
    showWordsCounter: true,
    showXPathInStatusbar: false,
    askBeforePasteHTML: true,
    askBeforePasteFromWord: true,
    //defaultActionOnPaste: "insert_clear_html",
    buttons: buttons,
    uploader: {
        insertImageAsBase64URI: true
    },
    width: '100%',
    height: 400
};

const Tags = ({ data, handleDelete }) => {
    return (
        <Box
            sx={{
                background: '#1890FF',
                borderRadius: '0.5rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
                padding: '0.4rem',
                margin: '0 0.5rem 0 0',
                justifyContent: 'center',
                alignContent: 'center',
                color: '#ffffff'
            }}
        >
            <Stack direction="row" gap={1}>
                <Typography>{data}</Typography>
                <Cancel
                    sx={{ cursor: 'pointer' }}
                    onClick={() => {
                        handleDelete(data);
                    }}
                />
            </Stack>
        </Box>
    );
};

const times = ['9:00 - 9:30', '9:30 - 10:00', '10:00 - 10:30', '10:30 - 11:00'];
const Appointment = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedTimes, setSelectedTimes] = useState([]);
    const [time, setTime] = useState('');

    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    // const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (newValue) => {
        setValue(newValue);
    };

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250
            }
        }
    };

    // const [startTime, setStartTime] = useState(null);
    // const [endTime, setEndTime] = useState(null);
    // const [duration, setDuration] = useState(30);
    // const [generatedTimes, setGeneratedTimes] = useState([]);

    // const handleStartTimeChange = (newStartTime) => {
    //     setStartTime(newStartTime);
    //     generateTimes(newStartTime, endTime, duration);
    // };

    // const handleEndTimeChange = (newEndTime) => {
    //     setEndTime(newEndTime);
    //     generateTimes(startTime, newEndTime, duration);
    // };

    // const handleDurationChange = (e) => {
    //     setDuration(parseInt(e.target.value));
    //     generateTimes(startTime, endTime, parseInt(e.target.value));
    // };

    // const generateTimes = (start, end, dur) => {
    //     if (!start || !end || !dur) {
    //         setGeneratedTimes([]);
    //         return;
    //     }

    //     const startMinutes = start.getHours() * 60 + start.getMinutes();
    //     const endMinutes = end.getHours() * 60 + end.getMinutes();

    //     const times = [];
    //     for (let i = startMinutes; i <= endMinutes; i += dur) {
    //         const hours = Math.floor(i / 60);
    //         const minutes = i % 60;
    //         const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    //         times.push(timeString);
    //     }

    //     setGeneratedTimes(times);
    // };
    const dispatch = useDispatch();

    const handleSubmit = () => {
        try {
            const appointment = {
                name: name,
                phoneNumber: phoneNumber,
                time: selectedTimes,
                date: value
            };
            console.log(appointment);
            dispatch(addAppointmment(appointment));
            setName('');
            setPhoneNumber('');
            setValue(null);
            setSelectedTimes('');
            alert('appointment added successfully!');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2 }}>
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
                    label="Mobile Number"
                    variant="outlined"
                    fullWidth
                    sx={{
                        ml: { xs: 0, sm: 1 },
                        mt: { xs: 2, sm: 0 }
                    }}
                    type="number"
                    name="mobilenumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ maxWidth: '100%', width: '100%' }}>
                    <DesktopDatePicker
                        fullWidth
                        label="Calendar"
                        inputFormat="YYYY-MM-DD"
                        value={value}
                        onChange={handleDateChange}
                        renderInput={(params) => <TextField {...params} sx={{ width: '100%', mr: 1 }} />}
                    />
                </LocalizationProvider>

                {/* <FormControl fullWidth sx={{ ml:{xs:0,sm:1} }}>
                    <InputLabel id="demo-simple-select-label">Time</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Topic"
                        sx={{
                        mt: { xs: 2, sm: 0 }
                    }}
                        multiple={true}
                        value={selectedTimes || []}
                        onChange={(e)=>setSelectedTimes(e.target.value)}
                    >
                        {times.map((time) => (
                            <MenuItem key={time} value={time}>
                                {time}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl> */}
                {/* <TextField
                    sx={{
                        ml: { xs: 0, sm: 1 },
                        mt: { xs: 2, sm: 0 }
                    }}
                    label="Duration (in minutes)"
                    variant="outlined"
                    fullWidth
                    type="number"
                    value={duration}
                    onChange={handleDurationChange}
                /> */}

                {/* <Box sx={{ width: '100%', ml: { sm: 1 } }} /> */}
            </Box>
            {/* <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                    label="Start Time"
                    variant="outlined"
                    fullWidth
                    sx={{
                        marginBottom: '16px'
                    }}
                >
                    <TimePicker
                        value={startTime}
                        onChange={handleStartTimeChange}
                        renderInput={(params) => <TextField {...params} />}
                        ampm
                    />
                </TextField>

                <TextField
                    label="End Time"
                    variant="outlined"
                    fullWidth
                    sx={{
                        marginBottom: '16px'
                    }}
                >
                    <TimePicker value={endTime} onChange={handleEndTimeChange} renderInput={(params) => <TextField {...params} />} ampm />
                </TextField>
            </Box> */}
            <Box>
                <Button variant="contained" type="submit" sx={{ backgroundColor: '#EC6E46 !important' }} onClick={() => handleSubmit()}>
                    Submit
                </Button>
            </Box>
        </>
    );
};

export default Appointment;
