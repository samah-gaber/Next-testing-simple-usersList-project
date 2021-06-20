import {HYDRATE} from "next-redux-wrapper";

export default (state = {tick: "init"}, action) => {
    switch(action.type) {
        case HYDRATE:
            return {...state, ...action.payload};
        case "TICK":
            return {...state, tick: action.payload}
        default:
            return state
    }
}