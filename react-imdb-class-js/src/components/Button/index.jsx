import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper } from './Button.styles';

class Button extends React.Component {
    render() {
        return (
            <Wrapper type="button" onClick={this.props.callback}>
                {this.props.text}
            </Wrapper>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func,
};

export default Button;
