import React, { useState, useCallback } from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Divider,
    FormGroup,
    FormControlLabel,
    Grid,
    Checkbox,
    Typography,
    Tooltip,
    IconButton
} from '@mui/material';
import { PlusCircleOutlined } from '@ant-design/icons';
import { ThinCheckbox } from '../../StyledMain';

const TodoList = () => {
    const [todoList, setTodoList] = useState({ 'check-your-email': true, 'make-youtube-video': true, 'create-banner': true });

    const isChecked = useCallback((name) => Boolean(todoList[name]), [todoList]);

    const onChange = (e) => (name) => {
        setTodoList({
            ...todoList,
            [name]: e.target.checked
        });
    };

    return (
        <Card variant="outlined">
            <CardHeader
                title={<Typography variant="subtitle1">To do list</Typography>}
                action={
                    <Tooltip title="add task">
                        <IconButton color="primary">
                            <PlusCircleOutlined />
                        </IconButton>
                    </Tooltip>
                }
            ></CardHeader>
            <Divider />
            <CardContent>
                <FormGroup>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <FormControlLabel
                                sx={{
                                    '& .Mui-checked + span': {
                                        textDecoration: 'line-through'
                                    }
                                }}
                                control={
                                    <ThinCheckbox
                                        name="check-your-email"
                                        checked={isChecked('check-your-email')}
                                        onChange={(e) => onChange(e)('check-your-email')}
                                    />
                                }
                                label="Check your email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                sx={{
                                    '& .Mui-checked + span': {
                                        textDecoration: 'line-through'
                                    }
                                }}
                                control={
                                    <ThinCheckbox
                                        name="make-youtube-video"
                                        checked={isChecked('make-youtube-video')}
                                        onChange={(e) => onChange(e)('make-youtube-video')}
                                    />
                                }
                                label="Make YouTube Video"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                sx={{
                                    '& .Mui-checked + span': {
                                        textDecoration: 'line-through'
                                    }
                                }}
                                control={
                                    <ThinCheckbox
                                        name="create-banner"
                                        checked={isChecked('create-banner')}
                                        onChange={(e) => onChange(e)('create-banner')}
                                    />
                                }
                                label="Create Banner"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                sx={{
                                    '& .Mui-checked + span': {
                                        textDecoration: 'line-through'
                                    }
                                }}
                                control={
                                    <ThinCheckbox
                                        name="upload-project"
                                        checked={isChecked('upload-project')}
                                        onChange={(e) => onChange(e)('upload-project')}
                                    />
                                }
                                label="Upload Project"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                sx={{
                                    '& .Mui-checked + span': {
                                        textDecoration: 'line-through'
                                    }
                                }}
                                control={
                                    <ThinCheckbox
                                        name="update-task"
                                        checked={isChecked('update-task')}
                                        onChange={(e) => onChange(e)('update-task')}
                                    />
                                }
                                label="Update Task"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                sx={{
                                    '& .Mui-checked + span': {
                                        textDecoration: 'line-through'
                                    }
                                }}
                                control={
                                    <ThinCheckbox
                                        name="task-issue"
                                        checked={isChecked('task-issue')}
                                        onChange={(e) => onChange(e)('task-issue')}
                                    />
                                }
                                label="Task Issue"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                sx={{
                                    '& .Mui-checked + span': {
                                        textDecoration: 'line-through'
                                    }
                                }}
                                control={
                                    <ThinCheckbox
                                        name="display-project"
                                        checked={isChecked('display-project')}
                                        onChange={(e) => onChange(e)('display-project')}
                                    />
                                }
                                label="Display Project"
                            />
                        </Grid>
                    </Grid>
                </FormGroup>
            </CardContent>
        </Card>
    );
};

export default TodoList;
