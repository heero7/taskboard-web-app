import { alertConstants } from "../constants";

export function alert(state = {}, action) {
    switch(action.type) {
        case alertConstants.SUCCESS:
            return {
                type : "alert-success",
                message : action.message
            };
        case alertConstants.FAILURE:
            return {
                type : "alert-danger",
                message : action.message
            };
        case alertConstants.CLEAR:
            return {};
        default:
            return state;
    }
}