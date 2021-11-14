import React from 'react';
// Styles
import { Wrapper } from './ErrorMessage.styles';

// Types
type ErrorMessageProps = {
    errorMessage?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage = '' }) => (
    <Wrapper>
        <h1>Something went wrong...</h1>

        {errorMessage ? <p>{errorMessage}</p> : null}
    </Wrapper>
);

export default ErrorMessage;
