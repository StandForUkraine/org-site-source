import styled from 'styled-components'
import Link from 'next/link'
import { useText } from 'utils/lang'
import { useGtag } from 'core/utils/useGtag'

export default function AboutPress() {
  const t = useText()
  const gtag = useGtag()

  return (
    <PressWrapper>
      <PressItem size="large">
        <PressItemTop>
          <div>
            <PressItemTitle>{t('pressTitle1')}</PressItemTitle>
            <Link href={pressLinks[0].link}>
              <PressItemLink
                target="_blank"
                rel="noopener"
                onClick={() =>
                  gtag('event', 'external_link_click', {
                    event_category: 'press',
                    event_label: pressLinks[0].link,
                  })
                }
                href={pressLinks[0].link}
              >
                {pressLinks[0].linkName}
              </PressItemLink>
            </Link>
          </div>
          <PressItemImage src="/press/today.png" />
        </PressItemTop>
        <PressItemText>«{t('pressText1')}»</PressItemText>
        <PressItemBottom>
          <PressItemLogo src="/press/saveua.png" />
          <PressItemBottomText>{t('pressAboutText1')}</PressItemBottomText>
        </PressItemBottom>
      </PressItem>

      <PressItem size="large">
        <PressItemTop>
          <div>
            <PressItemTitle>{t('pressTitle2')}</PressItemTitle>
            <Link href={pressLinks[1].link}>
              <PressItemLink href={pressLinks[1].link}>{pressLinks[1].linkName}</PressItemLink>
            </Link>
          </div>
          <PressItemImage src="/press/AP.png" />
        </PressItemTop>
        <PressItemText>«{t('pressText2')}»</PressItemText>
      </PressItem>

      <PressImageWrapper>
        <PressItemImage src="/press/AIN.png" />
      </PressImageWrapper>

      <PressItem>
        <PressItemTop>
          <div>
            <PressItemTitle>{t('pressTitle3')}</PressItemTitle>
            <Link href={pressLinks[2].link}>
              <PressItemLink href={pressLinks[2].link}>{pressLinks[2].linkName}</PressItemLink>
            </Link>
          </div>
        </PressItemTop>
        <PressItemText>«{t('pressText3')}»</PressItemText>
        <PressItemBottom>
          <PressItemLogo src="/press/care.png" />
          <PressItemBottomText>{t('pressAboutText3')}</PressItemBottomText>
        </PressItemBottom>
      </PressItem>

      <PressItem>
        <PressItemTop>
          <div>
            <PressItemTitle>{t('pressTitle4')}</PressItemTitle>
            <Link href={pressLinks[3].link}>
              <PressItemLink href={pressLinks[3].link}>{pressLinks[3].linkName}</PressItemLink>
            </Link>
          </div>
        </PressItemTop>
        <PressItemText>«{t('pressText4')}»</PressItemText>
        <PressItemBottom>
          <PressItemLogo src="/press/opir.png" />
          <PressItemBottomText>{t('pressAboutText4')}</PressItemBottomText>
        </PressItemBottom>
      </PressItem>

      <PressItem>
        <PressItemTop>
          <div>
            <PressItemTitle>{t('pressTitle5')}</PressItemTitle>
            <Link href={pressLinks[4].link}>
              <PressItemLink href={pressLinks[4].link}>{pressLinks[4].linkName}</PressItemLink>
            </Link>
          </div>
        </PressItemTop>
        <PressItemText>«{t('pressText5')}»</PressItemText>
      </PressItem>
    </PressWrapper>
  )
}

const pressLinks = [
  {
    link: 'https://hub.segodnya.ua/ua/hub/economics/ukrainskoe-it-soobshchestvo-sozdalo-telegramm-bot-koordiniruyushchiy-volonterskuyu-pomoshch-1606621.html',
    linkName: 'segodnya.ua',
  },
  {
    link: 'https://apnews.com/article/russia-ukraine-technology-europe-hacking-f2c4960e48b8022a567780f3602b54e2',
    linkName: 'apnews.com',
  },
  {
    link: 'https://ain.ua/2022/03/07/vse-shho-potribno-internet-ta-pk-liberator-programa-dlya-ddos-atak-na-sajty-rf/',
    linkName: 'ain.ua',
  },
  {
    link: 'https://ain.ua/2022/03/01/yak-otrymaty-medychnu-konsultacziyu-zapraczyuvav-bezkoshtovnyj-bot-turbota/',
    linkName: 'ain.ua',
  },
  {
    link: 'https://ain.ua/2022/02/28/perezapustyly-sajt-opir/',
    linkName: 'ain.ua',
  },
]

interface PressItemProps {
  size?: 'large'
}

const PressWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 16px 40px;
  border-bottom: 1px solid #e0e0e0;

  @media (min-width: 768px) {
    padding: 0 0 40px;
  }
`

const PressItem = styled.div<PressItemProps>`
  width: 100%;
  display: inline-block;

  @media (min-width: 768px) {
    width: ${(props) => (props.size === 'large' ? 'calc(50% - 40px)' : 'calc((100% - 80px) / 3)')};
  }
`

const PressItemTop = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 24px 0 4px;
`

const PressItemBottom = styled.div`
  display: flex;
  align-items: center;
`

const PressImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const PressItemImage = styled.img`
  margin-left: 8px;
`

const PressItemLogo = styled.img`
  margin-right: 8px;
  width: 29px;
  height: 29px;
`

const PressItemTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: #4f4f4f;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`
const PressItemText = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 128%;
  color: #000000;
  margin: 24px 0 12px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`

const PressItemBottomText = styled.p`
  font-size: 16px;
  line-height: 140%;
  color: #4f4f4f;
`

const PressItemLink = styled.a`
  font-size: 16px;
  line-height: 22px;
  text-decoration-line: underline;
  color: #2f80ed;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`
