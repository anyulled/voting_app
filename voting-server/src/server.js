/**
 * Created by anyulled on 9/12/16.
 */
import Server from "socket.io";

export default function startServer(store) {
    const io = new Server().attach(8090);

    //emit the state of the store whenever it changes
    store.subscribe(
        () => io.emit("state", store.getState().toJS())
    );

    //whenever a client connects
    io.on("connection", (socket) => {
        socket.emit("state", store.getState().toJS());
        //clients emit actions to the store
        socket.on("action", store.dispatch.bind(store));
    });
}