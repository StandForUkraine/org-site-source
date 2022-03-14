import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Lang } from 'texts'
import { useLang } from 'core/utils/lang'
import { useText } from 'utils/lang'
import TextButton from 'core/components/TextButton'
import OutIcon from 'core/assets/out.svg'
import MenuIcon from 'assets/menu.svg'

export const TopHeader = () => {
  const lang = useLang() as Lang
  const t = useText()
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const rootPathname = lang === 'ua' ? '/' : `/${lang}`
  const donationSiteLink = process.env.NEXT_PUBLIC_DONATION_SITE_BASEURL || ''
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

      <TopLinksWrapper show={showMenu}>
        <Link href={rootPathname + '/about'} passHref>
          <TextButton>{t('aboutUs')}</TextButton>
        </Link>
        <Link href={donationSiteLink} passHref>
          <TextButton>
            {t('supportFinancially')}
            <OutIcon />
          </TextButton>
        </Link>
      </TopLinksWrapper>

      <MenuBtn onClick={() => setShowMenu(!showMenu)}>
        <MenuIcon />
      </MenuBtn>
    </TopHeaderWrapper>
  )
}

export default TopHeader

const MenuBtn = styled.button`
  background: none;
  border: none;
  padding: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`

interface TopLinksWrapperProps {
  show?: boolean
}

const TopLinksWrapper = styled.div<TopLinksWrapperProps>`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: center;

  button:last-child {
    svg {
      margin-left: 4px;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    width: 100%;
    left: 0;
    top: 100%;
    background: #fff;
    flex-direction: column;

    button {
      height: 100%;
      padding: 16px 24px;
    }
  }

  @media (min-width: 768px) {
    height: 32px;
    display: flex;
    align-self: center;

    button {
      height: 100%;
      padding: 0 24px;
    }

    button:last-child {
      border-left: 1px solid #bdbdbd;
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
  margin: 0;

  @media (min-width: 768px) {
    margin: 0 0 0 8px;
  }
`
const TopNavLink = styled.a`
  color: inherit;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    margin: 0;
    flex-direction: row;
    align-items: center;
  }
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
  align-items: center;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.04);
  padding-left: 16px;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

const TopHeaderFlag = styled.img`
  width: 48px;
  height: 39px;

  @media (min-width: 768px) {
    position: absolute;
    left: 16px;
    top: 8px;
  }
`

const TopHeaderTitle = styled.h1`
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  flex-grow: 1;
  margin: 0;
  margin-left: 8px;

  @media (min-width: 375px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media (min-width: 768px) {
    text-align: left;
    padding-left: 72px;
    margin-left: 0;
  }
`
