import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styles
import { Wrapper, Content } from './BreadCrumb.styles';

class BreadCrumb extends React.Component {
    render() {
        return (
            <Wrapper>
                <Content>
                    <Link to="/">
                        <span>Home</span>
                    </Link>

                    <span>|</span>

                    <span>{this.props.movieTitle}</span>
                </Content>
            </Wrapper>
        );
    }
}

BreadCrumb.propTypes = {
    movieTitle: PropTypes.string,
};

export default BreadCrumb;
