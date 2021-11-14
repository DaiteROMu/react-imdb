import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper } from './ErrorMessage.styles';

const ErrorMessage = ({ errorMessage = '' }) => (
    <Wrapper>
        <h1>Something went wrong...</h1>

        {errorMessage ? <p>{errorMessage}</p> : null}
    </Wrapper>
);

ErrorMessage.propTypes = {
    errorMessage: PropTypes.string,
};

export default ErrorMessage;
