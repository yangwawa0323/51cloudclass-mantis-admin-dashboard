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
                                control={
                                    <Checkbox
                                        size="small"
                                        name="check-your-email"
                                        checked={isChecked('check-your-email')}
                                        onChange={(e) => onChange(e)('check-your-email')}
                                        sx={{
                                            '&.Mui-checked + span': { textDecoration: 'line-through' }
                                        }}
                                    />
                                }
                                label="Check your email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="small"
                                        name="make-youtube-video"
                                        checked={isChecked('make-youtube-video')}
                                        onChange={(e) => onChange(e)('make-youtube-video')}
                                        sx={{
                                            '&.Mui-checked + span': { textDecoration: 'line-through' }
                                        }}
                                    />
                                }
                                label="Make YouTube Video"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="small"
                                        name="create-banner"
                                        checked={isChecked('create-banner')}
                                        onChange={(e) => onChange(e)('create-banner')}
                                        sx={{
                                            '&.Mui-checked + span': { textDecoration: 'line-through' }
                                        }}
                                    />
                                }
                                label="Create Banner"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="small"
                                        name="upload-project"
                                        checked={isChecked('upload-project')}
                                        onChange={(e) => onChange(e)('upload-project')}
                                        sx={{
                                            '&.Mui-checked + span': { textDecoration: 'line-through' }
                                        }}
                                    />
                                }
                                label="Upload Project"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="small"
                                        name="update-task"
                                        checked={isChecked('update-task')}
                                        onChange={(e) => onChange(e)('update-task')}
                                        sx={{
                                            '&.Mui-checked + span': { textDecoration: 'line-through' }
                                        }}
                                    />
                                }
                                label="Update Task"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="small"
                                        name="task-issue"
                                        checked={isChecked('task-issue')}
                                        onChange={(e) => onChange(e)('task-issue')}
                                        sx={{
                                            '&.Mui-checked + span': { textDecoration: 'line-through' }
                                        }}
                                    />
                                }
                                label="Task Issue"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        size="small"
                                        name="display-project"
                                        checked={isChecked('display-project')}
                                        onChange={(e) => onChange(e)('display-project')}
                                        sx={{
                                            '&.Mui-checked + span': { textDecoration: 'line-through' }
                                        }}
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
