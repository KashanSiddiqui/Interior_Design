// import { EVENT_DETAILS } from "../actions/event-actions";
import { SINGLE_PROJECT_DATA } from "../actions/root.action";

const INITIAL_STATE = {
project_data : {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SINGLE_PROJECT_DATA : 
        console.log(action.payload)
        return({
            project_data : action.payload
        })
        default: 
        return state
    }
}