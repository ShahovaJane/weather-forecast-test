import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

function ErrorInputMessage(props) {
    const {message} = props;
    return (
        <p className="error-input-message">{message}</p>
    );
}

ErrorInputMessage.propTypes = {
    message: PropTypes.string,
};

ErrorInputMessage.defaultProps = {
    message: '',
};

export default ErrorInputMessage;



