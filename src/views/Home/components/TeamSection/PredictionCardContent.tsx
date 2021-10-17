import React from 'react'
// import styled from 'styled-components'
import { Flex, Text, Heading } from '@pancakeswap/uikit'
// import { useTranslation } from 'contexts/Localization'
// import { formatLocalisedCompactNumber } from 'utils/formatBalance'
// import useRefresh from 'hooks/useRefresh'
// import useIntersectionObserver from 'hooks/useIntersectionObserver'
// import { getTotalWon } from 'state/predictions/helpers'
// import { usePriceBnbBusd } from 'state/farms/hooks'

// const StyledLink = styled(Link)`
//   width: 100%;
//   color: #F4F4F7;
// `

// const StyledButton = styled(Button)`
//   background: #F4F4F7;
// `
const PredictionCardContent = () => {
  

  return (
    <>
      <Flex flexDirection="column" mt="48px">
        <Heading color="#2c2c2e" my="8px" scale="xl" bold>
            NFT
        </Heading>
        <Text color="#2c2c2e" mb="24px" bold fontSize="16px">
          0.08 ETH
        </Text>
      </Flex>
    </>
  )
}

export default PredictionCardContent
