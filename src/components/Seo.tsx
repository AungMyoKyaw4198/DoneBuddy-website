import { useEffect } from 'react'
import {
  DEFAULT_PAGE_SEO,
  GOOGLE_SITE_VERIFICATION,
  PAGE_SEO,
  SITE_JSON_LD,
  SITE_KEYWORDS,
  SITE_LOCALE,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_TWITTER_HANDLE,
  SITE_URL,
  type PageSeo,
} from '../lib/site'

function upsertMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    document.head.appendChild(element)
  }

  element.href = href
}

function upsertJsonLd() {
  const id = 'donebuddy-json-ld'
  let element = document.head.querySelector<HTMLScriptElement>(`script#${id}`)

  if (!element) {
    element = document.createElement('script')
    element.id = id
    element.type = 'application/ld+json'
    document.head.appendChild(element)
  }

  element.textContent = JSON.stringify(SITE_JSON_LD)
}

function applySeo({ title, description, path }: PageSeo) {
  const canonicalUrl = new URL(path, SITE_URL).href

  document.title = title

  upsertMeta('name', 'description', description)
  upsertMeta('name', 'keywords', SITE_KEYWORDS)
  upsertMeta('name', 'author', SITE_NAME)
  upsertMeta('name', 'robots', 'index, follow, max-image-preview:large')
  upsertMeta('name', 'googlebot', 'index, follow')

  upsertLink('canonical', canonicalUrl)

  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:site_name', SITE_NAME)
  upsertMeta('property', 'og:title', title)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:url', canonicalUrl)
  upsertMeta('property', 'og:image', SITE_OG_IMAGE)
  upsertMeta('property', 'og:locale', SITE_LOCALE)

  upsertMeta('name', 'twitter:card', 'summary')
  upsertMeta('name', 'twitter:title', title)
  upsertMeta('name', 'twitter:description', description)
  upsertMeta('name', 'twitter:image', SITE_OG_IMAGE)
  upsertMeta('name', 'twitter:site', SITE_TWITTER_HANDLE)

  if (GOOGLE_SITE_VERIFICATION) {
    upsertMeta('name', 'google-site-verification', GOOGLE_SITE_VERIFICATION)
  }

  upsertJsonLd()
}

type SeoProps = {
  pathname: string
}

export default function Seo({ pathname }: SeoProps) {
  useEffect(() => {
    const seo = PAGE_SEO[pathname] ?? DEFAULT_PAGE_SEO
    applySeo(seo)
  }, [pathname])

  return null
}
