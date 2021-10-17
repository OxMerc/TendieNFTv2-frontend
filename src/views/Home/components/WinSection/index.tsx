import React from 'react'
import styled from 'styled-components'
import { Flex, Text, ArrowForwardIcon } from '@pancakeswap/uikit'
// import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import PurpleWordHeading from '../PurpleWordHeading'
import IconCard, { IconCardData } from '../IconCard'
// import PredictionCardContent from './PredictionCardContent'
// import LotteryCardContent from './LotteryCardContent'
// import CompositeImage from '../CompositeImage'

const TransparentFrame = styled.div<{ isDark: boolean }>`
  background: transparent;
  padding: 16px;
  border: transparent;
  box-sizing: border-box;
  backdrop-filter: blur(12px);
  border-radius: 72px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 40px;
  }
`

// const BgWrapper = styled.div`
//   z-index: -1;
//   overflow: hidden;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0px;
//   left: 0px;
// `

// const BottomLeftImgWrapper = styled(Flex)`
//   position: absolute;
//   left: 0;
//   bottom: -64px;
//   max-width: 192px;

//   ${({ theme }) => theme.mediaQueries.md} {
//     max-width: 100%;
//   }
// `

// const TopRightImgWrapper = styled(Flex)`
//   position: absolute;
//   right: 0;
//   top: -64px;

//   max-width: 192px;

//   ${({ theme }) => theme.mediaQueries.md} {
//     max-width: 100%;
//   }
// `

const PredictionCardData: IconCardData = {
  icon: <ArrowForwardIcon width="36px" color="transparent" />,
  background: 'linear-gradient(180deg, #f1f1f4 0%, #f3f3f6 100%);',
  borderColor: '#1c1c1e',
  rotation: '0deg',
}

// const LotteryCardData: IconCardData = {
//   icon: <ArrowForwardIcon color="transparent" width="36px" />,
//   background: 'linear-gradient(180deg, #f1f1f4 0%, #f3f3f6 100%);',
//   borderColor: '#1c1c1e',
//   rotation: '0deg',
// }

const WinSection = () => {
  // const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <>
      <TransparentFrame isDark={theme.isDark}>
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <PurpleWordHeading textAlign="center" text="Who's in?; Meet some of the crew." />
          <Text color="#1c1c1e" mb="40px">They&apos;re having so much fun it&apos;s illegal.</Text>
          <Flex m="0" pr="42px" mb="24px" flexDirection={['column', null, null, 'row']} maxWidth="1000px" alignItems="center">
            <Flex
              flex="1"
              maxWidth={['275px', null, null, '100%']}
              mr={[null, null, null, '24px']}
              mb={['32px', null, null, '0']}
            >
              <IconCard {...PredictionCardData} bgPath="image_1" title="ChunkyChicken #???">
                {/* <PredictionCardContent /> */}
              </IconCard>
            </Flex>
            <Flex
              flex="1"
              maxWidth={['275px', null, null, '100%']}
              mr={[null, null, null, '24px']}
              mb={['32px', null, null, '0']}
            >
              <IconCard {...PredictionCardData} bgPath="image_5" title="ChunkyChicken #???">
                {/* <PredictionCardContent/> */}
              </IconCard>
            </Flex>
            {/* <Flex flex="1" maxWidth={['275px', null, null, '100%']} mr={[null, null, null, '24px']} mb={['32px', null, null, '0']}>
              <IconCard {...LotteryCardData}>
                <LotteryCardContent />
              </IconCard>
            </Flex> */}
            <Flex
              flex="1"
              maxWidth={['275px', null, null, '100%']}
              mr={[null, null, null, '24px']}
              mb={['32px', null, null, '0']}
            >
              <IconCard {...PredictionCardData} bgPath="image_2" title="ChunkyChicken #???">
                {/* <PredictionCardContent/> */}
              </IconCard>
            </Flex>
          </Flex>
          <Flex m="0" pr="42px" flexDirection={['column', null, null, 'row']} maxWidth="1000px">
            <Flex
              flex="1"
              maxWidth={['275px', null, null, '100%']}
              mr={[null, null, null, '24px']}
              mb={['32px', null, null, '0']}
            >
              <IconCard {...PredictionCardData} bgPath="image_6" title="ChunkyChicken #???">
                {/* <PredictionCardContent/> */}
              </IconCard>
            </Flex>
            <Flex
              flex="1"
              maxWidth={['275px', null, null, '100%']}
              mr={[null, null, null, '24px']}
              mb={['32px', null, null, '0']}
            >
              <IconCard {...PredictionCardData}  bgPath="image_3" title="ChunkyChicken #???">
                {/* <PredictionCardContent/> */}
              </IconCard>
            </Flex>
            {/* <Flex flex="1" maxWidth={['275px', null, null, '100%']} mr={[null, null, null, '24px']} mb={['32px', null, null, '0']}>
              <IconCard {...LotteryCardData}>
                <LotteryCardContent />
              </IconCard>
            </Flex> */}
            <Flex
              flex="1"
              maxWidth={['275px', null, null, '100%']}
              mr={[null, null, null, '24px']}
              mb={['32px', null, null, '0']}
            >
              <IconCard {...PredictionCardData}  bgPath="image_4" title="ChunkyChicken #???">
                {/* <PredictionCardContent/> */}
              </IconCard>
            </Flex>
          </Flex>
        </Flex>
      </TransparentFrame>
    </>
  )
}

export default WinSection
