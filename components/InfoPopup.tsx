import styled from 'styled-components'
import { ProjectItem } from 'utils/projects'
import { useText } from 'utils/lang'
import { useGtag } from 'core/utils/useGtag'
import Popup from 'core/components/Popup'
import { ProjectLogo } from './ProjectWidget'

export const LegalPopup = ({ project, onClose }: { project: ProjectItem; onClose: () => any }) => {
  const t = useText()
  const gtag = useGtag()

  return (
    <Popup onClose={onClose} width={343}>
      <PopupContent>
        <ProjectLogo src={project.logo} alt={project.logoAlt || project.title} />

        <Title>{project.title}</Title>

        <Description>{project.description}</Description>
      </PopupContent>
    </Popup>
  )
}

export default LegalPopup

const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 28px;
`

const Title = styled.h3`
  display: block;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  margin: 15px 0;
  text-align: center;
`

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  text-align: left;

  hr {
    border: none;
  }
`
