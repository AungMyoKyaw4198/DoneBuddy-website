import { APP_STORE_URL } from './constants'

export const SITE_URL = 'https://donebuddy.app'
export const SITE_NAME = 'DoneBuddy'
export const SITE_TAGLINE = 'Build habits. Raise happiness.'
export const SITE_DESCRIPTION =
  'DoneBuddy is a cozy habit tracker with a virtual pet companion. Build daily routines, earn streaks, care for your buddy, and stay motivated every day.'
export const SITE_KEYWORDS =
  'habit tracker, virtual pet, productivity app, streak tracker, daily routines, DoneBuddy, iOS habit app'
export const SITE_OG_IMAGE = `${SITE_URL}/applogo.png`
export const SITE_LOCALE = 'en_US'
export const SITE_TWITTER_HANDLE = '@donebuddy'

export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID ?? 'G-0S3F2EWNDX'
export const GOOGLE_SITE_VERIFICATION = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION

export type PageSeo = {
  title: string
  description: string
  path: string
}

export const PAGE_SEO: Record<string, PageSeo> = {
  '/': {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    path: '/',
  },
  '/about': {
    title: `About ${SITE_NAME}`,
    description:
      'Learn about DoneBuddy — a cozy habit tracker built around companionship, streaks, and an adorable virtual pet that grows with you.',
    path: '/about',
  },
  '/privacy': {
    title: `Privacy Policy — ${SITE_NAME}`,
    description:
      'DoneBuddy privacy policy: how we collect, use, and protect your data when you use our habit tracker app.',
    path: '/privacy',
  },
  '/terms': {
    title: `Terms & Conditions — ${SITE_NAME}`,
    description:
      'DoneBuddy terms and conditions for using the habit tracker app and website.',
    path: '/terms',
  },
}

export const DEFAULT_PAGE_SEO = PAGE_SEO['/']

export const SITE_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: SITE_OG_IMAGE,
      description: SITE_DESCRIPTION,
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'support@donebuddy.app',
        contactType: 'customer support',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-US',
    },
    {
      '@type': 'MobileApplication',
      '@id': `${SITE_URL}/#app`,
      name: SITE_NAME,
      operatingSystem: 'iOS',
      applicationCategory: 'HealthApplication',
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      downloadUrl: APP_STORE_URL,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
} as const
