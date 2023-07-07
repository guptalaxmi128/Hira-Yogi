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
    Stack
} from '@mui/material';
import { Cancel } from '@mui/icons-material';
import JoditEditor from 'jodit-react';
// project import
import MainCard from 'components/MainCard';

import { useDispatch, useSelector } from 'react-redux';
import { addUser } from 'actions/user/user';
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

const AddNew = () => {

    const [employeeCode,setEmployeeCode]=useState('');

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

    const dispatch = useDispatch();

    const handleSubmit = () => {
        try {
            const user = {
               employeesCode:employeeCode
            };
            console.log(user);
            dispatch(addUser(user));
            setEmployeeCode('')
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, mt: 2, mb: 2 }}>

                <TextField
                    label="Employee Code"
                    variant="outlined"
                    fullWidth
                    sx={{ ml: { xs: 0, sm: 1 }, mt: { xs: 2, sm: 0 } }}
                    type="text"
                      name="employeecode"
                      value={employeeCode}
                      onChange={(e)=>setEmployeeCode(e.target.value)}
                />
                <Box sx={{ width: '100%', ml: { sm: 1 } }} />
            </Box>
            <Box>
                <Button variant="contained" type="submit" sx={{ backgroundColor: '#EC6E46 !important' }} onClick={()=>handleSubmit()}>
                    Submit
                </Button>
            </Box>
        </>
    );
};

export default AddNew;

// import React, { useState, useEffect } from 'react';
// import {
//     Box,
//     Card,
//     Grid,
//     Table,
//     Stack,
//     Avatar,
//     Button,
//     Checkbox,
//     TableRow,
//     TableBody,
//     TableCell,
//     Container,
//     Typography,
//     TableContainer,
//     TablePagination,
//     TextField,
//     Select,
//     MenuItem,
//     InputLabel,
//     FormControl
// } from '@mui/material';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import { useDispatch } from 'react-redux';
// import Dropdown from 'react-bootstrap/Dropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from 'react-router-dom';
// import Scrollbar from '../../components/Scrollbar';
// import SearchNotFoundTable from '../../components/SearchNotFoundTable';
// import { UserListHead, UserListToolbarTable, UserMoreMenu } from '../../components/user';
// import { deleteUser } from 'actions/user/user';

// const TABLE_HEAD = [
//     { id: 'sno', label: 'SNo', alignRight: true },
//     { id: 'name', label: 'Name', alignRight: true },
//     { id: 'email', label: 'Email', alignRight: true },
//     { id: 'phoneNumber', label: 'Mobile Number', alignRight: true },
//     { id: 'userCode', label: 'Employee Code', alignRight: true },
//     { id: '3dots', label: <MoreVertIcon />, alignRight: true }
// ];

// // ----------------------------------------------------------------------

// const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
//     <a
//         href=""
//         ref={ref}
//         onClick={(e) => {
//             e.preventDefault();
//             onClick(e);
//         }}
//     >
//         {children}
//         <MoreVertIcon />
//     </a>
// ));

// function descendingComparator(a, b, orderBy) {
//     if (b[orderBy] < a[orderBy]) {
//         return -1;
//     }
//     if (b[orderBy] > a[orderBy]) {
//         return 1;
//     }
//     return 0;
// }

// function getComparator(order, orderBy) {
//     return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
// }

//Only works  for name
// function applySortFilter(array, comparator, query) {
//     const stabilizedThis = array.map((el, index) => [el, index]);
//     stabilizedThis.sort((a, b) => {
//         const order = comparator(a[0], b[0]);
//         if (order !== 0) return order;
//         return a[1] - b[1];
//     });
//     if (query) {
//         return stabilizedThis.filter((_user) => _user[0].name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
//     }
//     return stabilizedThis.map((el) => el[0]);
// }

// function applySortFilter(array, comparator, filterValues) {
//     const stabilizedThis = array.map((el, index) => [el, index]);
//     stabilizedThis.sort((a, b) => {
//         const order = comparator(a[0], b[0]);
//         if (order !== 0) return order;
//         return a[1] - b[1];
//     });
//     if (filterValues) {
//         return stabilizedThis.filter((_user) => {
//             const { name, userCode, email, phoneNumber } = _user[0];
//             const { filterName, filterUserCode, filterEmail, filterPhoneNumber } = filterValues;
//             return (
//                 filterName &&
//                 name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1 &&
//                 filterUserCode &&
//                 userCode.toLowerCase().indexOf(filterUserCode.toLowerCase()) !== -1 &&
//                 filterEmail &&
//                 email.toLowerCase().indexOf(filterEmail.toLowerCase()) !== -1 &&
//                 filterPhoneNumber &&
//                 phoneNumber.toLowerCase().indexOf(filterPhoneNumber.toLowerCase()) !== -1
//             );
//         });
//     }
//     return stabilizedThis.map((el) => el[0]);
// }

