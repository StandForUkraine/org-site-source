import { useState, useMemo, useCallback, useEffect } from 'react'
import { useLang } from 'core/utils/lang'
import { useText } from 'utils/lang'
import { allTags, Tag } from 'utils/tags'
import MultipleSelection from 'core/components/MultipleSelection'
import ProjectWidget from './ProjectWidget'
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

  const filteredProjects = useMemo(
    () =>
      projects
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

      {filteredProjects.slice(0, showMoreBtn ? 9 : -1).map((project) => (
        <ProjectWidget key={project.id} project={project} />
      ))}

      <MoreBtnWrapper>
        {showMoreBtn && (
          <TextButton onClick={() => setShowMoreBtn(false)}>{t('allProjects')}</TextButton>
        )}
      </MoreBtnWrapper>
    </ProjectsWrapper>
  )
}

export default Projects

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
`
