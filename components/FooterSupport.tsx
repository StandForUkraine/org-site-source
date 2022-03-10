import styled from 'styled-components'
import { useText } from 'core/utils/lang'

export default function FooterSupport() {
  const t = useText()

  return (
    <>
      <FooterSupportTitle>{t('footerSupportHeader')}</FooterSupportTitle>
      <FooterSupportWrapper>
        <FooterSupportColumn>
          <FooterSupportImage src="/support/support_1.png" />
          <FooterSupportText>{t('footerSupportText1')}</FooterSupportText>
        </FooterSupportColumn>

        <FooterSupportColumn>
          <FooterSupportImage src="/support/support_2.png" />
          <FooterSupportText>{t('footerSupportText2')}</FooterSupportText>
        </FooterSupportColumn>

        <FooterSupportColumn>
          <FooterSupportImage src="/support/support_3.png" />
          <FooterSupportText>{t('footerSupportText3')}</FooterSupportText>
        </FooterSupportColumn>

        <FooterSupportColumn>
          <FooterSupportImage src="/support/support_4.png" />
          <FooterSupportText>{t('footerSupportText4')}</FooterSupportText>
        </FooterSupportColumn>
      </FooterSupportWrapper>
    </>
  )
}

const FooterSupportWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
const FooterSupportColumn = styled.div`
  display: flex;
  align-items: center;
  flex: 0 1 80%;
  margin: 0 auto 16px;

  @media (min-width: 768px) {
    flex: 0 1 20%;
    margin-right: 40px;
  }
`

const FooterSupportImage = styled.img`
  margin-right: 16px;
`
const FooterSupportText = styled.p`
  font-size: 14px;
  line-height: 140%;
  color: #828282;
  margin: 0;
`

const FooterSupportTitle = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #828282;
`
