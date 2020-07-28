import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import dataReducer from '../reducers/dataReducer'
import currencyReducer from '../reducers/currencyReducer'

export default () => createStore(combineReducers({
    data: dataReducer,
    currency: currencyReducer
}), applyMiddleware(thunk));
