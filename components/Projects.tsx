import { useState, useMemo, useCallback, useEffect } from 'react'
import { useLang } from 'core/utils/lang'
import { useText } from 'utils/lang'
import { allTags, Tag } from 'utils/tags'
import MultipleSelection from 'core/components/MultipleSelection'
import ProjectWidget from './ProjectWidget'
import ProjectWidgetSmall from './ProjectWidgetSmall'
import { ProjectItem } from 'utils/projects'
import TextButton from 'core/components/TextButton'
import styled from 'styled-components'

export const Projects = ({ projects }: { projects: ProjectItem[] }) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  const [showMoreBtn, setShowMoreBtn] = useState<Boolean>(true)
  const lang = useLang()
  const t = useText()
  useEffect(() => {
    if (selectedTags.length > 0) {
      setShowMoreBtn(false)
    } else {
      setShowMoreBtn(true)
    }
  }, [selectedTags])
  const partnersProjects = useMemo(
    () =>
      projects.filter((p) => p.partner).map((project) => ({ ...project, ...project.byLang[lang] })),
    [projects, lang]
  )
  const filteredProjects = useMemo(
    () =>
      projects
        .filter((p) => !p.partner)
        .filter((project) => {
          const tagResult =
            selectedTags.length > 0
              ? !!project.tags.find((tag) => selectedTags.indexOf(tag) >= 0)
              : true
          return tagResult
        })
        .map((project) => ({ ...project, ...project.byLang[lang] })),
    [projects, selectedTags, lang]
  )

  const onTagClick = useCallback(
    (tag: Tag) => {
      const newTags =
        selectedTags.indexOf(tag) >= 0
          ? selectedTags.filter((_t) => _t !== tag)
          : [...selectedTags, tag]
      setSelectedTags(newTags)
    },
    [selectedTags, setSelectedTags]
  )

  return (
    <ProjectsWrapper>
      <FilterWrapper>
        <MultipleSelection
          title=""
          allOptions={[...allTags]}
          selectedOptions={selectedTags}
          onOptionClick={onTagClick}
          toLabel={t}
        />
      </FilterWrapper>

      {filteredProjects.length < 1 && <h1>Nothing found.</h1>}

      <ListWrapper>
        {filteredProjects.slice(0, showMoreBtn ? 9 : filteredProjects.length).map((project) => (
          <ProjectWidget key={project.id} project={project} />
        ))}
      </ListWrapper>

      <MoreBtnWrapper>
        {showMoreBtn && (
          <TextButton onClick={() => setShowMoreBtn(false)}>{t('allProjects')}</TextButton>
        )}
      </MoreBtnWrapper>

      <PartnerTitle>{t('partners')}</PartnerTitle>
      <ListWrapper>
        {partnersProjects.map((project) => (
          <ProjectWidgetSmall key={project.id} project={project} />
        ))}
      </ListWrapper>
    </ProjectsWrapper>
  )
}

export default Projects

const PartnerTitle = styled.h3`
  font-weight: 900;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
  padding: 12px 8px;
  margin: 0 0 16px;
  border-bottom: 1px solid #e0e0e0;

  @media (min-width: 768px) {
    padding: 12px 0;
  }
`

const ProjectsWrapper = styled.div`
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
`

const MoreBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 40px;
`

const FilterWrapper = styled.div`
  margin: auto;
  @media (min-width: 768px) {
    max-width: max-content;
  }
`
const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
