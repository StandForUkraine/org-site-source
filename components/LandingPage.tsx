import TopHeader from './TopHeader'
import { ProjectItem } from 'utils/projects'
import Footer from './Footer'
import Hero from './Hero'
import styled from 'styled-components'
import Projects from './Projects'
import FooterSupport from './FooterSupport'
export default function LandingPage({ projects }: { projects: ProjectItem[] }) {
  return (
    <>
      <TopHeader />
      <Page>
        <Hero />
        <Projects projects={projects} />
        <Footer />
        <FooterSupport />
      </Page>
    </>
  )
}

const Page = styled.div`
  padding-top: 60px;
  max-width: 100%;
  width: 1112px;
  margin: auto;
`
