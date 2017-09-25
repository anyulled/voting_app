import {List, Map} from "immutable";

const setState = (state, newState) => state.merge(newState);

const vote = (state, entry) => {
    const currentPair = state.getIn(["vote", "pair"]);
    if (currentPair && currentPair.includes(entry)) {
        return state.set("hasVoted", entry);
    } else {
        return state;
    }
};

const resetVote = (state) => {
    const hasVoted = state.get("hasVoted");
    const currentPair = state.getIn(["vote", "pair"], List());
    if (hasVoted && !currentPair.includes(hasVoted)) {
        return state.remove("hasVoted");
    } else {
        return state;
    }
};

export default (state = Map(), action) => {
    switch (action.type) {
        case "SET_STATE":
            return resetVote(setState(state, action.state));
        case "VOTE":
            return vote(state, action.entry);
        default:
            return state;
    }
};