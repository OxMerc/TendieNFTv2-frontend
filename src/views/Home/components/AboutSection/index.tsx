import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import web3 from 'web3';
import axios from 'axios';
import { useWeb3React } from '@web3-react/core'
import { Heading, Flex, Text, Button, Card, CardBody, useModal, Input, Skeleton } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useNftContract } from 'hooks/useContract'
import { getNftContract } from 'utils/addressHelpers'
import TxSpinner from 'components/Spinner';
import { GetServerURL, useCheckWhiteList, useTimer } from 'hooks/useAPIBackend';

const StyledButton = styled(Button)`
  border-radius: 4px;
  color: #f4f4f7;
  max-width: 150px;
  background-color: #e51717;
`

const Stats = () => {
  const { t } = useTranslation()
  const [waitTx, setWaitTx] = useState(false);

  const { account } = useWeb3React()
  const nftContractAddress = getNftContract();
  const nftContractInstance = useNftContract(nftContractAddress);

  const { leftLaunchTime, presaleLaunchTime} = useTimer();

  const onMint = async () => {
    setWaitTx(true);
    try {
      const baseURL = "https://chunky-metadata-api.herokuapp.com/api/token/";
      global.console.log(nftContractInstance)
      
      await nftContractInstance.setBaseURI(
        baseURL,
        {
          from : account
        })
      

    } catch( error ){
      global.console.error(error.message);
    }
    setWaitTx(false);
  }
  
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading textAlign="center" scale="xl" color="#1c1c1e" mb="20px">
        ABOUT&nbsp;US
      </Heading>
      <Flex flexDirection={['column', null, null, 'row']}>
        <div style={{ padding: '10px' }}>
          <Text textAlign="center" color="#2c2c2e">
            {t('These Chicken Chunksters were wronged by the Casino Lords in their own different ways.')}
          </Text>
          <Flex flexWrap="wrap">
            <Text textAlign="center" color="#2c2c2e" mb="20px">
              Now they are out to get back what was theirs and no obstacle is too great. KingSwap is the newest decentralized finance (DeFi) liquidity pool platform that is a further and better evolution of UniSwap. In addition to offering off-ramp fiat currency converting solutions to allow users great convenience between the fiat and cryptocurrency worlds, KingSwap is also regulated* in Singapore. KingSwap has also added some new Blockchain community-oriented features to the Uniswap&lsquo;s core design, which will help the offering to boom 💥 and provide user-friendly real-time benefits in terms of price curves and contributor rewards. Our protocol design offers to align incentives for the users by introducing strategies like pool rewards & network effects.
            </Text>
          </Flex>
        </div>
        <div style={{ padding: '10px' }}>
          <Text textAlign="center" color="#2c2c2e">
            {t('これらのチキンチャンクスターは、カジノロードによって独自の方法で不当に扱われました。')}
          </Text>
          <Flex flexWrap="wrap">
            <Text textAlign="center" color="#2c2c2e" mb="20px">
              今、彼らは彼らのものを取り戻すために出かけています、そしてどんな障害も大きすぎません。 KingSwapは、最新の分散型ファイナンス（DeFi）流動性プールプラットフォームであり、UniSwapをさらに進化させたものです。 KingSwapは、ユーザーが法定通貨と暗号通貨の世界の間で非常に便利なオフランプ法定通貨変換ソリューションを提供することに加えて、シンガポールでも規制されています*。 KingSwapはまた、Uniswapのコアデザインにいくつかの新しいBlockchainコミュニティ指向の機能を追加しました。これは、ブームの提供を支援し、価格曲線と貢献者の報酬の点でユーザーフレンドリーなリアルタイムのメリットを提供します。 私たちのプロトコル設計は、プール報酬やネットワーク効果などの戦略を導入することにより、ユーザーのインセンティブを調整することを提供します。
            </Text>
          </Flex>
        </div>
      </Flex>

      <Text textAlign="center" color="#e51717" bold mb="32px">
        {t('Will you join them?')}
      </Text>      
      {
        presaleLaunchTime !== "last" && 
        <div>
          <Text textAlign="center" fontSize="32px" bold color="#1c1c1e"> Market will open in </Text>
          <Text textAlign="center" fontSize="48px" color="red" bold> {presaleLaunchTime} </Text>
        </div>
      }

      {
        presaleLaunchTime === "last" && leftLaunchTime !== "last" && 
        <div>
          <Text textAlign="center" fontSize="32px" bold color="#1c1c1e"> Presale is live! Full launch will open in </Text>
          <Text textAlign="center"fontSize="48px" color="red" bold> {leftLaunchTime} </Text>
        </div>
      }
      {
        // ((inWhiteList && leftLaunchTime !== "last" && presaleLaunchTime === "last") || presaleLaunchTime === "last") &&
        <StyledButton onClick={onMint}>
          Mint
        </StyledButton>
      }
      <TxSpinner isLive={waitTx}/>
    </Flex>
  )
}

export default Stats
