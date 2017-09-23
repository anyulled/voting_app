/**
 * Created by anyulled on 11/12/16.
 */
export function setState(state) {
    return {
        type: "SET_STATE",
        state
    };
}

export function vote(entry) {
    return {
        meta: {remote: true},
        type: "VOTE",
        entry
    };
}

export function next() {
    return {
        meta: {remote: true},
        type: "NEXT"
    };
}