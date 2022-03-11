import styled from 'styled-components'
import { useText } from 'utils/lang'
import TextButton from 'core/components/TextButton'
import LinkIcon from 'core/components/LinkIcon'
import Link from 'next/link'

export const Hero = () => {
  const t = useText()

  return (
    <FooterWrapper>
      <Column>
        <FirstColumnText>{t('footerHeader')}</FirstColumnText>
      </Column>
      <Column>
        <SecondColumnTitle>{t('footerGoals')}</SecondColumnTitle>
        <Link href="/about">
          <AboutProjButton breakpoint="mobile" as="a" href="/about">
            {t('aboutProject')}
          </AboutProjButton>
        </Link>
      </Column>
      <FooterExtLinksWrapper>
        <Link href="/about">
          <AboutProjButton breakpoint="desktop" as="a" href="/about">
            {t('aboutUs')}
          </AboutProjButton>
        </Link>
        <Spacer />
        <ExtLinkButton
          as="a"
          href="https://forms.gle/2F5S4A52EVWPJym56"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{t('suggestOrgLink')}</span>
          <LinkIcon />
        </ExtLinkButton>
        <ExtLinkButton
          as="a"
          href="https://forms.gle/4rifrxcQ2AVY7v987"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{t('sharedFeedbackLink')}</span>
          <LinkIcon />
        </ExtLinkButton>
        <ExtLinkButton
          as="a"
          href="https://ukrforeignlegion.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{t('joinFormLink')}</span>
          <LinkIcon />
        </ExtLinkButton>
      </FooterExtLinksWrapper>
    </FooterWrapper>
  )
}

export default Hero

const FooterWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  line-height: 1.3;
  flex-wrap: wrap;

  p {
    margin: 0;
  }

  @media (min-width: 768px) {
    padding: 30px 20px;
  }
`

const Column = styled.div`
  width: 100%;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`

const FirstColumnText = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 128%;
`

const SecondColumnTitle = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 14px;
`

const AboutProjButton = styled(TextButton)<{ breakpoint: 'mobile' | 'desktop' }>`
  ${(props) =>
    props.breakpoint === 'desktop'
      ? `
    display: none;

    @media (min-width: 768px) {
      display: inline-flex;
    }
  `
      : ''}

  ${(props) =>
    props.breakpoint === 'mobile'
      ? `
    display: inline-flex;
    width: 100%;
    justify-content: center;
    
    @media (min-width: 768px) {
      display: none;
    }
  `
      : ''}
`

const ExtLinkButton = styled(TextButton).attrs({
  variant: 'external-link',
  size: 'small',
})`
  margin-left: 8px;
  margin-bottom: 24px;

  span {
    display: inline-block;
    margin-right: 4px;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

const FooterExtLinksWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-flow: column nowrap;
  margin-top: 26px;

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    margin-top: 36px;
  }
`

const Spacer = styled.div`
  flex-grow: 1;
`
