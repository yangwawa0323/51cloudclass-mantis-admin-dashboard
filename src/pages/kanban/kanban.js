import { Grid, Tab, Tabs, Card, CardContent, Box, Button, Typography, Paper, IconButton } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { keys, find, findIndex } from 'lodash';
import KanBanCard from './card';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';

import { newTask, updateData } from '../../store/reducers/kanbanSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import EditDrawer from './edit-drawer';
import { AddNewButton, OutlinedInputWithoutBorder, StyledCard } from './styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { newCard } from '../../store/reducers/kanbanSlice';

const AddColumn = (props) => {
    const dispatch = useDispatch();

    const [adding, setAdding] = useState(false);
    const [value, setValue] = useState('');
    const handleAddCard = () => {
        setAdding(true);
    };

    const dispatchNewCard = () => {
        dispatch(newCard({ title: value }));
        setAdding(false);
        setValue('');
    };
    return (
        <StyledCard style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '10px 0px' }}>
            {(adding && (
                <Card sx={{ width: 'calc(100% - 34px)' }}>
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <OutlinedInputWithoutBorder
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    fullWidth
                                    placeholder="Add card"
                                />
                            </Grid>
                            <Grid item xs={5}></Grid>
                            <Grid item xs={7} display="flex" alignItems="center">
                                <IconButton color="error" onClick={() => setAdding(false)}>
                                    <CloseOutlined />
                                </IconButton>
                                <Button
                                    onClick={dispatchNewCard}
                                    variant="contained"
                                    sx={{ height: '28px', marginRight: '6px' }}
                                    color="primary"
                                >
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            )) || <AddNewButton onClick={handleAddCard}>Add Card</AddNewButton>}
        </StyledCard>
    );
};

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.element,
    value: PropTypes.number || PropTypes.string,
    index: PropTypes.number || PropTypes.string
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

const KanBan = () => {
    const [value, setValue] = useState(0); // this is for tabs

    const handleChange = (event, value) => {
        setValue(value);
    };

    const setKanBanData = () => {};

    const kanBanData = useSelector((state) => state.kanban);
    const dispatch = useDispatch();

    const cardnameList = keys(kanBanData.cards);

    const addNewTaskToCard = (card, task) => {
        const _newTask = { id: uuid(), ...task };
        setKanBanData({
            ...kanBanData,
            tasks: [...kanBanData.tasks, _newTask], // add new task
            cards: {
                ...kanBanData.cards,
                [card.id]: {
                    ...kanBanData.cards[card.id],
                    taskIds: [...kanBanData.cards[card.id].taskIds, _newTask.id] // add new task id to corresponding card's taskIds
                }
            }
        });
        dispatch(newTask({ task, cardId: card.id }));
    };

    const onDragEnd = (context) => {
        const { source, destination } = context;
        if (!destination) return; // illigal destionation
        if (destination.index === source.index && destination.droppableId === source.droppableId) return;

        // Same card
        if (destination.droppableId === source.droppableId) {
            const sourceCardData = kanBanData.cards[source.droppableId];
            // IMPORTANT: do NOT forget the useState value is immutable.
            const taskIds = [...sourceCardData.taskIds];
            const sourceTask = taskIds[source.index];
            const fromMore2Less = source.index > destination.index;

            const sourceIndex = source.index;

            // BUG:
            taskIds.splice(sourceIndex, 1);
            taskIds.splice(destination.index, 0, sourceTask);

            const newData = {
                ...kanBanData,
                cards: {
                    ...kanBanData.cards,
                    [source.droppableId]: {
                        ...kanBanData.cards[source.droppableId],
                        taskIds: taskIds
                    }
                }
            };
            dispatch(updateData({ kanban: newData }));
            return;
        } else if (source.droppableId != destination.droppableId) {
            const sourceCard = kanBanData.cards[source.droppableId];
            const destinationCard = kanBanData.cards[destination.droppableId];

            // IMPORTANT: `useState` and redux `useSelector` the two callback
            // return the object is immutable. any temporary modify should make
            // a shadow copy. and finally call use `dispatch` dispatched the
            // action.
            const sourceCardTasks = [...sourceCard.taskIds];
            const destinationCardTasks = [...destinationCard.taskIds];

            const sourceTask = sourceCardTasks[source.index];
            const atSource = findIndex(sourceCardTasks, (task) => task === sourceTask);
            sourceCardTasks.splice(atSource, 1);
            destinationCardTasks.splice(destination.index, 0, sourceTask);
            // console.log('[DEBUG]: source ', sourceCardTasks, 'destination ', destinationCardTasks);
            const newData = {
                ...kanBanData,
                cards: {
                    ...kanBanData.cards,
                    [source.droppableId]: {
                        ...kanBanData.cards[source.droppableId],
                        taskIds: sourceCardTasks
                    },
                    [destination.droppableId]: {
                        ...kanBanData.cards[destination.droppableId],
                        taskIds: destinationCardTasks
                    }
                }
            };
            // console.log('[DEBUG]: newData ', newData);
            dispatch(updateData({ kanban: newData }));
        }
    };

    const handleAddNewColumn = () => {
        // dispatch(addNewCard({ cardId: uuid(), title: '' }));
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="Board" {...a11yProps(0)} />
                        <Tab label="View as Backlog" {...a11yProps(1)} />
                    </Tabs>
                </Grid>
                <Grid item xs={12}>
                    <TabPanel value={value} index={0}>
                        <Card
                            sx={{
                                color: 'rgb(38, 38, 38)',
                                transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                                overflow: 'hidden',
                                position: 'relative',
                                border: 'none rgb(230, 235, 241)',
                                borderRadius: '4px',
                                boxShadow: 'inherit',
                                backgroundColor: 'transparent'
                            }}
                        >
                            <CardContent
                                sx={{
                                    justifyContent: 'flex-start',
                                    backgroundColor: 'transparent',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '24px',
                                    flexWrap: 'wrap'
                                }}
                            >
                                <DragDropContext onDragEnd={onDragEnd}>
                                    {cardnameList.map((cardname, index) => {
                                        const tasksInThisCard = kanBanData.cards[cardname].taskIds.map((taskId) =>
                                            find(kanBanData.tasks, { id: taskId })
                                        );

                                        return (
                                            <KanBanCard
                                                addNewTaskToCard={addNewTaskToCard}
                                                key={cardname}
                                                index={index}
                                                card={kanBanData.cards[cardname]}
                                                tasks={tasksInThisCard}
                                            />
                                        );
                                    })}
                                </DragDropContext>
                                <AddColumn />
                            </CardContent>
                        </Card>
                    </TabPanel>
                </Grid>
            </Grid>
            <EditDrawer />
        </>
    );
};

export default KanBan;
