import { Card, Button, Grid, IconButton, Link, OutlinedInput, Menu, MenuItem, Typography, CardMedia } from '@mui/material';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import {
    CalculatorOutlined,
    ClusterOutlined,
    DeleteOutlined,
    MoreOutlined,
    TeamOutlined,
    CloseOutlined,
    EditOutlined
} from '@ant-design/icons';
import PropTypes from 'prop-types';

import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { removeTask, toggleDrawer } from '../../../store/reducers/kanbanSlice';
import { OutlinedInputWithoutBorder, StyledCard, StyledTask, AddNewButton } from './StyledComponents';

//////////////////////////////////////////////////////////////////////////////////////////////////
const KanBanCard = (props) => {
    const { index, card, tasks, addNewTaskToCard } = props;
    const [newAction, setNewAction] = useState(null);
    const [formData, setFormData] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    const dispatch = useDispatch();

    const handleAddNewTaskToCard = () => {
        addNewTaskToCard(card, formData);
        setFormData(null);
        setNewAction(null);
    };

    const showActionMenu = (target, taskId) => {
        setAnchorEl({ target, taskId });
    };
    const closeActionMenu = () => setAnchorEl(null);

    const edit = () => {
        dispatch(toggleDrawer({ drawerOpen: true, taskId: anchorEl.taskId, cardId: card.id }));
        setAnchorEl(null);
    };
    const remove = () => {
        dispatch(removeTask({ taskId: anchorEl.taskId, cardId: card.id }));
        setAnchorEl(null);
    };

    return (
        <StyledCard>
            <Grid container display="flex" alignItems="center">
                <Grid item flexGrow={1}>
                    <OutlinedInputWithoutBorder value={card.title} />
                </Grid>
                <Grid item>
                    <IconButton color="error">
                        <DeleteOutlined />
                    </IconButton>
                </Grid>

                <Droppable droppableId={card.id}>
                    {(dropProvided) => (
                        <Grid item xs={12}>
                            <div ref={dropProvided.innerRef} {...dropProvided.droppableProps}>
                                {tasks.map((task, index) => (
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                        {(dragProvided) => (
                                            <StyledTask
                                                ref={dragProvided.innerRef}
                                                {...dragProvided.draggableProps}
                                                {...dragProvided.dragHandleProps}
                                            >
                                                <div
                                                    style={{
                                                        bgColor: 'white',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            overflow: 'hidden',
                                                            whiteSpace: 'nowrap',
                                                            display: 'inline-block',
                                                            textOverflow: 'ellipsis'
                                                        }}
                                                        variant="subtitle1"
                                                    >
                                                        {task.title}
                                                    </Typography>
                                                    <IconButton onClick={(e) => showActionMenu(e.currentTarget, task.id)}>
                                                        <MoreOutlined />
                                                    </IconButton>
                                                </div>
                                                <div
                                                    style={{
                                                        color: 'rgb(9, 109, 217)',
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        fontSize: '0.75rem',
                                                        alignItems: 'center',
                                                        gap: '4px'
                                                    }}
                                                >
                                                    <ClusterOutlined />
                                                    <Link href="#" underline="hover">
                                                        User Story: #{task.userStory}
                                                    </Link>
                                                </div>
                                                {task.image && (
                                                    <div>
                                                        <img
                                                            style={{
                                                                backgroundSize: 'cover',
                                                                objectFit: 'cover',
                                                                width: '100%',
                                                                borderRadius: '4px'
                                                            }}
                                                            src={task.image}
                                                            alt={task.title}
                                                        />
                                                    </div>
                                                )}
                                            </StyledTask>
                                        )}
                                    </Draggable>
                                ))}
                                {dropProvided.placeholder}
                            </div>

                            <Grid container>
                                <Grid item xs={12} display="flex" alignItems="center" justifyContent="center">
                                    {(newAction?.id == card.id && (
                                        <Card elevation={0} sx={{ padding: '16px', width: 'calc(90% + 8px)' }}>
                                            <Grid container display="flex" alignItems="center" flexDirection="row" flexWrap="wrap">
                                                <Grid item xs={12}>
                                                    <OutlinedInputWithoutBorder
                                                        onChange={(e) => setFormData({ title: e.target.value })}
                                                        value={formData?.title || ''}
                                                        placeholder="Add Task"
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <IconButton color="primary">
                                                        <TeamOutlined />
                                                    </IconButton>
                                                </Grid>
                                                <Grid item>
                                                    <IconButton color="primary">
                                                        <CalculatorOutlined />
                                                    </IconButton>
                                                </Grid>
                                                <Grid item zeroMinWidth xs flexGrow={1} maxWidth="100%"></Grid>
                                                <Grid item gap={0.5} display="flex">
                                                    <IconButton color="error" onClick={() => setNewAction(null)}>
                                                        <CloseOutlined />
                                                    </IconButton>
                                                    <Button
                                                        onClick={handleAddNewTaskToCard}
                                                        size="medium"
                                                        variant="contained"
                                                        color="primary"
                                                    >
                                                        Add
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    )) || <AddNewButton onClick={() => setNewAction(card)}>Add task</AddNewButton>}
                                </Grid>
                            </Grid>
                        </Grid>
                    )}
                </Droppable>
                <div>
                    <Menu
                        elevation={2}
                        id="basic-menu"
                        anchorEl={anchorEl?.target}
                        open={Boolean(anchorEl)}
                        onClose={closeActionMenu}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button'
                        }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left'
                        }}
                    >
                        <MenuItem onClick={edit}>
                            <IconButton>
                                <EditOutlined />
                            </IconButton>
                        </MenuItem>
                        <MenuItem onClick={remove}>
                            <IconButton color="error">
                                <DeleteOutlined />
                            </IconButton>
                        </MenuItem>
                    </Menu>
                </div>
            </Grid>
        </StyledCard>
    );
};

KanBanCard.propTypes = {
    index: PropTypes.number,
    card: PropTypes.object,
    tasks: PropTypes.array,
    addNewTaskToCard: PropTypes.func
};

export default KanBanCard;
