import { useState, useRef,useEffect } from 'react';
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
import { addCourse } from 'actions/course/course';
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

const AddCourse = (props) => {
    const {languages,levels ,categories,subjects} =props;
    console.log(languages)


    // const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
    // const levels = ['Beginner', 'Intermediate', 'Advanced'];



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

    const [category, setCategory] = useState('');
    const [coursePrice, setCoursePrice] = useState('');
    const [description, setDescription] = useState('');
    const [heading, setHeading] = useState('');
    const [level, setLevel] = useState('');
    const [language, setLanguage] = useState('');
    const [subject, setSubject] = useState('');
    const [courseName, setCourseName] = useState('');
    const [duration, setDuration] = useState('');
    const [lesson, setLesson] = useState('');

    const [image, setImage] = useState();

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleImageFile = (event) => {
        setImage(event.target.files[0]);
    };

    const handleLevelChange = (event) => {
        setLevel(event.target.value);
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleSubjectsChange = (event) => {
        setSubject(event.target.value);
    };

    const dispatch = useDispatch();

    const handleSubmit = () => {
        try {
            const formData = new FormData();
            formData.append('category', category);
            formData.append('courseName', courseName);
            formData.append('coursePrice', coursePrice);
            formData.append('heading', heading);
            formData.append('description', description);
            formData.append('lesson', lesson);
            formData.append('level', level);
            formData.append('duration', duration);
            formData.append('language', language);
            formData.append('subjects', subject);
            formData.append('courseImage', image);
            console.log(formData);
            dispatch(addCourse(formData));
            setCategory('');
            setCourseName('');
            setCoursePrice('');
            setHeading('');
            setDescription('');
            setDuration('');
            setLanguage('');
            setLevel('');
            setLesson('');
            setSubject('');
            setImage();
            alert('courses added successfully!');
        } catch (error) {
            console.log(error);
        }
    };

    // console.log(image)

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mb: 2 }}>
                <FormControl fullWidth sx={{ mr: { sm: 1 } }}>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Topic"
                        onChange={handleCategoryChange}
                    >
                        {categories && categories.data && categories?.data.map((category) => (
                            <MenuItem value={category.category}>{category.category}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    label="Course Name"
                    variant="outlined"
                    fullWidth
                    sx={{ ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}
                    type="text"
                    name="courseName"
                    value={courseName}
                    onChange={(e) => setCourseName(e.target.value)}
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                    label="Course Price"
                    variant="outlined"
                    fullWidth
                    sx={{ mr: { sm: 1 } }}
                    type="number"
                    name="price"
                    value={coursePrice}
                    onChange={(e) => setCoursePrice(e.target.value)}
                />
                <Box sx={{ width: '100%', ml: { xs: 0, sm: 1 }, mt: { xs: 2, sm: 0 } }}>
                    <Button
                        variant="outlined"
                        fullWidth
                        component="label"
                        style={{ height: '37px' }}
                        value={image}
                        onChange={(e) => handleImageFile(e)}
                    >
                        Course Image
                        <input hidden accept="image/*" type="file" />
                    </Button>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                    label="Heading"
                    variant="outlined"
                    fullWidth
                    sx={{ mr: { xs: 0, sm: 1 } }}
                    type="text"
                    name="heading"
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                />
                <Box sx={{ width: '100%', ml: { xs: 0, sm: 1 } }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                <TextField
                    label="Description"
                    variant="outlined"
                    fullWidth
                    sx={{ mr: { sm: 1 } }}
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                    label="Lesson"
                    variant="outlined"
                    fullWidth
                    sx={{ ml: { xs: 0, sm: 1 }, mt: { xs: 2, sm: 0 } }}
                    type="text"
                    name="lesson"
                    value={lesson}
                    onChange={(e) => setLesson(e.target.value)}
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                <FormControl fullWidth sx={{ mr: { sm: 1 } }}>
                    <InputLabel id="demo-simple-select-label">Level</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={level}
                        label="Topic"
                        onChange={handleLevelChange}
                    >
                        {levels && levels.data && levels?.data.map((level) => (
                            <MenuItem value={level.level}>{level.level}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    label="Duration"
                    variant="outlined"
                    fullWidth
                    sx={{ ml: { sm: 1 }, mt: { xs: 2, sm: 0 } }}
                    type="text"
                    name="duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>
                <FormControl fullWidth sx={{ mr: { sm: 1 } }}>
                    <InputLabel id="demo-simple-select-label">Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={language}
                        label="Language"
                        onChange={handleLanguageChange}
                    >
                        {languages && languages.data && languages?.data.map((language) => (
                            <MenuItem value={language.language}>{language.language}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl
                    fullWidth
                    sx={{
                        ml: { sm: 1 },
                        mt: {
                            xs: 2,
                            sm: 0
                        }
                    }}
                >
                    <InputLabel id="demo-simple-select-label">Topics</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={subject}
                        label="Topics"
                        onChange={handleSubjectsChange}
                    >
                        {subjects && subjects.data && subjects?.data.map((topic) => (
                            <MenuItem value={topic.topic}>{topic.topic}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            <Box>
                <Button variant="contained" sx={{ background: '#EC6E46' }} type="submit" onClick={() => handleSubmit()}>
                    Submit
                </Button>
            </Box>
        </>
    );
};

export default AddCourse;
