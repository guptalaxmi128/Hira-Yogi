import { useState, useRef, useEffect } from 'react';
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
    Stack
} from '@mui/material';
import { Cancel } from '@mui/icons-material';
import JoditEditor from 'jodit-react';
// project import
import MainCard from 'components/MainCard';

import { useDispatch, useSelector } from 'react-redux';
import { addUploadContent } from 'actions/course/uploadContent';
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

const UploadContent = (props) => {
    const { courses } = props;
    const [courseId, setCourseId] = useState('');

    useEffect(() => {
        if (props.courses && props.courses.data) {
            const newCourseId = props.courses.data.map((item) => item.id).join(', ');
            setCourseId(newCourseId);
        } else {
            console.error('Courses data is undefined or missing.');
        }
    }, [props.courses]);
    const subjects = ['Mathematics', 'Science', 'History', 'English', 'Geography', 'Art', 'Music'];

    const videoTypes = [
        {
            videoType: 'Youtube'
        },
        {
            videoType: 'Vimeo'
        }
    ];

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

    const [uploadContent, setUploadContent] = useState({
        course: '',
        subject: '',
        videoTitle: '',
        videoType: '',
        videoLink: '',
        notes: ''
    });
    const [selectedFiles, setSelectedFiles] = useState([]);
    const displayValue = selectedFiles.length === 1 ? selectedFiles[0].name : `${selectedFiles.length} files`;

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length < 1) {
            alert('Please select at least 1 file.');
            return;
        }

        if (files.length > 10) {
            alert('Please select a maximum of 10 files.');
            return;
        }
        const fileList = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            fileList.push(file);
        }
        console.log(fileList);
        setSelectedFiles(fileList);
    };

    const handleChange = (event) => {
        setUploadContent({ ...uploadContent, [event.target.name]: event.target.value });
    };

    const tagRef = useRef();

    const handleCourseChange = (event) => {
        setUploadContent({ ...uploadContent, course: event.target.value });
    };

    const handleSubjectsChange = (event) => {
        setUploadContent({ ...uploadContent, subject: event.target.value });
    };

    const handlevideoTypeChange = (event) => {
        setUploadContent({ ...uploadContent, videoType: event.target.value });
    };

    console.log(selectedFiles);
    const dispatch = useDispatch();

    const handleSubmit = () => {
        try {
            console.log(uploadContent);
            const formData = new FormData();
            formData.append('course', uploadContent.course);
            formData.append('subject', uploadContent.subject);
            formData.append('videoTitle', uploadContent.videoTitle);
            formData.append('videoType', uploadContent.videoType);
            formData.append('videoLink', uploadContent.videoLink);
            selectedFiles.forEach((file) => {
                console.log(file);
                formData.append('contentNotes', file);
            });
            formData.append('courseId', courseId);
            dispatch(addUploadContent(formData));
            setUploadContent({
                course: '',
                subject: '',
                videoTitle: '',
                videoType: '',
                videoLink: '',
                notes: ''
            });
            setSelectedFiles();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mb: 2 }}>
                <FormControl fullWidth sx={{ mr: { sm: 1 } }}>
                    <InputLabel id="demo-simple-select-label">Course</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={uploadContent.course}
                        label="Course"
                        onChange={handleCourseChange}
                    >
                        {courses && courses.data
                            ? courses.data.map((course) => (
                                  <MenuItem key={course.courseName} value={course.courseName}>
                                      {course.courseName}
                                  </MenuItem>
                              ))
                            : null}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}>
                    <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={uploadContent.subject}
                        label="Subject"
                        onChange={handleSubjectsChange}
                    >
                        {subjects.map((subject) => (
                            <MenuItem value={subject}>{subject}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                    label="Video Title"
                    variant="outlined"
                    fullWidth
                    sx={{ mr: { sm: 1 } }}
                    type="text"
                    name="videoTitle"
                    value={uploadContent.videoTitle}
                    onChange={handleChange}
                />
                <FormControl fullWidth sx={{ ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}>
                    <InputLabel id="demo-simple-select-label">Video Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={uploadContent.videoType}
                        label="Video Type"
                        onChange={handlevideoTypeChange}
                    >
                        {videoTypes.map((videoType) => (
                            <MenuItem value={videoType.videoType}>{videoType.videoType}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                    label="Video Link"
                    variant="outlined"
                    fullWidth
                    sx={{ mr: { sm: 1 } }}
                    type="text"
                    name="videoLink"
                    value={uploadContent.videoLink}
                    onChange={handleChange}
                />
                <Box sx={{ width: '100%', ml: { xs: 0, sm: 1 }, mt: { xs: 2, sm: 0 } }}>
                    <Button variant="outlined" fullWidth component="label" style={{ height: '37px' }}>
                        {selectedFiles.length === 0 ? 'Upload Notes' : displayValue}
                        <input type="file" accept=".pdf" multiple onChange={handleFileChange} min="1" max="10" hidden />
                    </Button>
                </Box>
            </Box>
            <Box>
                <Button variant="contained" sx={{ background: '#EC6E46 !important' }} type="submit" onClick={() => handleSubmit()}>
                    Submit
                </Button>
            </Box>
        </>
    );
};

export default UploadContent;
