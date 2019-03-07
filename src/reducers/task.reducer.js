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
        case taskConstants.CREATE_TASK_REQUEST:
            return {};
        case taskConstants.CREATE_TASK_SUCCESS:
            return {
                status : action.status
            };
        case taskConstants.CREATE_TASK_FAILURE:
            return {
                status : action.error
            };
        default:
            return state;
    }
}