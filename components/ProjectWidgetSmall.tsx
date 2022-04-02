import styled from 'styled-components'
import { ProjectItem } from 'utils/projects'
import { useText } from 'utils/lang'
import LazyLoad from 'react-lazyload'
import { useGtag } from 'core/utils/useGtag'
import { useState } from 'react'
import TelegramIcon from 'assets/telegram.svg'

import { DonationDescription, DonationButton } from 'core/components/DonationWidget'

import { ProjectPost, ProjectLogo, ProjectTitle, ProjectFooter } from './ProjectWidget'

export const ProjectWidgetSmall = ({ project }: { project: ProjectItem }) => {
  const t = useText()
  const gtag = useGtag()
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

      <DonationDescription>{project.description}</DonationDescription>

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
      </ProjectFooter>
    </ProjectPost>
  )
}

export default ProjectWidgetSmall
