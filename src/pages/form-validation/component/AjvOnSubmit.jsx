import React, { useMemo } from 'react';
import {
    Card,
    Box,
    CardContent,
    CardActions,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    OutlinedInput,
    IconButton,
    CardHeader,
    Divider
} from '@mui/material';
import Ajv, { ValidationError } from 'ajv';
import addFormats from 'ajv-formats';

import { JSONSchemaBridge } from 'uniforms-bridge-json-schema';
import { AutoField, AutoFields, AutoForm, ErrorField, SubmitField } from 'uniforms-mui';
import { connectField } from 'uniforms';
import { UserOutlined } from '@ant-design/icons';

import onSubmitSchema from '../schema/OnSubmit';

const ajv = addFormats(
    new Ajv({
        allErrors: true,
        useDefaults: true,
        keywords: ['uniforms']
    })
);

const HiddenLabelInput = (props) => <OutlinedInput {...props} />;

const OutlinedField = connectField(HiddenLabelInput);

const createValidator = (schema) => {
    const validator = ajv.compile(schema);

    return (model) => {
        validator(model);
        return validator.errors?.length ? { details: validator.errors } : null;
    };
};

const schemaValidator = createValidator(onSubmitSchema);

const bridgedSchema = new JSONSchemaBridge(onSubmitSchema, schemaValidator);

const OnSubmit = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const flexStyled = useMemo(() => ({ display: 'flex', flexDirection: 'column', gap: '20px' }));

    return (
        <Card variant="outlined">
            <CardHeader title="Ajv & uniforms" />
            <Divider />
            <CardContent>
                <AutoForm schema={bridgedSchema} onSubmit={console.log} style={flexStyled} label={false} placeholder showInlineError>
                    <Box style={flexStyled}>
                        <InputLabel>Email</InputLabel>
                        <AutoField name="email"></AutoField>
                        <InputLabel>Password</InputLabel>
                        <AutoField name="password" />
                    </Box>
                    <Box>
                        <SubmitField size="small" label="Verify & Submit" />
                    </Box>
                </AutoForm>
            </CardContent>
        </Card>
    );
};

export default OnSubmit;
