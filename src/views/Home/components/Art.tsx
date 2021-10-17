import React from 'react'
import { Flex } from '@pancakeswap/uikit'

interface Description {
  lang1: string
  lang2: string
}

interface ArtDataProps {
  path: string
  description: Description
}

interface ArtProps {
  artData: ArtDataProps
}

const Art:React.FC<ArtProps> = ({ artData }) => {

  return (
    <Flex mb='10px' flexDirection={['column', null, null, 'row']}>
      <div style={{ padding: '10px', margin: 'auto' }}>
        { artData.description.lang1}
      </div>
      <div style={{ padding: '10px', margin: 'auto' }}>
        { artData.description.lang2}
      </div>
      <div className='artimage'>
        <img src={ `/images/nft-tendie/${ artData.path}` } alt="" />
      </div>
    </Flex>
  )
}

export default Art
