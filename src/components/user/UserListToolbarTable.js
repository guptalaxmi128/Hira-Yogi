import PropTypes from 'prop-types';
import { useState } from 'react';
import { Select, MenuItem } from '@mui/material';
// material
import { styled } from '@mui/material/styles';
import { Toolbar, Tooltip, IconButton, Typography, OutlinedInput, InputAdornment } from '@mui/material';
// component
import Iconify from '../Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
    height: 96,
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1, 0, 3)
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
    width: 240,
    transition: theme.transitions.create(['box-shadow', 'width'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter
    }),
    '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
    '& fieldset': {
        borderWidth: `1px !important`,
        borderColor: `${theme.palette.grey[500_32]} !important`
    }
}));

// ----------------------------------------------------------------------

UserListToolbarTable.propTypes = {
    numSelected: PropTypes.number,
    filterName: PropTypes.string,
    onFilterName: PropTypes.func,
    filterEmail: PropTypes.string,
    onFilterEmail: PropTypes.func,
    filterUserCode: PropTypes.string,
    onFilterUserCode: PropTypes.func,
    filterPhoneNumber: PropTypes.string,
    onFilterPhoneNumber: PropTypes.func
};

export default function UserListToolbarTable({
    numSelected,
    filterName,
    filterUserCode,
    filterEmail,
    filterPhoneNumber,
    onFilterName,
    onFilterUserCode,
    onFilterEmail,
    onFilterPhoneNumber,
  }) {
    const [activeFilter, setActiveFilter] = useState('name');
  
    const handleFilterChange = (filter) => {
      setActiveFilter(filter);
    };
  
    const getActiveFilterValue = () => {
      switch (activeFilter) {
        case 'name':
          return filterName;
        case 'userCode':
          return filterUserCode;
        case 'email':
          return filterEmail;
        case 'phoneNumber':
          return filterPhoneNumber;
        default:
          return '';
      }
    };
  
    const handleActiveFilterChange = (event) => {
      const { value } = event.target;
      handleFilterChange(value);
    };
  
    return (
      <RootStyle
         sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
      >
        {/* ... */}
  
        {numSelected > 0 ? (
          <Typography component="div" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <>
            <Select
              value={activeFilter}
              onChange={handleActiveFilterChange}
              startAdornment={
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                </InputAdornment>
              }
            >
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="userCode">User Code</MenuItem>
              <MenuItem value="email">Email</MenuItem>
              <MenuItem value="phoneNumber">Phone Number</MenuItem>
            </Select>
  
            <SearchStyle
              value={getActiveFilterValue()}
              onChange={(event) => {
                switch (activeFilter) {
                  case 'name':
                    onFilterName(event);
                    break;
                  case 'userCode':
                    onFilterUserCode(event);
                    break;
                  case 'email':
                    onFilterEmail(event);
                    break;
                  case 'phoneNumber':
                    onFilterPhoneNumber(event);
                    break;
                  default:
                    break;
                }
              }}
              placeholder={`Search by ${activeFilter === 'userCode' ? 'User Code' : activeFilter}`}
              startAdornment={
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                </InputAdornment>
              }
            />
          </>
        )}
  
        {/* ... */}
      </RootStyle>
    );
  }
  
