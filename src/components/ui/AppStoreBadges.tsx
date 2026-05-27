import { APP_STORE_URL, GOOGLE_PLAY_URL } from '../../lib/constants'
import HoverScale from './HoverScale'

type AppStoreBadgesProps = {
  className?: string
  size?: 'sm' | 'md'
}

const badgeSizes = {
  sm: 'h-10 w-[8.4375rem]',
  md: 'h-12 w-[10.125rem]',
} as const

export default function AppStoreBadges({
  className = '',
  size = 'md',
}: AppStoreBadgesProps) {
  const badgeClass = badgeSizes[size]

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <HoverScale>
        <a
          href={APP_STORE_URL}
          aria-label="Download on the App Store"
          className={`inline-flex items-center justify-center ${badgeClass}`}
        >
          <img
            src="/assets/badges/app-store.svg"
            alt="Download on the App Store"
            className="h-full w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </a>
      </HoverScale>
      <HoverScale>
        <a
          href={GOOGLE_PLAY_URL}
          aria-label="Get it on Google Play"
          className={`inline-flex items-center justify-center ${badgeClass}`}
        >
          <img
            src="/assets/badges/google-play.svg"
            alt="Get it on Google Play"
            className="h-full w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </a>
      </HoverScale>
    </div>
  )
}
