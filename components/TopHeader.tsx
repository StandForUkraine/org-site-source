import Link from 'next/link'
import styled from 'styled-components'
import { useLang, useText } from 'core/utils/lang'
import TextButton from 'core/components/TextButton'
import OutIcon from 'core/assets/out.svg'

export const TopHeader = () => {
  const { lang } = useLang()
  const t = useText()

  const rootPathname = lang === 'en' ? '/' : `/${lang}`

  return (
    <TopHeaderWrapper>
      <Link href={rootPathname} passHref>
        <TopNavLink>
          <TopHeaderFlag
            srcSet={`/logo.png 1x,
            /ua-flag@2x.png`}
            width={78}
            height={72}
          />
        </TopNavLink>
      </Link>

      <TopHeaderTitle>
        <Link href={rootPathname} passHref>
          <TopNavLink>
            {t('siteName')}
            <TopNavSubLink>{t('projects')}</TopNavSubLink>
          </TopNavLink>
        </Link>
      </TopHeaderTitle>

      <TopLinksWrapper>
        <Link href={rootPathname} passHref>
          <TextButton>{t('aboutUs')}</TextButton>
        </Link>
        <Link href={rootPathname} passHref>
          <TextButton>
            {t('supportFinancially')}
            <OutIcon />
          </TextButton>
        </Link>
      </TopLinksWrapper>
    </TopHeaderWrapper>
  )
}

export default TopHeader

const TopLinksWrapper = styled.div`
  display: flex;
  align-self: center;

  height: 32px;
  button {
    height: 100%;
    padding: 0 24px;
  }
  button:nth-child(2) {
    border-left: 1px solid #bdbdbd;

    svg {
      margin-left: 4px;
    }
  }
`
const TopNavSubLink = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 112%;
  color: #828282;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: inline-block;
  margin: 0 0 0 8px;
`
const TopNavLink = styled.a`
  color: inherit;
  text-decoration: none;
`

const TopHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  background: #fff;
  display: flex;
  justify-content: center;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.04);

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

const TopHeaderFlag = styled.img`
  position: absolute;
  left: 16px;
  top: 8px;
  width: 48px;
  height: 39px;
`

const TopHeaderTitle = styled.h1`
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  flex-grow: 1;

  @media (min-width: 375px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media (min-width: 768px) {
    text-align: left;
    padding-left: 72px;
  }
`
