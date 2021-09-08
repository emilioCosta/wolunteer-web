import styled from 'styled-components';
import { IconChevron } from '../components/IconChevron';

export const HomePageContainer = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(white, #0AC2A1);
    justify-content: center;
    align-items: center;
`;

export const WorkInProgressContainer = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #0AC2A1;
    justify-content: center;
    align-items: center;
    color: rgb(0, 0, 78);
    font-size: 24px;
`;

export const Image = styled.img`
    object-fit: contain;
    width: 100vw;
    height:30vh;
`;

export const CustomIconChevron = styled(IconChevron)`
    position: absolute;
    bottom: 32px;
    border-right: 4px solid rgb(0, 0, 78);
    border-bottom: 4px solid rgb(0, 0, 78);

    &:hover {
        border-right: 6px solid rgb(0, 0, 78);
        border-bottom: 6px solid rgb(0, 0, 78);
        width: 15px;
        height: 15px;
    }
`;