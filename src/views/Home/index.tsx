import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
// import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
// import Container from 'components/Layout/Container'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import StorySection from './components/StorySection'
import TeamSection from './components/TeamSection'
import PreviewSection from './components/PreviewSection'
// import MetricsSection from './components/MetricsSection'
// import WinSection from './components/WinSection'
// import UserBanner from './components/UserBanner'
import Footer from './components/Footer'
import Topbar from './components/Topbar'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;
  height: 100vh;
  background-image: url(/images/neo-tokyo.jpg);
  background-size: cover;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  // const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  return (
    <>
      <Topbar />
      <StyledHeroSection
        innerProps={{ style: { margin: 'auto', width: '100%' } }}
        index={2}
        hasCurvedDivider={false}
        id='home'
      >
        <Hero />
      </StyledHeroSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #0B4576 0%, #091115 100%)'
            : 'linear-gradient(180deg, #f4f4f7 0%, #f4f4f7 100%)'
        }
        index={2}
        hasCurvedDivider={false}
        id='about'
      >
        {/* <MetricsSection /> */}
        <AboutSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #0B4576 0%, #091115 100%)'
            : 'linear-gradient(180deg, #f4f4f7 0%, #f4f4f7 100%)'
        }
        index={2}
        hasCurvedDivider={false}
        id='story'
      >
        {/* <MetricsSection /> */}
        <StorySection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #0B4576 0%, #091115 100%)'
            : 'linear-gradient(180deg, #f4f4f7 0%, #f4f4f7 100%)'
        }
        index={2}
        hasCurvedDivider={false}
        id='preview'
      >
        <PreviewSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #0B4576 0%, #091115 100%)'
            : 'linear-gradient(180deg, #f4f4f7 0%, #f4f4f7 100%)'
        }
        index={2}
        hasCurvedDivider={false}
        id='team'
      >
        {/* <WinSection /> */}
        <TeamSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #0B4576 0%, #091115 100%)'
            : 'linear-gradient(180deg, black 0%, #e51717 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />
      </PageSection>
    </>
  )
}

export default Home
