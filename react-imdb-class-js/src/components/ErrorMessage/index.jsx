import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper } from './ErrorMessage.styles';

class ErrorMessage extends React.Component {
    render() {
        return (
            <Wrapper>
                <h1>Something went wrong...</h1>

                {this.props.errorMessage ? (
                    <p>{this.props.errorMessage}</p>
                ) : null}
            </Wrapper>
        );
    }
}

ErrorMessage.defaultProps = {
    errorMessage: '',
};

ErrorMessage.propTypes = {
    errorMessage: PropTypes.string,
};

export default ErrorMessage;
