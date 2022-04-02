import styled from 'styled-components'
import Link from 'next/link'
import { useText } from 'utils/lang'
import { useGtag } from 'core/utils/useGtag'

export default function AboutPress() {
  const t = useText()

  return (
    <PressWrapper>
      <PressItem size="large">
        <PressItemTop>
          <div>
            <PressItemTitle>{t('pressTitle1')}</PressItemTitle>
            <PressLink linkIndex={0} />
          </div>
          <PressItemImage src="/press/Today.png" />
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
            <PressLink linkIndex={1} />
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
            <PressLink linkIndex={2} />
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
            <PressLink linkIndex={3} />
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
            <PressLink linkIndex={4} />
          </div>
        </PressItemTop>
        <PressItemText>«{t('pressText5')}»</PressItemText>
      </PressItem>

      <PressItem size="large">
        <PressItemTop>
          <div>
            <PressItemTitle>{t('pressTitle6')}</PressItemTitle>
            <PressLink linkIndex={5} />
          </div>
          <PressItemImage src="/press/dou.png" />
        </PressItemTop>
        <PressItemText>«{t('pressText6')}»</PressItemText>
      </PressItem>
      <PressItem size="large">
        <PressItemTop>
          <div>
            <PressItemTitle>{t('pressTitle7')}</PressItemTitle>
            <PressLink linkIndex={6} />
          </div>
          <PressItemImage src="/press/fix.png" />
        </PressItemTop>
        <PressItemText>«{t('pressText7')}»</PressItemText>
      </PressItem>

      <PressItem size="large">
        <PressItemTop>
          <div>
            <PressItemTitle>{t('pressTitle8')}</PressItemTitle>
            <PressLink linkIndex={7} />
          </div>
          <PressItemImage src="/press/mc.png" />
        </PressItemTop>
        <PressItemText>«{t('pressText8')}»</PressItemText>
      </PressItem>

      <PressItem size="large">
        <PressItemTop>
          <div>
            <PressItemTitle>{t('pressTitle9')}</PressItemTitle>
            <PressLink linkIndex={8} />
          </div>
          <PressItemImage src="/press/dev.png" />
        </PressItemTop>
        <PressItemText>«{t('pressText9')}»</PressItemText>
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
    link: 'https://ain.ua/2022/03/01/yak-otrymaty-medychnu-konsultacziyu-zapraczyuvav-bezkoshtovnyj-bot-turbota/',
    linkName: 'ain.ua',
  },
  {
    link: 'https://ain.ua/2022/02/28/perezapustyly-sajt-opir/',
    linkName: 'ain.ua',
  },
  {
    link: 'https://ain.ua/2022/03/07/vse-shho-potribno-internet-ta-pk-liberator-programa-dlya-ddos-atak-na-sajty-rf/',
    linkName: 'ain.ua',
  },
  {
    link: 'https://dou.ua/forums/topic/37139/',
    linkName: 'dou.ua',
  },
  {
    link: 'https://thefix.media/2022/03/18/how-ukrainians-use-russian-social-platforms-to-break-through-russias-propaganda/',
    linkName: 'thefix.media',
  },
  {
    link: 'https://mc.today/uk/ajtishniki-z-kpi-stvorili-prostij-instrument-dlya-ddos-ataki-jogo-mozhe-zapustiti-bud-hto-za-15-hvilin/',
    linkName: 'mc.today',
  },
  {
    link: 'https://dev.ua/news/bachu-info',
    linkName: 'dev.ua',
  },
]

const PressLink = ({ linkIndex }: { linkIndex: number }) => {
  const gtag = useGtag()

  return (
    <Link href={pressLinks[linkIndex].link}>
      <PressItemLink
        target="_blank"
        rel="noopener"
        onClick={() =>
          gtag('event', 'external_link_click', {
            event_category: 'press',
            event_label: pressLinks[linkIndex].link,
          })
        }
        href={pressLinks[linkIndex].link}
      >
        {pressLinks[linkIndex].linkName}
      </PressItemLink>
    </Link>
  )
}

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
