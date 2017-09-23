/**
 * Created by anyulled on 9/12/16.
 */
import {Map, fromJS} from "immutable"
import {expect} from "chai"
import makeStore from "../src/store"
import {describe} from "mocha";

describe("store", () => {
    it("is a Redux store configured with the correct reducer", () => {
        const store = makeStore();
        expect(store.getState()).to.equal(Map());

        store.dispatch({
            type: "SET_ENTRIES",
            entries: ["Trainspotting", "28 Days Later"]
        });

        expect(store.getState()).to.equal(fromJS({
            entries: ["Trainspotting", "28 Days Later"]
        }));
    });
});