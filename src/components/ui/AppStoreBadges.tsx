import { APP_STORE_URL, GOOGLE_PLAY_URL } from '../../lib/constants'
import HoverScale from './HoverScale'

type AppStoreBadgesProps = {
  className?: string
  size?: 'sm' | 'md'
}

export default function AppStoreBadges({
  className = '',
  size = 'md',
}: AppStoreBadgesProps) {
  const height = size === 'sm' ? 'h-10' : 'h-12'

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <HoverScale>
        <a href={APP_STORE_URL} aria-label="Download on the App Store">
          <img
            src="/assets/badges/app-store.svg"
            alt="Download on the App Store"
            className={`${height} w-auto`}
          />
        </a>
      </HoverScale>
      <HoverScale>
        <a href={GOOGLE_PLAY_URL} aria-label="Get it on Google Play">
          <img
            src="/assets/badges/google-play.svg"
            alt="Get it on Google Play"
            className={`${height} w-auto`}
          />
        </a>
      </HoverScale>
    </div>
  )
}
