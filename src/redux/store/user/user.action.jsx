import { createActions } from "../../../utils/user.reducer"
import { USER_ACTION_TYPES } from "./user.type"



const setCurrentUser = (user) => {
    createActions({type: USER_ACTION_TYPES.SET_CURRENT_USER , payload: user})
}