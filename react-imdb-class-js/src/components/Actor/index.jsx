import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Image } from './Actor.styles';

class Actor extends React.Component {
    render() {
        return (
            <Wrapper>
                <Image src={this.props.imageUrl} alt="actor-thumb" />
                <h3>{this.props.name}</h3>
                <p>{this.props.character}</p>
            </Wrapper>
        );
    }
}

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string,
};

export default Actor;
