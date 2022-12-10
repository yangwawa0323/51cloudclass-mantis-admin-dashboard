// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menuSlice';
import auth from './authSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, auth });

export default reducers;
