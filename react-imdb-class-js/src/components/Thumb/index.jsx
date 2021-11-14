import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Styles
import { Image } from './Thumb.styles';

class Thumb extends React.Component {
    render() {
        return (
            <div>
                {this.props.clickable ? (
                    <Link to={`/${this.props.movieId}`}>
                        <Image src={this.props.image} alt="movie-thumb" />
                    </Link>
                ) : (
                    <Image src={this.props.image} alt="movie-thumb" />
                )}
            </div>
        );
    }
}

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
};

export default Thumb;
