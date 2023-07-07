import PropTypes from 'prop-types';
// material
import { Paper, Typography } from '@mui/material';

// ----------------------------------------------------------------------

SearchNotFoundTable.propTypes = {
//   searchQuery: PropTypes.string,
  filterName:PropTypes.string,
  filterEmail:PropTypes.string,
  filterUserCode:PropTypes.string,
  filterPhoneNumber:PropTypes.string,
};




export default function SearchNotFoundTable({  filterName = '', filterEmail = '',filterUserCode='',filterPhoneNumber='', ...other }) {
    const searchQuery = filterName || filterEmail || filterUserCode || filterPhoneNumber;
    return (
      <Paper {...other}>
        <Typography gutterBottom align="center" variant="subtitle1">
          Not found
        </Typography>
        {searchQuery && (
          <Typography variant="body2" align="center">
            No results found for &nbsp;
            <strong>&quot;{searchQuery}&quot;</strong>. Try checking for typos or using complete words.
          </Typography>
        )}
        {filterName && (
          <Typography variant="body2" align="center">
            Filtered by Name: {filterName}
          </Typography>
        )}
        {filterEmail && (
          <Typography variant="body2" align="center">
            Filtered by Email: {filterEmail}
          </Typography>
        )}
        {filterUserCode && (
          <Typography variant="body2" align="center">
            Filtered by UserCode: {filterUserCode}
          </Typography>
        )}
        {filterPhoneNumber && (
          <Typography variant="body2" align="center">
            Filtered by Mobile Number: {filterPhoneNumber}
          </Typography>
        )}
        {/* Additional content based on other filters */}
      </Paper>
    );
  }
  