// const AddNew = (props) => {
//     const dispatch = useDispatch();
//     const { user } = props;
//     // console.log(user.data);
//     // const handleDelete=(userCode)=>{
//     //     dispatch(deleteUser(userCode))
//     // }

//     const [listTable, setListTable] =  useState(user?.data || []);
      

//     const [page, setPage] = useState(0);

//     const [order, setOrder] = useState('asc');

//     const [selected, setSelected] = useState([]);

//     const [orderBy, setOrderBy] = useState('name');

//     const [filterName, setFilterName] = useState('');
//     const [filterUserCode, setFilterUserCode] = useState('');
//     const [filterPhoneNumber, setFilterPhoneNumber] = useState('');
//     const [filterEmail, setFilterEmail] = useState('');

//     const [rowsPerPage, setRowsPerPage] = useState(5);

//     const handleRequestSort = (event, property) => {
//         const isAsc = orderBy === property && order === 'asc';
//         setOrder(isAsc ? 'desc' : 'asc');
//         setOrderBy(property);
//     };

//     const handleSelectAllClick = (event) => {
//         if (event.target.checked) {
//             const newSelecteds = listTable.map((n) => n.id);
//             setSelected(newSelecteds);
//             return;
//         }
//         setSelected([]);
//     };

//     const handleClick = (event, id) => {
//         const selectedIndex = selected.indexOf(id);
//         let newSelected = [];
//         if (selectedIndex === -1) {
//             newSelected = newSelected.concat(selected, id);
//         } else if (selectedIndex === 0) {
//             newSelected = newSelected.concat(selected.slice(1));
//         } else if (selectedIndex === selected.length - 1) {
//             newSelected = newSelected.concat(selected.slice(0, -1));
//         } else if (selectedIndex > 0) {
//             newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
//         }
//         setSelected(newSelected);
//     };

//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(parseInt(event.target.value, 10));
//         setPage(0);
//     };

//     const handleFilterByName = (event) => {
//         setFilterName(event.target.value);
//     };

//     const handleFilterByUserCode = (event) => {
//         setFilterUserCode(event.target.value);
//     };

//     const handleFilterByEmail = (event) => {
//         setFilterEmail(event.target.value);
//     };

//     const handleFilterByPhoneNumber = (event) => {
//         setFilterPhoneNumber(event.target.value);
//     };

//     const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - listTable.length) : 0;

//     const filteredUsers = applySortFilter(listTable, getComparator(order, orderBy), {
//         filterName,
//         filterUserCode,
//         filterEmail,
//         filterPhoneNumber
//     });

//     const isUserNotFound = filteredUsers.length === 0;

//     return (
//         <>
//             <Box sx={{ mt: 2 }}>
//                 {/* <UserListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} /> */}
//                 <UserListToolbarTable
//                     numSelected={selected.length}
//                     filterName={filterName}
//                     filterUserCode={filterUserCode}
//                     filterEmail={filterEmail}
//                     filterPhoneNumber={filterPhoneNumber}
//                     onFilterName={handleFilterByName}
//                     onFilterUserCode={handleFilterByUserCode}
//                     onFilterEmail={handleFilterByEmail}
//                     onFilterPhoneNumber={handleFilterByPhoneNumber}
//                 />

//                 <Scrollbar>
//                     <TableContainer sx={{ minWidth: 800 }}>
//                         <Table>
//                             <UserListHead
//                                 order={order}
//                                 orderBy={orderBy}
//                                 headLabel={TABLE_HEAD}
//                                 rowCount={listTable.length}
//                                 numSelected={selected.length}
//                                 onRequestSort={handleRequestSort}
//                                 onSelectAllClick={handleSelectAllClick}
//                             />
//                             <TableBody>
//                                 {listTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((custInfo, index) => {
//                                     const { id, name, email, userCode, phoneNumber } = custInfo;
//                                     const SNo = index + 1;
//                                     const isItemSelected = selected.indexOf(id) !== -1;

