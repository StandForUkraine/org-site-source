import { Tag } from './tags'
import yaml from 'yaml'
import glob from 'glob'
import path from 'path'
import fs from 'fs'
import getConfig from 'next/config'
const { serverRuntimeConfig } = getConfig()

export interface ProjectItemBase {
  id: number
  logo: string
  logoAlt?: string
  title: string
  description: string
  tags: Tag[]
  link: string,
  telegram?: string
}

export interface ProjectItem extends ProjectItemBase {
  id: number
  byLang: {
    [key: string]: ProjectItemBase
  }
}

export const loadProjects = () => {
  const files = glob.sync(path.join(serverRuntimeConfig.PROJECT_ROOT, 'donations/**/ua.yml'))
  const data = files
    .map((file) => {
      const id = parseInt(path.basename(path.dirname(file)), 10)
      const byLang: any = glob
        .sync(path.join(path.dirname(file), '*.yml'))
        .reduce((obj, langFile) => {
          const lang = path.basename(langFile).replace('.yml', '')
          try {
            return { ...obj, [lang]: yaml.parse(fs.readFileSync(langFile, 'utf-8')) }
          } catch (err) {
            console.error('Failed to load lang', lang, 'for', id, err)
            return { ...obj }
          }
        }, {})

      return {
        ...byLang.ua,
        logo: `/logos/${id}.png`,
        id,
        byLang,
      }
    })
    .sort((a, b) => a.id - b.id)
  return data as ProjectItem[]
}
