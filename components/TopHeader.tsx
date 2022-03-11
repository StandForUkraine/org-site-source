import { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Lang } from 'texts'
import { useLang } from 'core/utils/lang'
import { useText } from 'utils/lang'
import TextButton from 'core/components/TextButton'
import OutIcon from 'core/assets/out.svg'

export const TopHeader = () => {
  const lang = useLang() as Lang
  const t = useText()
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const rootPathname = lang === 'ua' ? '/' : `/${lang}`

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

      <MenuBtn onClick={() => setShowMenu(!showMenu)}>
        <MenuBtnLine />
        <MenuBtnLine />
        <MenuBtnLine />
      </MenuBtn>
    </TopHeaderWrapper>
  )
}

export default TopHeader

const MenuBtn = styled.button`
  background: none;
  border: none;
  padding: 0 16px;

  div:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const MenuBtnLine = styled.div`
  height: 2px;
  width: 24px;
  margin-bottom: 4px;
  background: #000000;
`

interface TopLinksWrapperProps {
  show?: boolean
}
const TopLinksWrapper = styled.div<TopLinksWrapperProps>`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: center;

  button:nth-child(2) {
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

    button:nth-child(2) {
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
  align-items: center;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.04);

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

  @media (min-width: 375px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media (min-width: 768px) {
    text-align: left;
    padding-left: 72px;
  }
`
