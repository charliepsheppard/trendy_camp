import { combineReducers } from 'redux';
import sessionErrorsReducer from './errors/session_errors_reducer';
import reviewErrorsReducer from './errors/review_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  review: reviewErrorsReducer
});

export default errorsReducer;