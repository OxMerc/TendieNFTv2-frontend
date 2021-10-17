import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text } from '@pancakeswap/uikit'
import { Link } from "react-scroll";

const Wrapper = styled(Flex)`
  position: fixed;
  width: 100%;
  z-index: 10;
  background-color: black;
  color: white;
  height: 70px;
  line-height: 70px;
  float: right;
`

const Topbar = () => {
  const [section, setSection] = useState('home');

  return (
    <Wrapper style={{ display: 'fix' }}>
      <nav role="navigation" className="nav-menu w-nav-menu">
        <Link spy smooth offset={-70} duration={500} to="home" className={`nav-link w-nav-link ${section === 'home' ? 'w--current' : ''}`} onClick={() => setSection('home')}>Home</Link>
        <Link spy smooth offset={-70} duration={500} to="about" className={`nav-link w-nav-link ${section === 'about' ? 'w--current' : ''}`} onClick={() => setSection('about')}>About</Link>
        <Link spy smooth offset={-70} duration={500} to="story" className={`nav-link w-nav-link ${section === 'story' ? 'w--current' : ''}`} onClick={() => setSection('story')}>Story</Link>
        <Link spy smooth offset={-70} duration={500} to="preview" className={`nav-link w-nav-link ${section === 'preview' ? 'w--current' : ''}`} onClick={() => setSection('preview')}>Preview</Link>
        <Link spy smooth offset={-70} duration={500} to="team" className={`nav-link w-nav-link ${section === 'team' ? 'w--current' : ''}`} onClick={() => setSection('team')}>Team</Link>
      </nav>
    </Wrapper>
  )
}

export default Topbar
