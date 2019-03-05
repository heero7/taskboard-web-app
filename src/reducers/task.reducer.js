import { taskConstants } from "../constants";

export function tasks(state = {}, action) {
    switch (action.type) {
        case taskConstants.GET_ALL_TASK_REQUEST:
            return {};
        case taskConstants.GET_ALL_TASK_SUCCESS:
            return {
                tasks : action.tasks
            };
        case taskConstants.GET_ALL_TASK_FAILURE:
            return {};
        default:
            return state;
    }
}