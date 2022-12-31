import { createSlice } from '@reduxjs/toolkit';
import { findIndex } from 'lodash';
import uuid from 'react-uuid';
import { kanBanInitialData } from '../data/KanBanInitData';

const kanban = createSlice({
    name: 'kanban',
    initialState: {
        ...kanBanInitialData,
        editDrawerStatus: {
            drawerOpen: false,
            taskId: null
        }
    },
    reducers: {
        updateData(state, action) {
            // IMPORTANT: state.object is a proxy , should update individually.
            state.cards = action.payload.kanban.cards;
            state.tasks = action.payload.kanban.tasks;
        },
        newTask(state, action) {
            const task = action.payload.task;
            task.id = uuid();
            const cardId = action.payload.cardId;
            state.tasks.push(task);

            // state.cards[cardId].tasksIds.push(task.id);
            // IMPORTANT: state array is proxy, the array can access only by string.
            state.cards[`${cardId}`].taskIds.push(task.id);
        },
        newCard(state, action) {
            const title = action.payload.title;
            const id = uuid();
            const newCard = { id, title, taskIds: [] };
            state.cards = {
                ...state.cards,
                [id]: newCard
            };
        },
        removeTask(state, action) {
            const { taskId, cardId } = action.payload;
            const taskIndex = findIndex(state.tasks, (task) => task.id == taskId);
            state.tasks.splice(taskIndex, 1);
            const taskIdsIndex = findIndex(state.cards[`${cardId}`].taskIds, (tId) => tId == taskId);
            state.cards[`${cardId}`].taskIds.splice(taskIdsIndex, 1);
            //TODO:
        },
        moveTask(state, action) {
            const sourceCardId = action.payload.sourceCardId;
            const destCardId = action.payload.destCardId;
            state = state;
            // move from source to destion card
        },
        toggleDrawer(state, action) {
            state.editDrawerStatus.drawerOpen = action.payload.drawerOpen;
            state.editDrawerStatus.taskId = action.payload.taskId;
            if (action.payload.cardId) state.editDrawerStatus.cardId = action.payload.cardId;
        }
    }
});

export default kanban.reducer;
export const { newTask, removeTask, moveTask, updateData, toggleDrawer, newCard } = kanban.actions;
