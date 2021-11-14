import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content } from './Grid.styles';

class Grid extends React.Component {
    render() {
        return (
            <Wrapper>
                <h1>{this.props.header}</h1>
                <Content>{this.props.children}</Content>
            </Wrapper>
        );
    }
}

Grid.propTypes = {
    header: PropTypes.string,
    children: PropTypes.array,
};

export default Grid;
