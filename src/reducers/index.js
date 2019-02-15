import { combineReducers } from "redux";

import { authentication } from "./auth.reducer";
import { registration } from "./register.reducer";
//import { users } from "./users.reducer";
import { alert } from "./alert.reducer";

const rootReducer = combineReducers({
    authentication,
    registration,
    alert
});

export default rootReducer;