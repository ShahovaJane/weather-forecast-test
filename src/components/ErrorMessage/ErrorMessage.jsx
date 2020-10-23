import React from "react";
import PropTypes from 'prop-types';
import './styles.scss';

const ErrorMessage = (props) => {
    const {message} = props;
    return (
        <div className="error-message">
            <p>{message}</p>
        </div>
    );
};

ErrorMessage.propTypes = {
    message: PropTypes.string,
};

ErrorMessage.defaultProps = {
    message: '',
};

export default ErrorMessage;



