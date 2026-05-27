import { PawPrint } from 'lucide-react'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-warm-orange/15">
        <PawPrint className="h-5 w-5 text-warm-orange" aria-hidden="true" />
      </div>
      <span className="font-heading text-xl font-semibold text-brown">
        DoneBuddy
      </span>
    </div>
  )
}
