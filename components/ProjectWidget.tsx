import styled from 'styled-components'
import { ProjectItem } from 'utils/projects'
import { useText } from 'utils/lang'
import LazyLoad from 'react-lazyload'
import { useGtag } from 'core/utils/useGtag'
import { useState } from 'react'
import TelegramIcon from 'assets/telegram.svg'
import InfoPopup from './InfoPopup'
import InfoIcon from 'core/assets/info.svg'
import TextButton from 'core/components/TextButton'

import {
  DonationPost,
  DonationLogo,
  DonationTitle as DonationTitleCore,
  DonationTags,
  DonationDescription,
  DonationFooter as DonationFooterCore,
  DonationButton,
} from 'core/components/DonationWidget'

export const ProjectWidget = ({ project }: { project: ProjectItem }) => {
  const t = useText()
  const gtag = useGtag()
  const [visibleMoreInfo, setVisibleMoreInfo] = useState(false)
  const getTags = () => project.tags.map((tag) => t(tag))
  return (
    <ProjectPost>
      <LazyLoad once offset={500}>
        <ProjectLogo src={project.logo} alt={project.logoAlt || project.title} />
      </LazyLoad>

      <ProjectTitle
        href={project.link}
        target="_blank"
        rel="noopener"
        onClick={() =>
          gtag('event', 'external_link_click', {
            event_category: 'project-title',
            event_label: project.link,
          })
        }
      >
        {project.title}
      </ProjectTitle>

      <DonationTags>{getTags().join(', ')}</DonationTags>
      <DonationDescription>{project.description}</DonationDescription>

      {visibleMoreInfo && <DonationDescription>{project.descriptionLong}</DonationDescription>}

      {project.descriptionLong && (
        <MoreBtn onClick={() => setVisibleMoreInfo(!visibleMoreInfo)}>
          {visibleMoreInfo ? t('less') : t('more')}
        </MoreBtn>
      )}

      <ProjectFooter>
        <DonationButton
          as="a"
          href={project.link}
          target="_blank"
          rel="noopener"
          onClick={() =>
            gtag('event', 'external_link_click', {
              event_category: 'project',
              event_label: project.link,
            })
          }
        >
          {t('openButton')}
        </DonationButton>

        <TelegramLink link={project.link} show={!!project.telegram} />
      </ProjectFooter>
    </ProjectPost>
  )
}

export default ProjectWidget

const TelegramLink = ({ link, show }: { link: string; show: boolean }) => {
  const gtag = useGtag()
  if (!show) return null
  return (
    <IconWrapper>
      <a
        target="_blank"
        href={link}
        rel="noopener"
        onClick={() =>
          gtag('event', 'external_link_click', {
            event_category: 'project-telegram',
            event_label: link,
          })
        }
      >
        <TelegramIcon />
      </a>
    </IconWrapper>
  )
}

const IconWrapper = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const ProjectLogo = styled(DonationLogo)`
  max-height: 64px;
  max-width: 200px;
`

export const ProjectPost = styled(DonationPost)`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  @media (max-width: 768px) {
    .lazyload-wrapper {
      text-align: center;
    }
  }
`

export const ProjectFooter = styled(DonationFooterCore)`
  margin: auto 0 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin: 8px auto 0;
  }
`
export const ProjectTitle = styled(DonationTitleCore)`
  @media (max-width: 768px) {
    text-align: center;
  }
`
const MoreBtn = styled(TextButton)`
  border: none;
  align-self: flex-start;
  margin-left: auto;
`
