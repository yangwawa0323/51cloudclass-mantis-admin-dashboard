import React from 'react';
import StyledMain from '../StyledMain';
import { Grid } from '@mui/material';
import OnSubmit from './component/AjvOnSubmit';
import FormikOnSubmit from './component/FormikOnSubmit';

const FormValidation = () => {
    return (
        <StyledMain>
            <Grid container spacing={2.5}>
                <Grid item xs={12} sm={6}>
                    <OnSubmit />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FormikOnSubmit />
                </Grid>
            </Grid>
        </StyledMain>
    );
};

export default FormValidation;
