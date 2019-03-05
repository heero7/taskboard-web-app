import { combineReducers } from "redux";

import { authentication } from "./auth.reducer";
import { registration } from "./register.reducer";
import { tasks } from "./task.reducer";
//import { users } from "./users.reducer";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({
    authentication,
    registration,
    alert,
    tasks,
});

export default rootReducer;