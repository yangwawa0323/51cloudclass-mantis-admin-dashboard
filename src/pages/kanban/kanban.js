import { Grid, Tab, Tabs, Card, CardContent, CardActions, Button, Box, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { kanBanInitialData } from './init-data';
import { keys, slice, find, findIndex, set } from 'lodash';
import KanBanCard from './card';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';

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
    const [kanBanData, setKanBanData] = useState(kanBanInitialData);
    const handleChange = (event, value) => {
        setValue(value);
    };

    const cardnameList = keys(kanBanData.cards);

    const addNewTaskToCard = (card, task) => {
        const newTask = { id: uuid(), ...task };
        setKanBanData({
            ...kanBanData,
            tasks: [...kanBanData.tasks, newTask], // add new task
            cards: {
                ...kanBanData.cards,
                [card.id]: {
                    ...kanBanData.cards[card.id],
                    taskIds: [...kanBanData.cards[card.id].taskIds, newTask.id] // add new task id to corresponding card's taskIds
                }
            }
        });
    };

    const onDragEnd = (context) => {
        const { source, destination } = context;
        if (!destination) return; // illigal destionation
        if (destination.index === source.index && destination.droppableId === source.droppableId) return;

        // Same card
        if (destination.droppableId === source.droppableId) {
            const sourceCardData = kanBanData.cards[source.droppableId];
            const { taskIds } = sourceCardData;
            const sourceTask = taskIds[source.index];
            const fromMore2Less = source.index > destination.index;
            const start = fromMore2Less ? destination.index : source.index;
            const end = fromMore2Less ? source.index : destination.index;
            // const effectedTasks = slice(taskIds, start, end);

            taskIds.splice(source.index, 1);
            taskIds.splice(destination.index, 0, sourceTask);

            console.log('[DEBUG]: AFTER taskIds :', taskIds);

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
            setKanBanData(newData);
            return;
        } else if (source.droppableId != destination.droppableId) {
            const sourceCard = kanBanData.cards[source.droppableId];
            const destinationCard = kanBanData.cards[destination.droppableId];

            const sourceCardTasks = sourceCard.taskIds;
            const destinationCardTasks = destinationCard.taskIds;

            const sourceTask = sourceCardTasks[source.index];
            const atSource = findIndex(sourceCardTasks, (task) => task === sourceTask);
            // console.log('[DEBUG]: source task: ', sourceTask, 'index: ', atSource);
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
            setKanBanData(newData);
            // console.log('[DEBUG]: newData: ', newData, 'destination.index: ', destination.index);
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Board" {...a11yProps(0)} />
                    <Tab label="View as Backlog" {...a11yProps(1)} />
                </Tabs>
            </Grid>
            <Grid item xs={12}>
                <TabPanel value={value} index={0}>
                    <DragDropContext onDragEnd={onDragEnd}>
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
                                    gap: '24px'
                                }}
                            >
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
                            </CardContent>
                        </Card>{' '}
                    </DragDropContext>
                </TabPanel>
            </Grid>
        </Grid>
    );
};

export default KanBan;
