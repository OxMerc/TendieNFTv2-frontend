import React from 'react'
import { Heading, TextProps } from '@pancakeswap/uikit'

interface HeadingProps extends TextProps {
  text: string
}

const PurpleWordHeading: React.FC<HeadingProps> = ({ text, ...props }) => {
  const split = text.split(';')
  const firstWord = split[0]
  const remainingWords = split.slice(1).join(' ')
  return (
    <Heading scale="xl" mb="24px" color="#1c1c1e" {...props}>
      <span style={{ color: '#e32e25' }}>{firstWord} </span>
      {remainingWords}
    </Heading>
  )
}

export default PurpleWordHeading
