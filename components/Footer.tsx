import styled from 'styled-components'
import { useText } from 'utils/lang'
import TextButton from 'core/components/TextButton'
import LinkIcon from 'core/components/LinkIcon'
import Link from 'next/link'
import {
  FooterWrapper,
  Column as FooterColumn,
  FirstColumnText,
  SecondColumnTitle,
  AboutProjButton,
  Spacer,
  ExtLinkButton,
  FooterExtLinksWrapper,
} from 'core/components/Footer'

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
        {/* <Link href="/about">
          <AboutProjButton breakpoint="desktop" as="a" href="/about">
            {t('aboutUs')}
          </AboutProjButton>
        </Link> */}
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

const Column = styled(FooterColumn)`
  @media (min-width: 768px) {
    width: 50%;
  }
`
