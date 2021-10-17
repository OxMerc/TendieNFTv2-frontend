import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Card, CardFooter, CardBody, Text, Heading, Box, CardProps } from '@pancakeswap/uikit'

const StyledCard = styled(Card)<{ background: string; rotation?: string }>`
  height: fit-content;
  padding: 1px 1px 4px 1px;
  box-sizing: border-box;
  min-width: 320px;

  ${({ theme }) => theme.mediaQueries.md} {
    ${({ rotation }) => (rotation ? `transform: rotate(${rotation});` : '')}
  }
`

const StyledCardBody = styled(CardBody)<{bgSrc: string}>`
  min-height: 318px;
  background-size:100% 100%;
  background-image:url(${props => props.bgSrc});
`

const IconWrapper = styled(Box)<{ rotation?: string }>`
  position: absolute;
  top: 24px;
  right: 24px;

  ${({ theme }) => theme.mediaQueries.md} {
    ${({ rotation }) => (rotation ? `transform: rotate(${rotation});` : '')}
  }
`

interface IconCardProps extends IconCardData, CardProps {
  children: ReactNode
}

export interface IconCardData {
  icon: ReactNode
  background?: string
  borderColor?: string
  rotation?: string,
  bgPath?: string,
  title?: string
}

const imagePath = '/images/nft-tendie/';

const IconCard: React.FC<IconCardProps> = ({ icon, background, borderColor, rotation, bgPath, title, children, ...props }) => {
  return (
    <StyledCard background={background} borderBackground={borderColor} rotation={rotation} {...props}>
      <StyledCardBody bgSrc={ `${imagePath}${bgPath}.jpeg` }>
        <IconWrapper rotation={rotation}>{icon}</IconWrapper>
      </StyledCardBody>
      <CardFooter>
        <Text color="#2c2c2e" bold fontSize="24px">
          { title }
        </Text>
        {children}
      </CardFooter>
    </StyledCard>
  )
}

export default IconCard
