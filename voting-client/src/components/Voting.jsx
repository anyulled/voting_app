import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Winner from "./Winner";
import Vote from "./Vote";
import * as actionCreators from "../action_creators";

export class Voting extends React.PureComponent {
    render() {
        return (<div>
            {this.props.winner ?
                <Winner ref="winner" winner={this.props.winner}/> :
                <Vote {...this.props}/>
            }
        </div>);
    }
}

Voting.PropTypes = {
    winner: PropTypes.string,
    pair: PropTypes.any,
    hasVoted: PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        pair: state.getIn(["vote", "pair"]),
        hasVoted: state.get("hasVoted"),
        winner: state.get("winner")
    };
};

export const VotingContainer = connect(
    mapStateToProps,
    actionCreators
)(Voting);