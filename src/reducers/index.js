
import { combineReducers } from 'redux';
import ApplicationsReducer  from '../reducers/reducer_application'
 
const rootReducer = combineReducers({
    applications:ApplicationsReducer
});

export default rootReducer;