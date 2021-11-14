import React from 'react';
// Styles
import { Wrapper, Content } from './Grid.styles';

// Types
type GridProps = {
    header: string;
}

const Grid: React.FC<GridProps> = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);

export default Grid;
