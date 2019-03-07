import { taskConstants } from "../constants/task.constants";
import { taskService } from "../services";

export const taskActions = {
    getAll,
    create
};

function getAll() {
    return dispatch => {
        dispatch(request);

        taskService.getAll()
            .then((tasks) => {
                dispatch(success(tasks.tasks));
            },
            error => {
                dispatch(failure(error.toString()));
            }
        );
    };

    // eslint-disable-next-line
    function request(tasks) { return { type: taskConstants.GET_ALL_TASK_REQUEST, tasks }};
    // eslint-disable-next-line
    function success(tasks) { return { type: taskConstants.GET_ALL_TASK_SUCCESS, tasks }};
    // eslint-disable-next-line
    function failure(error) { return { type: taskConstants.GET_ALL_TASK_FAILURE, error }};
}

function create(task) {
    return dispatch => {
        dispatch(request);

        taskService.create(task)
            .then(() => {
                dispatch(success("Success"));
            },
            error => {
                dispatch(failure(error.toString()));
            }
        );
    };

    // eslint-disable-next-line
    function request() { return { type: taskConstants.GET_ALL_TASK_REQUEST, status : "Requesting to create task" }};
    // eslint-disable-next-line
    function success() { return { type: taskConstants.GET_ALL_TASK_SUCCESS, status : "Success" }};
    // eslint-disable-next-line
    function failure(error) { return { type: taskConstants.GET_ALL_TASK_FAILURE, error }};
}