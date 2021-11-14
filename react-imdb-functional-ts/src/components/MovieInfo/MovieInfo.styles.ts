import styled from 'styled-components';

// Config
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

// Types
type MovieInfoProps = {
    backdrop_path: string;
}

export const Wrapper = styled.div<MovieInfoProps>`
    background: ${({ backdrop_path }) =>
        backdrop_path
            ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path})`
            : '#000'};
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo {
        from {
            opacity: 0;
        }
        to {
            opacity: 100%;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0,0,0,0.7);
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        display: block;
        max-height: none;
    }
`;

export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    color: var(--white);
    overflow: hidden;

    .rating-directors {
        display: flex;
        justify-content: start;
    }
    
    .score {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        background: #fff;
        color: #000;
        font-weight: 800;
        border-radius: 50%;
        margin: 0;
    }

    .director {
        margin: 0 0 0 40px;
        
        p {
            margin: 0;
        }
    }

    h1 {
        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
`;
