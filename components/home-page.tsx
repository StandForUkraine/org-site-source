import React from 'react'
import Head from 'next/head'
import { useMetadataRenderer } from 'core/utils/metadata'
import LandingPage from './LandingPage'
import { langs } from 'core/texts'
import { ProjectItem } from 'utils/projects'

export default function Index({ projects }: { projects: ProjectItem[] }) {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      <Head>{renderMetadata({})}</Head>
      <LandingPage projects={projects || []} />
    </>
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: langs
      .filter((lang) => lang === 'ua' || lang === 'en')
      .map((lang) => ({
        params: { lang },
      })),
  }
}
