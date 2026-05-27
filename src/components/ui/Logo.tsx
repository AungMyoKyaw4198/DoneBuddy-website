import { APP_LOGO } from '../../lib/constants'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={APP_LOGO}
        alt=""
        aria-hidden="true"
        className="h-9 w-9 rounded-xl object-cover shadow-sm"
      />
      <span className="font-heading text-xl font-semibold text-brown">
        DoneBuddy
      </span>
    </div>
  )
}
