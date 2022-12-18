import {
    Card,
    CardContent,
    CardActions,
    Button,
    Grid,
    IconButton,
    Link,
    OutlinedInput,
    TextField,
    Typography,
    formControlClasses
} from '@mui/material';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CalculatorOutlined, ClusterOutlined, DeleteOutlined, MoreOutlined, TeamOutlined, CloseOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import { keys } from 'lodash';
import uuid from 'react-uuid';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const StyledCard = styled.div`
    min-width: 250px;
    border: 1px solid rgb(240, 240, 240);
    border-raduis: 4px;
    user-select: none;
    margin: 0px 16px 0px 0px;
    height: 100%;
    background-color: rgb(245, 245, 245);
    flex: 1;
`;

const StyledTask = styled.div`
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    margin: 16px;
    padding: 16px;
`;

const OutlinedInputWithoutBorder = styled(OutlinedInput)((props) => ({
    '& fieldset': {
        border: 'none'
    }
}));

const AddNewTaskButton = styled(Button)`
    color: rgb(140, 140, 140);
    border-color: rgb(140, 140, 140);
    background-color: rgb(245, 245, 245);
    border: 1px dashed rgb(24, 144, 255);
    width: calc(80% - 16px);
    align-self: center;
`;

const KanBanCard = (props) => {
    const { index, card, tasks, addNewTaskToCard } = props;
    const [newAction, setNewAction] = useState(null);
    const [formData, setFormData] = useState(null);

    const handleAddNewTaskToCard = () => {
        addNewTaskToCard(card, formData);
        setFormData(null);
        setNewAction(null);
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
                                                        backgroundColor: 'white',
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
                                                            textOverflow: 'ellipsis',
                                                            width: 'calc(100% - 34px)'
                                                        }}
                                                        variant="subtitle1"
                                                    >
                                                        {task.title}
                                                    </Typography>
                                                    <IconButton>
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
                                    )) || <AddNewTaskButton onClick={() => setNewAction(card)}>Add task</AddNewTaskButton>}
                                </Grid>
                            </Grid>
                        </Grid>
                    )}
                </Droppable>
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
