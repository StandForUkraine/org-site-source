import React from 'react'
import Head from 'next/head'
import { useMetadataRenderer } from 'core/utils/metadata'
import About from './About'
import { langs } from 'core/texts'

export default function AboutPage() {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      <Head>{renderMetadata({})}</Head>
      <About />
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
