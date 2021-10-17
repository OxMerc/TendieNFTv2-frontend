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
        THE&nbsp;STORY
      </Heading>
      <Flex flexDirection={['column', null, null, 'row']}>
        <div style={{ marginTop: '20px', textAlign: 'center', padding: '10px' }}>
          LIFE IN THE ETHEREAL ENCLAVE WAS PEACEFUL AND PROSPEROUS. RULE UNDER THE EMPEROR GRANTED ETERNAL LIFE; INFINITE LEISURE&nbsp;FOR MUSIC, ARTS, AND POETRY. <br /><br />FOR MANY THIS WAS BLISS, BUT WHEN THE EMPEROR SUDDENLY DIED WITHOUT AN HEIR, EVERYTHING COLLAPSED. <br /><br />WHAT WAS ONCE EVERLASTING HAS NOW BEEN CONDENSED TO A MERE 7,777 HOURS.<br /><br />NOW, GATHERING MEANS FOR SURVIVAL AS SOCIETY CRUMBLES, THE 0N1 FACE THEIR GREATEST ENEMIES:&nbsp;THEMSELVES.<span><strong>‍</strong></span><br />
        </div>
        <div style={{ marginTop: '20px', textAlign: 'center', padding: '10px' }}>
          エーテルの飛び地での生活は平和で繁栄していました。 皇帝が与えた永遠のいのちの下での規則; 音楽、芸術、詩のための無限のレジャー。<br /><br />多くの人にとって、これは至福でしたが、皇帝が相続人なしで突然死んだとき、すべてが崩壊しました。<br /><br />かつては永遠だったものが、今ではわずか7,777時間に凝縮されています。<br /><br />今、社会の崩壊として生き残るための手段を集めることで、0N1は彼らの最大の敵に直面します：彼ら自身。<span><strong>‍</strong></span><br />
        </div>
      </Flex>
    </Flex>
  )
}

export default Stats
