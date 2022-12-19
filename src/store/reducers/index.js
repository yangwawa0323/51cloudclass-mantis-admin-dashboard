// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menuSlice';
import auth from './authSlice';
import kanban from './kanbanSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, auth, kanban });

export default reducers;
