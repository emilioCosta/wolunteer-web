import React from 'react';
import { HomePageContainer, CustomIconChevron, Image, WorkInProgressContainer } from './styles';
import logo from '../assets/icone.png';


export const WorkInProgress = () => {
    return <WorkInProgressContainer>
        <b>Work in progress</b>&nbsp;to bring you more&nbsp;<b>information</b>&nbsp;about us.&nbsp;<b>Come back</b>&nbsp;to see it&nbsp;<b>complete</b>&nbsp;and&nbsp;<b>engage</b>&nbsp;in our plans.
    </WorkInProgressContainer>
}

export const HomePage = () => {
    return <HomePageContainer>
        <Image src={logo}/>
        <CustomIconChevron onClick={() => {
            window.scrollBy(0, window.innerHeight);
        }}/>
    </HomePageContainer>
}