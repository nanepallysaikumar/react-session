import {actionTypes} from "../Actions/ReduxActions";

const initialState = {
    searchResult: []
}


export function searchReducer(state = initialState, action = {type: ""}) {
    switch(action.type) {
        case actionTypes.SAVECLICKDATA:
            return {
                ...state,
                searchResult: action.payload.data
            }
        default:
            return state;
    }

}