import React from 'react'
import styled from 'styled-components'
import { Heading, Flex, Text, ArrowForwardIcon } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import PurpleWordHeading from '../PurpleWordHeading'
import IconCard, { IconCardData } from '../IconCard'
import PredictionCardContent from './PredictionCardContent'

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

const PredictionCardData: IconCardData = {
  icon: <ArrowForwardIcon width="36px" color="transparent" />,
  background: 'linear-gradient(180deg, #f1f1f4 0%, #f3f3f6 100%);',
  borderColor: '#1c1c1e',
  rotation: '0deg',
}

const WinSection = () => {
  const { theme } = useTheme()

  return (
    <>
      <TransparentFrame isDark={theme.isDark}>
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <Heading textAlign="center" scale="xl" color="#1c1c1e" mb="20px">
            THE&nbsp;TEAM
          </Heading>
          <Flex m="0" pr="42px" mb="24px" flexDirection={['column', null, null, 'row']} maxWidth="1000px" alignItems="center">
            <Flex
              flex="1"
              maxWidth={['275px', null, null, '100%']}
              mr={[null, null, null, '24px']}
              mb={['32px', null, null, '0']}
            >
              <IconCard {...PredictionCardData} bgPath="image_1" title="JR">
                {/* <PredictionCardContent /> */}
                Project Manager, Marketing<br />プロジェクトマネージャー
              </IconCard>
            </Flex>
            <Flex
              flex="1"
              maxWidth={['275px', null, null, '100%']}
              mr={[null, null, null, '24px']}
              mb={['32px', null, null, '0']}
            >
              <IconCard {...PredictionCardData} bgPath="image_5" title="EM">
                {/* <PredictionCardContent/> */}
                Community Relations, Discord<br />コミュニティ関係、不和
              </IconCard>
            </Flex>
            <Flex
              flex="1"
              maxWidth={['275px', null, null, '100%']}
              mr={[null, null, null, '24px']}
              mb={['32px', null, null, '0']}
            >
              <IconCard {...PredictionCardData} bgPath="image_2" title="IMCMPLX">
                {/* <PredictionCardContent/> */}
                Artist, Creator of the 0N1 Force<br />アーティスト、0N1フォースの作成者
              </IconCard>
            </Flex>
          </Flex>
          <Flex m="0" pr="42px" flexDirection={['column', null, null, 'row']} maxWidth="1000px" alignItems="center">
            <Flex
              flex="1"
              maxWidth={['275px', null, null, '100%']}
              mr={[null, null, null, '24px']}
              mb={['32px', null, null, '0']}
            >
              <IconCard {...PredictionCardData} bgPath="image_6" title="CRYPTOSPACES">
                {/* <PredictionCardContent/> */}
                Tech Development<br />技術開発
              </IconCard>
            </Flex>
            <Flex
              flex="1"
              maxWidth={['275px', null, null, '100%']}
              mr={[null, null, null, '24px']}
              mb={['32px', null, null, '0']}
            >
              <IconCard {...PredictionCardData}  bgPath="image_3" title="STRAWBERRY">
                {/* <PredictionCardContent/> */}
                Front-end Design<br />フロントエンドデザイン
              </IconCard>
            </Flex>
            <Flex
              flex="1"
              maxWidth={['275px', null, null, '100%']}
              mr={[null, null, null, '24px']}
              mb={['32px', null, null, '0']}
            >
              <IconCard {...PredictionCardData}  bgPath="image_4" title="CROMAGNUS">
                {/* <PredictionCardContent/> */}
                In-house Illustrator<br />社内イラストレーター
              </IconCard>
            </Flex>
          </Flex>
        </Flex>
      </TransparentFrame>
    </>
  )
}

export default WinSection
