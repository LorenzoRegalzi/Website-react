import React from 'react'
import { ServicesContainer,ServicesCard, ServicesH1, ServicesWrapper, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
import icon3 from '../../images/svg-3.svg';
import icon2 from '../../images/svg-4.svg';
import icon1 from '../../images/svg-5.svg';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1}/>
                    <ServicesH2>Reduces boring course</ServicesH2>
                    <ServicesP>We help to understand everythings of js.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon2}/>
                    <ServicesH2>Virtual Class</ServicesH2>
                    <ServicesP>We help to understand everythings of js.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3}/>
                    <ServicesH2>Premium benefits</ServicesH2>
                    <ServicesP>We help to understand everythings of js.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
        
    )
}

export default Services;