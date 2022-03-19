import styled from 'styled-components'
import { useText } from 'utils/lang'
import { Lang } from 'texts'
import { useLang } from 'core/utils/lang'
import TextButton from 'core/components/TextButton'
import LinkIcon from 'core/components/LinkIcon'
import Link from 'next/link'
import {
  FooterWrapper as FooterWrapperCore,
  Column as FooterColumn,
  FirstColumnText as FirstColumnTextCore,
  SecondColumnTitle as SecondColumnTitleCore,
  AboutProjButton,
  Spacer,
  ExtLinkButton,
  FooterExtLinksWrapper,
} from 'core/components/Footer'

export const Hero = () => {
  const t = useText()
  const lang = useLang() as Lang
  const rootPathname = lang === 'ua' ? '/' : `/${lang}/`
  const contactEmail = process.env.NEXT_PUBLIC_EMAIL

  return (
    <FooterWrapper>
      <Column>
        <FirstColumnText>{t('footerHeader')}</FirstColumnText>
      </Column>
      <Column>
        <Link href={rootPathname + 'about'}>
          <AboutProjButton breakpoint="mobile" as="a" href="/about">
            {t('aboutUs')}
          </AboutProjButton>
        </Link>
        <SecondColumnTitle>{t('footerGoals')}</SecondColumnTitle>
      </Column>
      <FooterExtLinksWrapper>
        <Link href={rootPathname + 'about'}>
          <AboutProjButton breakpoint="desktop" as="a" href="/about">
            {t('aboutUs')}
          </AboutProjButton>
        </Link>
        <Spacer />
        {/* <ExtLinkButton
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
        </ExtLinkButton> */}
        <ContactLinkText>
          {t('contactUs')}:{' '}
          <ContactLink as="a" href={`mailto:${contactEmail}`}>
            {contactEmail}
          </ContactLink>
        </ContactLinkText>
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

const FooterWrapper = styled(FooterWrapperCore)`
  padding: 24px 0 37px;

  @media (max-width: 768px) {
    padding: 24px 16px 37px;
  }
`

const Column = styled(FooterColumn)`
  @media (min-width: 768px) {
    width: 50%;
  }
`

const FirstColumnText = styled(FirstColumnTextCore)`
  font-size: 20px;
  line-height: 128%;
  color: #4f4f4f;
  @media (max-width: 768px) {
    margin-bottom: 14px !important;
  }
`

const SecondColumnTitle = styled(SecondColumnTitleCore)`
  font-size: 14px;
  line-height: 20px;
  color: #333333;

  @media (max-width: 768px) {
    margin-top: 36px;
  }
`

const ContactLink = styled(ExtLinkButton)`
  padding: 0;
`

const ContactLinkText = styled.span`
  color: #828282;
  font-size: 14px;
  line-height: 20px;
`
