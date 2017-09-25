import React from "react";
import PropTypes from "prop-types";

class Winner extends React.PureComponent {
    render() {
        return <div className="winner">
            Winner is {this.props.winner}!
        </div>;
    }
}

Winner.propTypes = {
    winner: PropTypes.string
};

Winner.defaultProps = {
    winner: ""
};

export default Winner;