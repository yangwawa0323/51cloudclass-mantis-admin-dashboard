import React from 'react';
import { OutlinedInput } from '@mui/material';
import PropTypes from 'prop-types';
import { SearchOutlined } from '@ant-design/icons';

const GlobalFilterer = ({ filter, setFilter }) => {
    return (
        <OutlinedInput
            value={filter || ''}
            onChange={(e) => {
                setFilter(e.target.value);
            }}
            sx={{ marginBottom: '24px' }}
            startAdornment={<SearchOutlined />}
        />
    );
};

GlobalFilterer.propTypes = {
    filter: PropTypes.string,
    setFitler: PropTypes.func
};
export default GlobalFilterer;
