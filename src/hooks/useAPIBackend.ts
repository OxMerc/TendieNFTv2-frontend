import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import axios from 'axios';
import useRefresh from './useRefresh'

export const GetServerURL = () => {
    const baseURL = process.env.REACT_APP_APP_ENV === 'test' ? process.env.REACT_APP_TEST_API_ENDPOINT :process.env.REACT_APP_MAIN_API_ENDPOINT;
    return baseURL;
}

export const useCheckWhiteList = () => {
    const { account } = useWeb3React()
    const { slowRefresh } = useRefresh()
    const [ inWhiteList, setInWhiteList] = useState(false)
    const [ nftCount, setNftCount] = useState(0)


    useEffect(() => {
      const fetchUserData = async () => {
        try {
            const baseURL = GetServerURL();
            const res = await axios.get(`${baseURL}/validate-entry/${account}`);
            global.console.log(`${baseURL}/validate-entry/${account}`)
            global.console.log(res)
            global.console.log("Millisecond", Date.now());
            if(!res.data.status) return;
            setInWhiteList(res.data.whitelist);
            setNftCount(res.data.nftCount);

        } catch (e) {
            // global.console.error(e.response.data);
        }
      }
  
      if (account) {
        fetchUserData()
      }
    }, [account, slowRefresh])
  
    return { inWhiteList, nftCount }
}


const presaleTimestamp = 1631115000000;
const launchTimestamp = 1631116800000;

export const useTimer = () => {
    const [ leftLaunchTime, setLeftLaunchTime] = useState('');
    const [ presaleLaunchTime, setPresaleLaunchTime] = useState('');
    const [clock, setClock] = useState(0)

    useEffect(() => {
        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(async () => {
            const currentTimeStamp = Date.now();
            const leftLaunchTimeAmount = msToTime(launchTimestamp -  currentTimeStamp);
            const leftPresaleTimeAmount = msToTime(presaleTimestamp -  currentTimeStamp);

            setLeftLaunchTime(leftLaunchTimeAmount);
            setPresaleLaunchTime(leftPresaleTimeAmount);

            setClock(clock + 1);
        }, 1000);
        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
    }, [clock]);

    return { leftLaunchTime, presaleLaunchTime};
}

const msToTime = (duration) => {
    if(duration < 0) return "last";
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    const zhours = (hours < 10) ? `0${hours}` : hours;
    const zminutes = (minutes < 10) ? `0${minutes}` : minutes;
    const zseconds = (seconds < 10) ? `0${seconds}` : seconds;
  
    return `${zhours} h ${zminutes} m ${zseconds} s`;
}