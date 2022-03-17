// import { useLang } from 'core/utils/lang'
import { useText } from 'utils/lang'
import { Page, HeroWrapper } from 'core/components/About'
import { HeroHeader, HeroText as coreHeroText } from './Hero'
import TopHeader from 'components/TopHeader'
import Footer from 'components/Footer'
import FooterSupport from 'components/FooterSupport'
import Langs from 'components/Langs'
import styled from 'styled-components'
import AboutTeamItem from 'core/components/AboutTeamItem'
import Button from 'core/components/Button'
import AboutPress from './AboutPress'

export default function About() {
  const t = useText()
  // const lang = useLang()
  return (
    <>
      <TopHeader />
      <Page>
        {/* <Langs /> */}
        <br />
        <HeroWrapper>
          <HeroHeader>{t('aboutHeader')}</HeroHeader>
          <HeroText>{t('aboutHeaderText1')}</HeroText>
        </HeroWrapper>

        <PointsWrapper>
          <PointsHeader>{t('aboutPointHeader')}</PointsHeader>
          <PointsList>
            <PointsListItem>{t('aboutPointText')}</PointsListItem>
            <PointsListItem>{t('aboutPointText1')}</PointsListItem>
            <PointsListItem>{t('aboutPointText2')}</PointsListItem>
            <PointsListItem>{t('aboutPointText3')}</PointsListItem>
            <PointsListItem>{t('aboutPointText4')}</PointsListItem>
          </PointsList>
        </PointsWrapper>

        {/* <AboutTeamWrapper>
          <AboutBlockTitle>{t('aboutTeamHeader')}</AboutBlockTitle>
          {teamMembers.map((member, i) => (
            <AboutTeamItem key={i} member={member} />
          ))}
        </AboutTeamWrapper>

        <JoinTeamWrapper>
          <JoinTeamText>{t('joinTeamHeader')}</JoinTeamText>
          <Button>{t('joinTeamBtn')}</Button>
        </JoinTeamWrapper> */}

        <AboutBlockTitle>{t('aboutPressHeader')}</AboutBlockTitle>
        <AboutPress />

        <Footer />
        <FooterSupport />
      </Page>
    </>
  )
}

const teamMembers = [
  {
    name: 'Mikola Parfenyuck',
    position: 'leading developer',
    avatar: '/team/team_1.png',
    links: {
      twitter: 'twitter.com',
      linkedIn: 'linkedin.com',
    },
    description:
      'Software developer and data scientist, born and lives in Rivne. His specialization is computer vision for satellite images. He’s trying to help his homeland.',
  },
  {
    name: 'Valeriia Sapega',
    position: 'coordinator',
    avatar: '/team/team_2.png',
    links: {
      linkedIn: 'linkedin.com',
      viber: 'viber.com',
      telegram: 'tg.com',
    },
    description:
      'Russian-speaking Ukrainian born in Odessa, based in Kyiv until the war started. Past hobbies: reading, classical music, piano. New hobbies: surviving, charity, military shopping.',
  },
  {
    name: 'Sergii Knyr',
    position: 'coordinator',
    avatar: '/team/team_3.png',
    links: {
      linkedIn: 'linkedin.com',
      viber: 'viber.com',
      telegram: 'tg.com',
    },
    description:
      'Product manager & consultant from Kyiv. He’s into startups, long distance swimming, and road trips on motobike.',
  },
  {
    name: 'Anastasiia Pogorielova',
    position: 'content manager',
    avatar: '/team/team_4.png',
    links: {
      facebook: 'facebook.com',
      instagram: 'instagram.com',
    },
    description:
      'Kyivan, project manager & ecological activist. She loves dogs, swimming, and making her city better.',
  },
]

const AboutTeamWrapper = styled.div``

const JoinTeamWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`

const JoinTeamText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 128%;
  color: #4f4f4f;

  @media (min-width: 768px) {
    margin-right: 56px;
  }
`

const HeroText = styled(coreHeroText)`
  max-width: 720px;
  margin: 16px auto;
  color: #4f4f4f;
`
const PointsWrapper = styled.div`
  display: flex;
  border-top: 1px solid #e0e0e0;
  flex-direction: column;
  padding: 40px 16px 0;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 40px 0 0;
  }
`

const PointsHeader = styled(coreHeroText)`
  flex: 1 1 50%;
  text-align: left;
  color: #000000;
`

const PointsList = styled.div`
  flex: 1 1 50%;

  @media (min-width: 768px) {
    margin-left: 40px;
  }
`

const PointsListItem = styled.div`
  font-size: 16px;
  line-height: 140%;
  color: #4f4f4f;
  margin: 12px 0px;

  @media (min-width: 768px) {
    &:first-child {
      margin-top: 0;
    }
  }
`

const AboutBlockTitle = styled.h3`
  font-weight: 900;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
  padding: 12px 8px;
  margin: 0 0 16px;
  border-bottom: 1px solid #e0e0e0;

  @media (min-width: 768px) {
    padding: 12px 0;
  }
`
