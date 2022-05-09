import axios from 'axios';

export const actionTypes = {
    SAVECLICKDATA: "SAVECLICKDATA"
}

const actionCreator = data => ({
    type: actionTypes.SAVECLICKDATA,
    payload: data
})

export const PerformButtonCLickActions = () => async dispatch => {
    try {
       const result = await performServiceCall();
       dispatch(
        actionCreator(result)
       )
    } catch(e) {

    }
}


const performServiceCall = async () => {
    const serverData = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return serverData;
}