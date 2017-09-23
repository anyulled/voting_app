import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Winner from "./Winner";
import * as actionCreators from "../action_creators";

export class Results extends React.PureComponent {
    constructor(props) {
        super(props);
        this.getPair = this.getPair.bind(this);
        this.getVotes = this.getVotes.bind(this);
    }

    getPair() {
        return this.props.pair || [];
    }

    getVotes(entry) {
        if (this.props.tally && this.props.tally.has(entry)) {
            return this.props.tally.get(entry);
        }
        return 0;
    }

    render() {
        return (
            this.props.winner ?
                <Winner ref="winner" winner={this.props.winner}/> :
                <div className="results">
                    <div className="tally">
                        {this.getPair().map(entry =>
                            <div key={entry} className="entry">
                                <h1>{entry}</h1>
                                <div className="voteCount">
                                    {this.getVotes(entry)}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="management">
                        <button ref="next" className="next" onClick={this.props.next}>
                            Next
                        </button>
                    </div>
                </div>);
    }
}

Results.propTypes = {
    next: PropTypes.func,
    pair: PropTypes.any,
    tally: PropTypes.object,
    winner: PropTypes.string
};

Results.defaultProps = {
    pair: {},
    tally: {},
    winner: "",
    next: () => {
        console.info("next");//eslint-disable-line no-console
    }
};

const mapStateToProps = (state) => {
    return {
        pair: state.getIn(["vote", "pair"]),
        tally: state.getIn(["vote", "tally"]),
        winner: state.get("winner")
    }
};

export const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);