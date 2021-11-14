import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content, Text } from './HeroImage.styles';

class HeroImage extends React.Component {
    render() {
        return (
            <Wrapper image={this.props.image}>
                <Content>
                    <Text>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.text}</p>
                    </Text>
                </Content>
            </Wrapper>
        );
    }
}

HeroImage.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
};

export default HeroImage;
