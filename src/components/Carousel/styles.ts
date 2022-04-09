import styled from 'styled-components';

const Content = styled.div`
    position: relative;

    & .inner {
        white-space: nowrap;
        transition: all 0.3s ease-in-out;
        margin-bottom: -7px;
    }

    & .button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.white};
        padding: 15px;
        border-radius: 50%;
        font-size: 20px;
        transition: all 0.3s ease-in-out;

        &:hover {
            font-size: 25px;
        }
    }

    & .next {
        left: calc(50% + 25%);
    }

    & .prev {
        left: calc(50% - 25%);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        & .next {
            left: calc(50% + 40%);
        }

        & .prev {
            left: calc(50% - 40%);
        }
    }
`;

export { Content };
