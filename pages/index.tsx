import Index from 'components/home-page'
import { loadProjects } from 'utils/projects'

export async function getStaticProps() {
  const projects = loadProjects()

  return {
    props: {
      projects,
    },
  }
}

export default Index
