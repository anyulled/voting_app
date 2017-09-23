/**
 * Created by anyulled on 7/12/16.
 */
import {expect} from "chai";
import {describe, it} from "mocha";
import {List, Map} from "immutable";

describe("immutability", () => {
    describe("a number", () => {
        const increment = (currentState) => ++currentState;

        it("is immutable", () => {
            const state = 42;
            const nextState = increment(state);

            expect(nextState).to.equal(43);
            expect(state).to.equal(42);
        });
    });

    describe("a list", () => {
        const addMovie = (currentState, movie) => currentState.push(movie);

        it("is immutable", () => {
            const state = List.of("Trainspotting", "28 Days Later");
            const nextState = addMovie(state, "Sunshine");

            expect(nextState).to.equal(List.of(
                "Trainspotting",
                "28 Days Later",
                "Sunshine"));

            expect(state).to.equal(List.of(
                "Trainspotting",
                "28 Days Later"
            ));
        });
    });

    describe("a tree", () => {
        const addMovie = (currentState, movie) => (currentState.update("movies", movies => movies.push(movie)));

        it("is immutable", () => {
            const state = Map({
                movies: List.of("Trainspotting", "28 Days Later")
            });
            const nextState = addMovie(state, "Sunshine");

            expect(nextState).to.equal(Map({
                movies: List.of(
                    "Trainspotting",
                    "28 Days Later",
                    "Sunshine"
                )
            }));
            expect(state).to.equal(Map({
                movies: List.of(
                    "Trainspotting",
                    "28 Days Later"
                )
            }));
        });
    });
});