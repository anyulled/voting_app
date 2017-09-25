/**
 * Created by anyulled on 9/12/16.
 */
import {INITIAL_STATE, next, setEntries, vote} from "./core";

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_ENTRIES":
            return setEntries(state, action.entries);
        case "NEXT":
            return next(state);
        case "VOTE":
            return state.update("vote",
                voteState => vote(voteState, action.entry));
        // return vote(state, action.entry);
    }
    return state;
};