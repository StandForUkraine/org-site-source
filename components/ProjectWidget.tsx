import styled from 'styled-components'
import { ProjectItem } from 'utils/projects'
import { useText } from 'core/utils/lang'
import LazyLoad from 'react-lazyload'
import Button from 'core/components/Button'
import { useGtag } from 'core/utils/useGtag'
import InfoIcon from 'core/assets/info.svg'
import LegalPopup from 'core/components/LegalPopup'
import { useState } from 'react'
import TelegramIcon from 'assets/telegram.svg'

import {
  DonationPost,
  DonationLogo,
  DonationTitle,
  DonationTags,
  DonationDescription,
  DonationPayMethods,
  DonationFooter,
  DonationButton,
  LegalNumber,
} from 'core/components/DonationWidget'

export const ProjectWidget = ({ project }: { project: ProjectItem }) => {
  const [visibleLegalPopup, setVisibleLegalPopup] = useState(false)
  const t = useText()
  const gtag = useGtag()

  return (
    <DonationPost>
      <LazyLoad once offset={500}>
        <DonationLogo src={project.logo} alt={project.logoAlt || project.title} />
      </LazyLoad>

      <DonationTitle
        href={project.link}
        target="_blank"
        rel="noopener"
        onClick={() =>
          gtag('event', 'external_link_click', {
            event_category: 'home_page',
            event_label: project.link,
          })
        }
      >
        {project.title}
      </DonationTitle>

      <DonationTags>{project.tags.join(', ')}</DonationTags>
      <DonationDescription>{project.description}</DonationDescription>

      <DonationFooter>
        <DonationButton
          as="a"
          href={project.link}
          target="_blank"
          rel="noopener"
          // onClick={() =>
          //   gtag('event', 'external_link_click', {
          //     event_category: 'donate',
          //     event_label: project.link,
          //   })
          // }
        >
          {t('openButton')}
        </DonationButton>
        {project.telegram && (
          <TelegramIconWrapper>
            <TelegramIcon />
          </TelegramIconWrapper>
        )}
      </DonationFooter>
    </DonationPost>
  )
}

export default ProjectWidget

const TelegramIconWrapper = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
`
