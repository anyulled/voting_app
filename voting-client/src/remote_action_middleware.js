/**
 * Created by anyulled on 11/12/16.
 */
export default socket => store => next => action => {//eslint-disable-line no-unused-vars
    if (action.meta && action.meta.remote) {
        console.info("in middleware", action);//eslint-disable-line no-console
        socket.emit("action", action);
    }
    return next(action);
};