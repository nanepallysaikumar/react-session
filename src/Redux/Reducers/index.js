import { combineReducers } from "redux";
import {searchReducer} from "./SearchReducer"

const appReducer = combineReducers({
    searchReducer
})

const rootReducer = (state,action) => {
    return appReducer(state,action)
}


export default rootReducer