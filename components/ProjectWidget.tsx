import styled from 'styled-components'
import { ProjectItem } from 'utils/projects'
import { useText } from 'utils/lang'
import LazyLoad from 'react-lazyload'
import { useGtag } from 'core/utils/useGtag'
import { useState } from 'react'
import TelegramIcon from 'assets/telegram.svg'

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
  const getTags = () => project.tags.map((tag) => t(tag))
  return (
    <ProjectPost>
      <LazyLoad once offset={500}>
        <ProjectLogo src={project.logo} alt={project.logoAlt || project.title} />
      </LazyLoad>

      <DonationTitle
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
      </DonationTitle>

      <DonationTags>{getTags().join(', ')}</DonationTags>
      <DonationDescription>{project.description}</DonationDescription>

      <DonationFooter>
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
        {project.telegram && (
          <TelegramIconWrapper>
            <a
              target="_blank"
              href={project.link}
              rel="noopener"
              onClick={() =>
                gtag('event', 'external_link_click', {
                  event_category: 'project-telegram',
                  event_label: project.link,
                })
              }
            >
              <TelegramIcon />
            </a>
          </TelegramIconWrapper>
        )}
      </DonationFooter>
    </ProjectPost>
  )
}

export default ProjectWidget

const TelegramIconWrapper = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
`
const ProjectLogo = styled(DonationLogo)`
  max-height: 64px;
  max-width: 200px;
`

const ProjectPost = styled(DonationPost)`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    .lazyload-wrapper {
      text-align: center;
    }
  }
`

const DonationFooter = styled(DonationFooterCore)`
  margin: auto 0 0;

  @media (max-width: 768px) {
    margin: 8px auto 0;
  }
`
const DonationTitle = styled(DonationTitleCore)`
  @media (max-width: 768px) {
    text-align: center;
  }
`
