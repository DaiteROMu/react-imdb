import React from 'react';
import PropTypes from 'prop-types';

// Helpers
import { calcTime, convertMoney } from '../../helpers';

// Styles
import { Wrapper, Content } from './MovieInfoBar.styles';

class MovieInfoBar extends React.Component {
    render() {
        return (
            <Wrapper>
                <Content>
                    <div className="column">
                        <p>Running time: {calcTime(this.props.time)}</p>
                    </div>

                    <div className="column">
                        <p>Budget: {convertMoney(this.props.budget)}</p>
                    </div>

                    <div className="column">
                        <p>Revenue: {convertMoney(this.props.revenue)}</p>
                    </div>
                </Content>
            </Wrapper>
        );
    }
}

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number,
};

export default MovieInfoBar;
