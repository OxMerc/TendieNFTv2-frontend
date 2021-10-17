import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Text } from '@pancakeswap/uikit'; 

const CoinIcon = '/images/tokens/TENDIE.svg'
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LogoSvg = styled.img`
    width: 64px;
    height: 64px;
    align-items: center;
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
`;

const SpinWrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: #55555533;
    backdrop-filter: blur(10px);
    z-index: 9999999;
    color: #E32E25;
    font-size: bold;
`;

// const Span = styled.span`
//   margin: 20px;
// `;

const StyledText = styled(Text)`
  margin: 20px;
`

const TxSpinner = ({ isLive }) => {
    return (
        isLive ?
            <SpinWrapper>
              
                <LogoSvg src={window.location.origin+CoinIcon}/>
                <StyledText color="contrast">Waiting for transaction ...</StyledText>
              
            </SpinWrapper>
        : <></>
    )
}

export default TxSpinner;  