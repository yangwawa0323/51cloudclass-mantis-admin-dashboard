import React from 'react';
import * as Yup from 'yup';

import { Form, Field, ErrorMessage, Formik } from 'formik';
import { Card, CardContent, Button, CardHeader, Box, Divider, FormLabel, LinearProgress, OutlinedInput } from '@mui/material';
import { TextField } from 'formik-mui';

const FormikContext = React.createContext({});

const FormikOnSubmit = () => {
    return (
        <Card variant="outlined">
            <CardHeader title="Formik & YUP " />
            <Divider />
            <CardContent>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Invalid email format').required('Required'),
                        password: Yup.string().min(6, 'at least 6 character').required('Required')
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                            alert(JSON.stringify(values, null, 2));
                        }, 500);
                    }}
                >
                    {({ submitForm, isSubmitting, handleReset }) => (
                        <Form
                            style={{
                                flexDirection: 'column',
                                display: 'flex',
                                gap: '24px'
                            }}
                        >
                            <FormLabel>Email</FormLabel>
                            <Field component={TextField} name="email" type="email" />
                            <FormLabel>Password</FormLabel>
                            <Field component={OutlinedInput} type="password" name="password" />
                            {isSubmitting && <LinearProgress />}

                            <Box display="flex" gap={4}>
                                <Button variant="contained" size="small" color="primary" disabled={isSubmitting} onClick={submitForm}>
                                    Submit
                                </Button>
                                <Button variant="outlined" size="small" color="warning" onClick={handleReset}>
                                    Reset
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>
    );
};

export default FormikOnSubmit;