//                                     return (
//                                         <TableRow
//                                             hover
//                                             key={id}
//                                             tabIndex={-1}
//                                             role="checkbox"
//                                             selected={isItemSelected}
//                                             aria-checked={isItemSelected}
//                                         >
//                                             <TableCell padding="checkbox">
//                                                 <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, id)} />
//                                             </TableCell>
//                                             <TableCell align="center">
//                                                 <Stack direction="row" alignItems="center" spacing={2}>
//                                                     <Typography variant="subtitle2" noWrap>
//                                                         {SNo}
//                                                     </Typography>
//                                                 </Stack>
//                                             </TableCell>
//                                             <TableCell align="center">
//                                                 <Stack direction="row" alignItems="center" spacing={2}>
//                                                     <Link to={'/user-detail'} style={{ textDecoration: 'none', color: '#000' }}>
//                                                         <Typography variant="subtitle2" noWrap>
//                                                             {name}
//                                                         </Typography>
//                                                     </Link>
//                                                 </Stack>
//                                             </TableCell>
//                                             <TableCell align="center">
//                                                 <Stack direction="row" alignItems="center" spacing={2}>
//                                                     <Typography variant="subtitle2" noWrap>
//                                                         {email}
//                                                     </Typography>
//                                                 </Stack>
//                                             </TableCell>
//                                             <TableCell align="center">
//                                                 <Stack direction="row" alignItems="center" spacing={2}>
//                                                     <Typography variant="subtitle2" noWrap>
//                                                         {phoneNumber}
//                                                     </Typography>
//                                                 </Stack>
//                                             </TableCell>
//                                             <TableCell align="center">
//                                                 <Stack direction="row" alignItems="center" spacing={2}>
//                                                     <Typography variant="subtitle2" noWrap>
//                                                         {userCode}
//                                                     </Typography>
//                                                 </Stack>
//                                             </TableCell>
//                                             {/* <TableCell align="center">
//                                             <Stack direction="row" alignItems="center" spacing={2}>
//                                                 <Button variant="contained" color="primary" type="submit">
//                                                     View
//                                                 </Button>
//                                                 </Stack>
//                                             </TableCell> */}
//                                             <TableCell align="center">
//                                                 <Stack direction="row" alignItems="center" spacing={2}>
//                                                     <Dropdown>
//                                                         <Dropdown.Toggle as={CustomToggle} />
//                                                         <Dropdown.Menu size="sm" title="">
//                                                             {/* <Dropdown.Item><RefreshIcon />&nbsp;&nbsp;&nbsp;  Restore</Dropdown.Item> */}
//                                                             <Dropdown.Item onClick={() => handleDelete(userCode)}>
//                                                                 <DeleteOutlineIcon />
//                                                                 &nbsp;&nbsp;&nbsp; Delete
//                                                             </Dropdown.Item>
//                                                         </Dropdown.Menu>
//                                                     </Dropdown>
//                                                 </Stack>
//                                             </TableCell>
//                                         </TableRow>
//                                     );
//                                 })}
//                                 {emptyRows > 0 && (
//                                     <TableRow style={{ height: 53 * emptyRows }}>
//                                         <TableCell colSpan={6} />
//                                     </TableRow>
//                                 )}
//                             </TableBody>

//                             {isUserNotFound && (
//                                 <TableBody>
//                                     <TableRow>
//                                         <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
//                                             <SearchNotFoundTable
//                                                 filterName={filterName}
//                                                 filterEmail={filterEmail}
//                                                 filterUserCode={filterUserCode}
//                                                 filterPhoneNumber={filterPhoneNumber}
//                                             />
//                                         </TableCell>
//                                     </TableRow>
//                                 </TableBody>
//                             )}
//                         </Table>
//                     </TableContainer>
//                 </Scrollbar>

//                 <TablePagination
//                     rowsPerPageOptions={[5, 10, 25]}
//                     component="div"
//                     count={listTable.length}
//                     rowsPerPage={rowsPerPage}
//                     page={page}
//                     onPageChange={handleChangePage}
//                     onRowsPerPageChange={handleChangeRowsPerPage}
//                 />
//             </Box>
//         </>
//     );
// };

// export default AddNew;
