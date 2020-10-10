import {emitUser} from "../api/api";
import socket from "../api";

/*const userActions = {};
userActions.login = (res) => res;
socket.on("user", (action, data) => {
    if (!userActions.hasOwnProperty(action)) {
        console.error("Action does not exist");
        return;
    }
    const res = userActions[action](data);
    console.log("Bug???");
    console.log(res);
    return res;
});*/

export function authUser(username, password, handler){
    emitUser("login", {
        body: {
            username: username,
            password: password,
        },
    }, handler);
}