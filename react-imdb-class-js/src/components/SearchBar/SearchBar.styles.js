import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    margin: 0 auto;
    background: var(--medGrey);
    color: var(--white);
    border-radius: 40px;

    img {
        position: absolute;
        left: 15px;
        left: 14px;
        width: 30px;
    }

    input {
        font-size: var(--fontBig);
        position: absolute;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        height: 40px;
        background: transparent;
        color: var(--white);

        :focus {
            outline: none;
        }
    }
`;
