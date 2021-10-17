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
import { previewNFTs } from 'config/constants/tendieConstants';
import Art from '../Art'

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
  
  const keys = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading textAlign="center" scale="xl" color="#1c1c1e" mb="20px">
        ART&nbsp;PREVIEW
      </Heading>
      {
        previewNFTs.map((previewNFT, idx) => 
          <Art key={ keys[idx] } artData={previewNFT} />
        )
      }
    </Flex>
  )
}

export default Stats
