import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import web3 from 'web3';
import axios from 'axios';
import { useWeb3React } from '@web3-react/core'
import { Heading, Flex, Text, Button, Card, CardBody, useModal, Input, Skeleton } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useNftContract } from 'hooks/useContract'
import { getNftContract } from 'utils/addressHelpers'
import useToast from 'hooks/useToast'
import TxSpinner from 'components/Spinner';
import { useGetETHBalance } from 'hooks/useTokenBalance';
import { GetServerURL, useCheckWhiteList, useTimer } from 'hooks/useAPIBackend';

const StyledButton = styled(Button)`
  border-radius: 4px;
  color: #f4f4f7;
  max-width: 150px;
  background-color: #e51717;
`

const StyledCard = styled(Card)`
  width: 90%;
  max-width: 450px;
  max-height: 450px;
  z-index: 999999;
`;

const StyledBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin-top: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  text-align: right;
`;

const StyledRow = styled.div`
  width: 90%;
  padding-bottom: 5px;
  border-bottom: 1px dashed #e2e2e2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const MAX_MINT_BY = 5;

// const MintModal = () => {
//   const [waitTx, setWaitTx] = useState(false);

//   const [amount, setAmount] = useState('');
//   const { account } = useWeb3React()
//   const [isSufficient, setIsSufficient] = useState(false);
//   const [errMsg, setErrMsg] = useState('')
//   const nftContractAddress = getNftContract();
//   const nftContractInstance = useNftContract(nftContractAddress);
//   const { toastError, toastSuccess } = useToast()
//   const { balance } = useGetETHBalance();
//   const { nftCount } = useCheckWhiteList();

//   /**
//    * Request Arts
//    */
//   const requestArts = async (URI: string) => {
//     try {
//       const response = await axios.get(URI).catch();
//       return response.data;
//     } catch (error) {
//       global.console.log('Error', error.response)
//       return error.response.data;
//     }
//   }

//   // validation check
//   useEffect(() => {
//     let chk = true;

//     const validateBalance = () => {
//       const totalPrice = parseFloat(amount.toString()) * 0.08;
//       const urBalance = parseFloat(web3.utils.fromWei(balance?.toString()))
//       if(!chk) return;

//       if(totalPrice > urBalance)
//         setIsSufficient(true)
//       else
//         setIsSufficient(false)
//     }

//     validateBalance();
//     return () => {
//       chk = false;
//     }
//   }, [amount, balance])
  
//   /**
//    * Mint Action
//    */
//   const handleMintNft = async () => {
//     try {
//       if(!amount || amount === '') {
//         toastError("Mint amount cannot be zero");
//         return;
//       }
//       const reg = /^\d+$/;
//       if(reg.test(amount.toString()) === false) {
//         toastError("Mint amount should be integer");
//         return;
//       }

//       if(parseInt(amount) > MAX_MINT_BY) {
//         toastError(`Max mint amount is ${MAX_MINT_BY}`);
//         return;
//       }

//       // const baseURL = GetServerURL();
//       // const apiURL = `${ baseURL }/generate-nft/${amount}?address=${account}`;
//       setWaitTx(true);
//       // const res = await requestArts(apiURL);
//       // global.console.log(res)

//       // if(res.status === false) {
//       //   if(res.whitelist === false)
//       //     setErrMsg("You are not listed in whitelist for presale");
//       //   if(res.message && res.message !== '')
//       //     setErrMsg(res.message)
//       //   return;
//       // }
      
//       // global.console.log(nftContractInstance)
//       // await nftContractInstance.batchCreate(
//       //   res.cids,
//       //   amount.toString(),
//       // {
//       //   from : account
//       // })

//       const ethAmount = parseFloat(amount.toString()) * 0.08;
//       global.console.log("EthAmount", ethAmount)
//       await nftContractInstance.mint(
//         account,
//         amount.toString(),
//       {
//         from : account,
//         value: web3.utils.toWei(ethAmount.toString())
//       })
//       toastSuccess("Congratulations! Good Luck.");

//       setAmount('0');
//     } catch(e) {
//       global.console.log(e)
//       toastError(`Transaction failed. ${e.message}`);
//     } finally {
//       setWaitTx(false);
//     }
//   }


//   return (
//     <StyledCard>
//       <StyledBody>
//         <Heading mt="10px" mb="10px">
//           Mint Chunky Chickens.
//         </Heading>
//         <Text small>
//           Please input the amount of Chunky Chickens you wish to mint. The max amount you can mint is { MAX_MINT_BY }.
//         </Text>
//         <StyledInput type="text"  scale="lg" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        
//         {
//           isSufficient && 
//           <Text small color="red">
//             Insufficient Balance
//           </Text>
//         }

//         <StyledRow>
//           <Text small>
//             Chunky Chicken price
//           </Text>
//           <Text small>
//             0.08 ETH
//           </Text>
//         </StyledRow>

//         <StyledRow>        
//           <Text small>
//             Total price
//           </Text>      
//           <Text small>
//             { amount !== null && amount !== '' ? (parseFloat(amount.toString()) * 0.08).toFixed(3) : '0.00'} ETH.
//           </Text>
//         </StyledRow>

//         <StyledRow>        
//           <Text small>
//             Your Chunky Chickens amount
//           </Text>      
//           <Text small>
//             { nftCount } 
//           </Text>
//         </StyledRow>

//         <StyledRow>
//           <Text small>
//             Your balance
//           </Text>
//           <Text small>
//             { parseFloat(web3.utils.fromWei(balance?.toString())).toFixed(3) } ETH.
//           </Text>
//         </StyledRow>
//         {
//           errMsg !== '' &&
//           ( <Text small color="red" mt="8px" textAlign="center">
//               { errMsg }
//             </Text> )
//         }
//         <StyledButton mt="8px" onClick={ handleMintNft } disabled={isSufficient ? "disabled" : ""}> Mint </StyledButton>
//       </StyledBody>
//       <TxSpinner isLive={waitTx}/>
//     </StyledCard>
//   );
// }

const Stats = () => {
  const { t } = useTranslation()
  // const { inWhiteList } = useCheckWhiteList();
  // const [onMint] = useModal(<MintModal />);
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
    <Flex justifyContent="center" alignItems="center" flexDirection="column" mt="64px">
      <Heading textAlign="center" scale="xl" color="#1c1c1e">
        {t('The house took them.')}
      </Heading>
      <Heading textAlign="center" scale="xl" mb="32px" color="#e51717">
        {t('Now they are taking the house.')}
      </Heading>
      <Text textAlign="center" color="#2c2c2e">
        {t('These Chicken Chunksters were wronged by the Casino Lords in their own different ways.')}
      </Text>
      <Flex flexWrap="wrap">
        <Text display="inline" textAlign="center" color="#2c2c2e" mb="20px">
          Now they are out to get back what was theirs and no obstacle is too great.
        </Text>
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
