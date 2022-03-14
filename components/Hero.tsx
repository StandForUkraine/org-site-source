import styled from 'styled-components'
import { useText } from 'utils/lang'
import Langs from './Langs'

export const Hero = () => {
  const t = useText()

  return (
    <>
      <Langs />
      <HeroWrapper>
        <HeroHeader>{t('heroHeader')}</HeroHeader>
        <HeroText>{t('heroText1')}</HeroText>
        <HeroText>{t('heroText2')}</HeroText>
      </HeroWrapper>
    </>
  )
}

export default Hero

const HeroWrapper = styled.div`
  padding: 24px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroHeader = styled.h1`
  font-size: 64px;
  line-height: 78px;
  font-weight: 900;
  text-align: center;
  margin: 0;
  word-wrap: break-word;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 44px;
  }
`

export const HeroText = styled.p`
  font-size: 20px;
  line-height: 140%;
  text-align: center;
  color: #333;
  max-width: 720px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`
